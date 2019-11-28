package facades;

import entities.Software;
import entities.dto.SoftwareDTO;
import entities.Category;
import entities.SoftwareOrder;
import entities.SoftwareOrderLine;
import entities.dto.SoftwareOrderDTO;
import errorhandling.NotFoundException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import utils.EMF_Creator;

/**
 *
 * @author Martin Frederiksen
 */
public class SoftwareOrderFacadeTest {
    private static EntityManagerFactory emf;
    private static SoftwareOrderFacade facade;
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
    
    public SoftwareOrderFacadeTest() {
    }
    
    @BeforeAll
    public static void setUpClassV2() {
       emf = EMF_Creator.createEntityManagerFactory(EMF_Creator.DbSelector.TEST,EMF_Creator.Strategy.DROP_AND_CREATE);
       facade = SoftwareOrderFacade.getSoftwareOrderFacade(emf);
    }
    
    @AfterAll
    public static void tearDownClass() {
    }
    
    @BeforeEach
    public void setUp() {
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
    
    @AfterEach
    public void tearDown() {
    }

    /**
     * Test of getSoftwareFacade method, of class SoftwareFacade.
     */
    @Test
    public void testGetSoftwareOrderFacade() {
        EntityManagerFactory _emf = emf.createEntityManager().getEntityManagerFactory();
        SoftwareOrderFacade expResult = facade;
        SoftwareOrderFacade result = SoftwareOrderFacade.getSoftwareOrderFacade(_emf);
        assertEquals(expResult, result);
    }
    
    @Test
    public void testGetSoftwareAll() {
        List<SoftwareOrderDTO> expResult = softwareOrdersDTO;
        List<SoftwareOrderDTO> result = facade.getAllSoftwareOrder();
        assertEquals(expResult, result);
    }
    
    @Test 
    public void testGetSoftwareById() throws NotFoundException {
        SoftwareOrderDTO expResult = softwareOrdersDTO.get(1);
        SoftwareOrderDTO result = facade.getSoftwareOrderById(softwareOrdersDTO.get(1).getId());
        assertEquals(expResult, result);
    }
    
    @Test 
    public void testAddSoftwareOrder() throws NotFoundException {        
        List<SoftwareOrderLine> orderLines = new ArrayList();
        for(Software software : softwareSingle)
            orderLines.add(new SoftwareOrderLine(software, 0, 2));
        
        SoftwareOrderDTO softwareOrderDTO = new SoftwareOrderDTO(new SoftwareOrder(new Date(), orderLines));
        facade.addSoftwareOrder(softwareOrderDTO);
        
        EntityManagerFactory _emf = emf.createEntityManager().getEntityManagerFactory();
        Long result = _emf.createEntityManager().createQuery("SELECT COUNT(o) FROM SoftwareOrder o", Long.class).getSingleResult();
        Long expected = softwareOrders.size() + 1L;
        
        assertEquals(expected, result);
    }
}
