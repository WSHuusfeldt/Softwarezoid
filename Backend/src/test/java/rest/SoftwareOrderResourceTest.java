/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import entities.Category;
import entities.Software;
import entities.SoftwareOrder;
import entities.SoftwareOrderLine;
import entities.dto.SoftwareDTO;
import entities.dto.SoftwareOrderDTO;
import io.restassured.RestAssured;
import static io.restassured.RestAssured.given;
import io.restassured.parsing.Parser;
import java.net.MalformedURLException;
import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.core.UriBuilder;
import org.glassfish.grizzly.http.server.HttpServer;
import org.glassfish.grizzly.http.util.HttpStatus;
import org.glassfish.jersey.grizzly2.httpserver.GrizzlyHttpServerFactory;
import org.glassfish.jersey.server.ResourceConfig;
import static org.hamcrest.Matchers.equalTo;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import utils.EMF_Creator;

/**
 *
 * @author Martin Frederiksen
 */
public class SoftwareOrderResourceTest {
    private static final int SERVER_PORT = 7777;
    private static final String SERVER_URL = "http://localhost/api";

    static final URI BASE_URI = UriBuilder.fromUri(SERVER_URL).port(SERVER_PORT).build();
    private static HttpServer httpServer;
    private static EntityManagerFactory emf;
    
    private static List<SoftwareDTO> softwares;
    private static List<Software> softwareSingle;
    private static List<SoftwareOrder> softwareOrders;
    private static List<SoftwareOrderDTO> softwareOrdersDTO;
    private static List<SoftwareOrderLine> softwareOrderLines;
    private static List<Category> cat;
    private static Software s1, s2;
    private static Category c1, c2;
    private static SoftwareOrder so1, so2;
    private static SoftwareOrderLine sol1, sol2, sol3, sol4;

    static HttpServer startServer() {
        ResourceConfig rc = ResourceConfig.forApplication(new ApplicationConfig());
        return GrizzlyHttpServerFactory.createHttpServer(BASE_URI, rc);
    }
    
    @BeforeAll
    public static void setUpClass() {
        //This method must be called before you request the EntityManagerFactory
        EMF_Creator.startREST_TestWithDB();
        emf = EMF_Creator.createEntityManagerFactory(EMF_Creator.DbSelector.TEST, EMF_Creator.Strategy.DROP_AND_CREATE);

        httpServer = startServer();
        //Setup RestAssured
        RestAssured.baseURI = SERVER_URL;
        RestAssured.port = SERVER_PORT;
        RestAssured.defaultParser = Parser.JSON;
    }
    
    @AfterAll
    public static void tearDownClass() {
        //Don't forget this, if you called its counterpart in @BeforeAll
        EMF_Creator.endREST_TestWithDB();
        httpServer.shutdownNow();
    }
    
    @BeforeEach
    public void setUp() throws MalformedURLException {
        EntityManager em = emf.createEntityManager();
        softwares = new ArrayList();
        softwareSingle = new ArrayList();
        softwareOrders = new ArrayList();
        softwareOrdersDTO = new ArrayList();
        softwareOrderLines = new ArrayList();
        cat = new ArrayList();
        try {
            c1 = new Category("Programming");
            c2 = new Category("Images");
            s1 = new Software("Netbeans", "Programmers dream", 280000, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Apache_NetBeans_Logo.svg/1200px-Apache_NetBeans_Logo.svg.png", 
                (Arrays.asList("Version: 14.0.4", "Compatability: Windows, MacOS, Linux")), Arrays.asList(c1));
            s2 = new Software("Visual Studio Code", "Programmers dream", 280000, "https://mospaw.com/wp-content/uploads/2018/07/Visual_Studio_code_logo.png", 
                (Arrays.asList("Version: 14.0.4", "Compatability: Windows, MacOS, Linux")), Arrays.asList(c2));
            sol1 = new SoftwareOrderLine(s1, s1.getPrice(), 2);
            sol2 = new SoftwareOrderLine(s2, s2.getPrice(), 3);
            sol3 = new SoftwareOrderLine(s1, s1.getPrice(), 6);
            sol4 = new SoftwareOrderLine(s2, s2.getPrice(), 4);
            softwareOrderLines.add(sol1);
            softwareOrderLines.add(sol2);
            softwareOrderLines.add(sol3);
            softwareOrderLines.add(sol4);
            so1 = new SoftwareOrder(new Date(), softwareOrderLines.subList(0, 2));
            so2 = new SoftwareOrder(new Date(), softwareOrderLines.subList(2, 4));
            
            em.getTransaction().begin();
            em.createNamedQuery("SoftwareOrderLine.deleteAllRows").executeUpdate();
            em.createNamedQuery("SoftwareOrder.deleteAllRows").executeUpdate();
            em.createNamedQuery("Software.deleteAllRows").executeUpdate();
            em.createNamedQuery("Category.deleteAllRows").executeUpdate();
            
            em.persist(c1);
            em.persist(c2);
            em.persist(s1);
            em.persist(s2);
            
            softwareOrderLines.get(0).setAssociatedSoftwareOrder(so1);
            em.persist(softwareOrderLines.get(0));
            softwareOrderLines.get(1).setAssociatedSoftwareOrder(so1);
            em.persist(softwareOrderLines.get(1));
            
            em.persist(so1);
            em.getTransaction().commit();
            
            em.getTransaction().begin();
            softwareOrderLines.get(2).setAssociatedSoftwareOrder(so2);
            em.persist(softwareOrderLines.get(2));
            softwareOrderLines.get(3).setAssociatedSoftwareOrder(so2);
            em.persist(softwareOrderLines.get(3));
            em.persist(so2);
            em.getTransaction().commit();
            
            softwares.add(new SoftwareDTO(s1));
            softwares.add(new SoftwareDTO(s2));
            softwareSingle.add(s1);
            softwareSingle.add(s2);
            softwareOrders.add(so1);
            softwareOrders.add(so2);
            softwareOrdersDTO.add(new SoftwareOrderDTO(so1));
            softwareOrdersDTO.add(new SoftwareOrderDTO(so2));
        } finally {
            em.close();
        }
    }
    
    @Test
    public void testSoftwareAll200() throws Exception {
        given()
                .contentType("application/json")
                .get("/order/all").then()
                .assertThat()
                .statusCode(HttpStatus.OK_200.getStatusCode())
                .body("size()", equalTo(softwareOrders.size()));
    }
    
    @Test
    public void testSoftwareById200() throws Exception {
        given()
                .contentType("application/json")
                .get("/order/" + so1.getId()).then()
                .assertThat()
                .statusCode(HttpStatus.OK_200.getStatusCode())
                .body("orderLines.size", equalTo(so1.getOrderLines().size()));
    }

    @Test
    public void testSoftwareById400() throws Exception {
        given()
                .contentType("application/json")
                .get("/software/0").then()
                .assertThat()
                .statusCode(HttpStatus.BAD_REQUEST_400.getStatusCode());
    }

    @Test
    public void testSoftwareById404() throws Exception {
        given()
                .contentType("application/json")
                .get("/software/9999999999999").then()
                .assertThat()
                .statusCode(HttpStatus.NOT_FOUND_404.getStatusCode());
    }
}
