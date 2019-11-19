package facades;

import entities.Software;
import entities.dto.SoftwareDTO;
import java.util.ArrayList;
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
public class SoftwareFacadeTest {
    private static EntityManagerFactory emf;
    private static SoftwareFacade facade;
    private static List<SoftwareDTO> softwares;
    private static Software s1, s2;
    
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
        try {
            em.getTransaction().begin();
            em.createNamedQuery("Software.deleteAllRows").executeUpdate();
            s1 = new Software("Word", "Software for words", 3000, "Thumbnail to word logo");
            s2 = new Software("Excel", "Software for numbers", 5000, "Thumbnail to excel logo");
            em.persist(s1);
            em.getTransaction().commit();
            em.getTransaction().begin();
            em.persist(s2);
            em.getTransaction().commit();
            softwares.add(new SoftwareDTO(s1));
            softwares.add(new SoftwareDTO(s2));
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
    
}
