package facades;

import entities.Category;
import entities.dto.CategoryDTO;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
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
public class CategoryFacadeTest {
    private static EntityManagerFactory emf;
    private static CategoryFacade facade;
    private static List<CategoryDTO> cat;
    private static Category c1, c2;
    
    public CategoryFacadeTest() {
    }
    
    public static void setUpClass() {
        emf = EMF_Creator.createEntityManagerFactory(
                "pu",
                "jdbc:mysql://localhost:3307/startcode_test",
                "dev",
                "ax2",
                EMF_Creator.Strategy.CREATE);
        facade = CategoryFacade.getCategoryFacade(emf);
    }
    
    @BeforeAll
    public static void setUpClassV2() {
       emf = EMF_Creator.createEntityManagerFactory(EMF_Creator.DbSelector.TEST,EMF_Creator.Strategy.DROP_AND_CREATE);
       facade = CategoryFacade.getCategoryFacade(emf);
    }
    
    @AfterAll
    public static void tearDownClass() {
    }
    
    @BeforeEach
    public void setUp() {
        EntityManager em = emf.createEntityManager();
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
            em.getTransaction().commit();
            em.getTransaction().begin();
            em.persist(c2);
            em.getTransaction().commit();
            cat.add(new CategoryDTO(c1));
            cat.add(new CategoryDTO(c2));
        } finally {
            em.close();
        }
    }

    /**
     * Test of getCategoryFacade method, of class CategoryFacade.
     */
    @Test
    public void testGetCategoryFacade() {
        EntityManagerFactory _emf = emf.createEntityManager().getEntityManagerFactory();
        CategoryFacade expResult = facade;
        CategoryFacade result = CategoryFacade.getCategoryFacade(_emf);
        assertEquals(expResult, result);
    }

    /**
     * Test of getCategoryAll method, of class CategoryFacade.
     */
    @Test
    public void testGetCategoryAll() {
        List<CategoryDTO> expResult = cat;
        List<CategoryDTO> result = facade.getCategoryAll();
        assertEquals(expResult, result);
    }

    /**
     * Test of getCategoryById method, of class CategoryFacade.
     */
    @Test
    public void testGetCategoryById() throws Exception {
        CategoryDTO expResult = new CategoryDTO(c1);
        CategoryDTO result = facade.getCategoryById(c1.getId());
        assertEquals(expResult, result);
    }

    
}
