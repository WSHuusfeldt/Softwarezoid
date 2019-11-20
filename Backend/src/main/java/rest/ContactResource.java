package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entities.Contact;
import entities.dto.ContactDTO;
import errorhandling.NotFoundException;
import facades.ContactFacade;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import utils.EMF_Creator;

/**
 *
 * @author asgerhs
 */
@Path("contacts")
public class ContactResource {
    private static final EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory(
                "pu",
                "jdbc:mysql://localhost:3307/softwarezoid",
                "dev",
                "ax2",
                EMF_Creator.Strategy.CREATE);
    private static final ContactFacade FACADE =  ContactFacade.getContactFacade(EMF);
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();
    
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String welcome() {
        return "{\"msg\":\"Welcome to softwarezoid\"}";
    }
    
    @Path("setup")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String setupDatabase() {
        EntityManager em = EMF.createEntityManager();
        List<Contact> contacts = new ArrayList();
        contacts.add(new Contact("William Housefield", "smokeweed@420.com", 12345678, "Jeg er for skæv, kan i hjælpe?", "Jeg er bare skæv"));
        contacts.add(new Contact("Andreas Ukrudt", "ukrudtfri@påenuge.com", 87654321, "Skal jeg fjerne jeres ukrudt?", "I kan få et godt tilbud"));
        contacts.add(new Contact("Asger Sørensen", "billig@bajere.com", 12312312, "Billi baj?", "Jeg pisse fuld hele tiden"));
        contacts.add(new Contact("Martin Eli", "Whiskey@weed.com", 97897812, "Moin, vi ska' ha whiskey igå?", "Moin makker, skal vi ha noget whiskey? Har også noget gammel tør' weed et sted."));
        contacts.add(new Contact("Emil Svense", "ungeogliderlige@damer.org", 19283746, "Jeg har nogle små unge damer du måske kunne være interreseret i", "titlen siger det hele, vend tilbage til mig ;)"));
        em.getTransaction().begin();
        for(Contact c : contacts)
            em.persist(c);
        em.getTransaction().commit();
        
        return "{\"status\":\"completed\"}";
    }
    
    @Path("all")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<ContactDTO> getAllContacts(){
        return FACADE.getAll();
    }
    
    @Path("{id}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public ContactDTO getContactById(@PathParam("id") long id){
        if(id <= 0){
            throw new WebApplicationException("Invalid Id", 404);
        }
        try{
        return FACADE.getById(id);
            
        }catch(Exception ex){
            throw new WebApplicationException(ex.getMessage(), 404);
        }
    }
    
    
    
}