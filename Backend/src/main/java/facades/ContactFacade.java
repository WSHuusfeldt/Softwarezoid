package facades;

import entities.Contact;
import entities.dto.ContactDTO;
import errorhandling.NotFoundException;
import java.util.Date;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author asgerhs
 */
public class ContactFacade {

    private static ContactFacade instance;
    private static EntityManagerFactory emf;

    //Private Constructor to ensure Singleton
    private ContactFacade() {
    }

    /**
     *
     * @param _emf
     * @return an instance of this facade class.
     */
    public static ContactFacade getContactFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new ContactFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public void addContact(ContactDTO contactDTO) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(new Contact(contactDTO.getFullName(), contactDTO.getEmail(), contactDTO.getPhone(), contactDTO.getSubject(), contactDTO.getMessage(), new Date(), false));
            em.getTransaction().commit();
        } finally {
            getEntityManager().close();
        }
    }

    public List<ContactDTO> getAll() {
        return getEntityManager().createQuery("SELECT new entities.dto.ContactDTO(contact) FROM Contact contact WHERE contact.resolved = :false", ContactDTO.class).setParameter("false", false).getResultList();
    }

    public ContactDTO getById(long id) throws NotFoundException {
        Contact contact = getEntityManager().find(Contact.class, id);
        if (contact == null) {
            throw new NotFoundException("Contact not found");
        }
        return new ContactDTO(contact);
    }

    public ContactDTO edit(ContactDTO dto) {
        EntityManager em = getEntityManager();
        Contact contact = em.find(Contact.class, dto.getId());
        contact.setResolved(true);
        try {
            em.getTransaction().begin();
            em.merge(contact);
            em.getTransaction().commit();
            return new ContactDTO(contact);
        } finally {
            em.close();
        }
    }

}
