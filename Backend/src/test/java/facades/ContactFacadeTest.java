package facades;

import entities.Contact;
import entities.dto.ContactDTO;
import facades.ContactFacade;
import java.util.ArrayList;
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
 * @author asgerhs
 */
public class ContactFacadeTest {

    private static EntityManagerFactory emf;
    private static ContactFacade facade;
    private static List<ContactDTO> contacts;
    private static Contact c1, c2, c3;

    public ContactFacadeTest() {
    }

    public static void setUpClass() {
        emf = EMF_Creator.createEntityManagerFactory(
                "pu",
                "jdbc:mysql://localhost:3307/startcode_test",
                "dev",
                "ax2",
                EMF_Creator.Strategy.CREATE);
        facade = ContactFacade.getContactFacade(emf);
    }

    @BeforeAll
    public static void setUpClassV2() {
        emf = EMF_Creator.createEntityManagerFactory(EMF_Creator.DbSelector.TEST, EMF_Creator.Strategy.DROP_AND_CREATE);
        facade = ContactFacade.getContactFacade(emf);
    }

    @AfterAll
    public static void tearDownClass() {
    }

    @BeforeEach
    public void setUp() {
        EntityManager em = emf.createEntityManager();
        contacts = new ArrayList();
        try {
            em.getTransaction().begin();
            em.createNamedQuery("Contact.deleteAllRows").executeUpdate();
            c1 = new Contact("William Housefield", "smokeweed@420.com", "12345678", "Jeg er for skæv, kan i hjælpe?", "Jeg er bare skæv", new Date(), false);
            c2 = new Contact("Andreas Ukrudt", "ukrudtfri@påenuge", "87654321", "Skal jeg fjerne jeres ukrudt?", "I kan få et godt tilbud", new Date(), false);
            c3 = new Contact("Asger Sørensen", "billig@bajere.com", "12312312", "Billi baj?", "Jeg pisse fuld hele tiden", new Date(), false);
            em.persist(c1);
            em.getTransaction().commit();
            em.getTransaction().begin();
            em.persist(c2);
            em.getTransaction().commit();
            contacts.add(new ContactDTO(c1));
            contacts.add(new ContactDTO(c2));
            //contacts.add(new ContactDTO(c3));
        }finally{
            em.close();
        }

    }

    @AfterEach
    public void tearDown() {
    }
    
    
    /**
     * Test of getAll method, of class ContactFacade.
     */
    @Test
    public void testGetAll() {
        List<ContactDTO> expected = contacts;
        List<ContactDTO> result = facade.getAll();
        assertEquals(expected, result);
    }

    /**
     * Test of addContact method, of class ContactFacade.
     */
    @Test
    public void testAddContact() {
        EntityManager em = emf.createEntityManager();
        int expectedRes;
        int res;
        try{
        c3 = new Contact("Asger Sørensen", "billig@bajere.com", "12312312", "Billi baj?", "Jeg pisse fuld hele tiden", new Date(), false);
        expectedRes = em.createQuery("SELECT Contact from Contact contact", Contact.class).getResultList().size();
        facade.addContact(new ContactDTO(c3));
        res = em.createQuery("SELECT Contact from Contact contact", Contact.class).getResultList().size();
        }finally{
            em.close();
        }
        assertEquals(expectedRes + 1, res);
        
        
    }


    /**
     * Test of getById method, of class ContactFacade.
     */
    @Test
    public void testGetById() throws Exception {
     ContactDTO expected = contacts.get(1); 
        assertEquals(expected, facade.getById(c2.getId()));
    }
    
    @Test
    public void testEdit() throws Exception {
        boolean expected = true;
        boolean result = facade.edit(contacts.get(0)).isResolved();
        assertEquals(expected, result);
    }

}
