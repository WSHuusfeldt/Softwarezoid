package facades;

import entities.Contact;
import entities.dto.ContactDTO;
import errorhandling.NotFoundException;
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
     
    
     public void addContact(ContactDTO contactDTO){
         try{
             getEntityManager().getTransaction().begin();
             getEntityManager().persist(new Contact(contactDTO.getFullName(), contactDTO.getEmail(), contactDTO.getPhone(), contactDTO.getSubject(), contactDTO.getMessage()));
             getEntityManager().getTransaction().commit();
         }finally{
             getEntityManager().close();
         }
     }
     
     public List<ContactDTO> getAll(){
         return getEntityManager().createQuery("SELECT new entities.dto.ContactDTO(contact) FROM Contact contact", ContactDTO.class).getResultList();
     }
     
     public ContactDTO getById(long id) throws NotFoundException{
         Contact contact = getEntityManager().find(Contact.class, id);
        if(contact == null) {
            throw new NotFoundException("Contact not found");
        }
        return new ContactDTO(contact);
     }
     
     
     
}
