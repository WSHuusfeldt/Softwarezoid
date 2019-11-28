/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import entities.Category;
import entities.Review;
import entities.Software;
import entities.dto.ReviewDTO;
import errorhandling.NotFoundException;
import java.util.Arrays;
import java.util.Date;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import utils.EMF_Creator;

/**
 *
 * @author emilt
 */
public class ReviewFacadeTest {
    
    private static EntityManagerFactory emf;
    private static ReviewFacade facade;
    private static Software s1, s2;
    
    public ReviewFacadeTest() {
    }
    
    public static void setUpClass() {
        emf = EMF_Creator.createEntityManagerFactory(
                "pu",
                "jdbc:mysql://localhost:3307/startcode_test",
                "dev",
                "ax2",
                EMF_Creator.Strategy.CREATE);
        facade = ReviewFacade.getReviewFacade(emf);
    }
    
    @BeforeAll
    public static void setUpClassV2() {
       emf = EMF_Creator.createEntityManagerFactory(EMF_Creator.DbSelector.TEST,EMF_Creator.Strategy.DROP_AND_CREATE);
       facade = ReviewFacade.getReviewFacade(emf);
    }
    
    @AfterAll
    public static void tearDownClass() {
    }
    
    @BeforeEach
    public void setUp() {
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            Category c1 = new Category("Programming");
            Category c2 = new Category("Images");
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
        } finally {
            em.close();
        }
    }
    
    @AfterEach
    public void tearDown() {
    }
    
    @Test
    public void addReviewTest() throws NotFoundException{

    }
    
    @Test
    public void getReviewsTest() {
        
    }
    
}
