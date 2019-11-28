package facades;

import entities.Software;
import entities.dto.SoftwareDTO;
import entities.Category;
import errorhandling.NotFoundException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Disabled;
import utils.EMF_Creator;

/**
 *
 * @author Martin Frederiksen
 */
@Disabled
public class SoftwareFacadeTest {
    private static EntityManagerFactory emf;
    private static SoftwareFacade facade;
    private static List<SoftwareDTO> softwares;
    private static List<Software> softwareSingle;
    private static List<Category> cat;
    private static Software s1, s2;
    private static Category c1, c2;
    
    public SoftwareFacadeTest() {
    }
    
    public static void setUpClass() {
        emf = EMF_Creator.createEntityManagerFactory(
                "pu",
                "jdbc:mysql://localhost:3307/startcode_test",
                "dev",
                "ax2",
                EMF_Creator.Strategy.CREATE);
        facade = SoftwareFacade.getSoftwareFacade(emf);
    }
    
    @BeforeAll
    public static void setUpClassV2() {
       emf = EMF_Creator.createEntityManagerFactory(EMF_Creator.DbSelector.TEST,EMF_Creator.Strategy.DROP_AND_CREATE);
       facade = SoftwareFacade.getSoftwareFacade(emf);
    }
    
    @AfterAll
    public static void tearDownClass() {
    }
    
    @BeforeEach
    public void setUp() {
        EntityManager em = emf.createEntityManager();
        softwares = new ArrayList();
        softwareSingle = new ArrayList();
        cat = new ArrayList();
        try {
            em.getTransaction().begin();
            em.createNamedQuery("SoftwareOrderLine.deleteAllRows").executeUpdate();
            em.createNamedQuery("SoftwareOrder.deleteAllRows").executeUpdate();
            em.createNamedQuery("Software.deleteAllRows").executeUpdate();
            em.createNamedQuery("Category.deleteAllRows").executeUpdate();
            c1 = new Category("Programming");
            c2 = new Category("Images");
            em.persist(c1);
            em.persist(c2);
            s1 = new Software("Netbeans", "Programmers dream", 280000, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Apache_NetBeans_Logo.svg/1200px-Apache_NetBeans_Logo.svg.png", 
                (Arrays.asList("Version: 14.0.4", "Compatability: Windows, MacOS, Linux")), Arrays.asList(c1));
            s2 = new Software("Visual Studio Code", "Programmers dream", 280000, "https://mospaw.com/wp-content/uploads/2018/07/Visual_Studio_code_logo.png", 
                (Arrays.asList("Version: 14.0.4", "Compatability: Windows, MacOS, Linux")), Arrays.asList(c2));
            
            em.persist(s1);
            em.getTransaction().commit();
            em.getTransaction().begin();
            em.persist(s2);
            em.getTransaction().commit();
            
            
            softwares.add(new SoftwareDTO(s1));
            softwares.add(new SoftwareDTO(s2));
            softwareSingle.add(s1);
            softwareSingle.add(s2);
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
    public void testGetSoftwareFacade() {
        EntityManagerFactory _emf = emf.createEntityManager().getEntityManagerFactory();
        SoftwareFacade expResult = facade;
        SoftwareFacade result = SoftwareFacade.getSoftwareFacade(_emf);
        assertEquals(expResult, result);
    }

    @Test
    public void testGetSoftwareAll() {
        List<SoftwareDTO> expResult = softwares;
        List<SoftwareDTO> result = facade.getSoftwareAll();
        assertEquals(expResult, result);
    }
    
    @Test 
    public void testGetSoftwareById() throws NotFoundException {
        SoftwareDTO expResult = softwares.get(1);
        assertEquals(expResult, facade.getSoftwareById(softwares.get(1).getId()));
        
    }
    
    @Test
    public void getSoftwareByCategory() throws NotFoundException {
        List<SoftwareDTO> expResult = softwares;
        List<SoftwareDTO> result = facade.getSoftwareByCategory(c1.getId() + "," + c2.getId());
        assertEquals(expResult, result);
    }
    
}
