/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import entities.Contact;
import entities.dto.ContactDTO;
import io.restassured.RestAssured;
import static io.restassured.RestAssured.given;
import io.restassured.parsing.Parser;
import java.net.URI;
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
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import utils.EMF_Creator;

/**
 *
 * @author William Huusfeldt
 */
public class ContactResourceTest {
    private static final int SERVER_PORT = 7777;
    private static final String SERVER_URL = "http://localhost/api";
    private static Contact c1, c2;

    static final URI BASE_URI = UriBuilder.fromUri(SERVER_URL).port(SERVER_PORT).build();
    private static HttpServer httpServer;
    private static EntityManagerFactory emf;
    

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
    public void setUp() {
        EntityManager em = emf.createEntityManager();
        c1 = new Contact("William Huusfeldt", "william@test.dk", "12345678", "Testing", "Please be green", new Date(), false);
        c2 = new Contact("Andreas Ukrudt", "ukrudtfri@påenuge", "87654321", "Skal jeg fjerne jeres ukrudt?", "I kan få et godt tilbud", new Date(), false);
        try {
            em.getTransaction().begin();
            em.createNamedQuery("Contact.deleteAllRows").executeUpdate();
            em.persist(c1);
            em.persist(c2);
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }
    
    @Test
    public void testContactAll200() throws Exception {
        given()
                .contentType("application/json")
                .get("/contacts/all").then()
                .assertThat()
                .statusCode(HttpStatus.OK_200.getStatusCode())
                .body("size()", equalTo(2));
    }
    
    @Test
    public void testContactById200() throws Exception {
        given()
                .contentType("application/json")
                .get("/contacts/" + c1.getId()).then()
                .assertThat()
                .statusCode(HttpStatus.OK_200.getStatusCode())
                .body("subject", equalTo(c1.getSubject()));
    }
    
    @Test
    public void testContactById400() throws Exception {
        given()
                .contentType("application/json")
                .get("/contacts/0").then()
                .assertThat()
                .statusCode(HttpStatus.BAD_REQUEST_400.getStatusCode());
    }
    
    @Test
    public void testContactById404() throws Exception {
        given()
                .contentType("application/json")
                .get("/contacts/73").then()
                .assertThat()
                .statusCode(HttpStatus.NOT_FOUND_404.getStatusCode());
    }
    
//    @Test
//    public void testContactAdd200() throws Exception {
//        System.out.println("-----------------");
//        Date d = new Date();
//        ContactDTO c = new ContactDTO(new Contact("William Huusfeldt", "william@test.dk", "12345678", "Testing", "Please be green", d, false));
//        
//        given()
//                .contentType("application/json")
//                .body(c)
//                .post("/contacts/add").then()
//                .assertThat()
//                .statusCode(HttpStatus.OK_200.getStatusCode())
//                .body("phone", equalTo("12345678"));
//    }
    
}
