package rest;

import entities.Contact;
import entities.dto.ContactDTO;
import errorhandling.NotFoundException;
import errorhandling.dto.ExceptionDTO;
import facades.ContactFacade;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
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
    private static final ContactFacade FACADE = ContactFacade.getContactFacade(EMF);

    @Path("setup")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    @Operation(summary = "Setup dummy contacts in database",
            tags = {"Setup"})
    public String setupDatabase() {
        EntityManager em = EMF.createEntityManager();
        List<Contact> contacts = new ArrayList();
        contacts.add(new Contact("William Housefield", "smokeweed@420.com", "12345678", "Jeg er for skæv, kan i hjælpe?", "Jeg er bare skæv", new Date(), false));
        contacts.add(new Contact("Andreas Ukrudt", "ukrudtfri@påenuge.com", "87654321", "Skal jeg fjerne jeres ukrudt?", "I kan få et godt tilbud", new Date(), true));
        contacts.add(new Contact("Asger Sørensen", "billig@bajere.com", "12312312", "Billi baj?", "Jeg pisse fuld hele tiden", new Date(), false));
        contacts.add(new Contact("Martin Eli", "Whiskey@weed.com", "97897812", "Moin, vi ska' ha whiskey igå?", "Moin makker, skal vi ha noget whiskey? Har også noget gammel tør' weed et sted.", new Date(), true));
        contacts.add(new Contact("Emil Svense", "ungeogliderlige@damer.org", "19283746", "Jeg har nogle små unge damer du måske kunne være interreseret i", "titlen siger det hele, vend tilbage til mig ;)", new Date(), false));
        em.getTransaction().begin();
        for (Contact c : contacts) {
            em.persist(c);
        }
        em.getTransaction().commit();

        return "{\"status\":\"completed\"}";
    }

    @Path("/add")
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Operation(summary = "Add contact",
            tags = {"Contact"},
            responses = {
                @ApiResponse(
                        content = @Content(mediaType = "application/json",
                                schema = @Schema(implementation = ContactDTO.class)),
                        responseCode = "200", description = "Successful operation"),
                @ApiResponse(
                        content = @Content(mediaType = "application/json",
                                schema = @Schema(implementation = ContactDTO.class)),
                        responseCode = "400", description = "All fields must be filled out")})
    public ContactDTO addContact(ContactDTO dto) {
        if (dto.getFullName().isEmpty() || dto.getFullName() == null
                || dto.getEmail().isEmpty() || dto.getEmail() == null
                || dto.getPhone().isEmpty() || dto.getPhone() == null
                || dto.getSubject().isEmpty() || dto.getSubject() == null
                || dto.getMessage().isEmpty() || dto.getMessage() == null) {
            throw new WebApplicationException("All Fields must be filled out", 400);
        }
        FACADE.addContact(dto);
        return dto;
    }

    @Path("all")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = "Get all contacts",
            tags = {"Contact"},
            responses = {
                @ApiResponse(
                        content = @Content(mediaType = "application/json",
                                schema = @Schema(implementation = ContactDTO.class)),
                        responseCode = "200", description = "Successful operation")})
    public List<ContactDTO> getAllContacts() {
        return FACADE.getAll();
    }

    @Path("{id}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = "Get contact by id",
            tags = {"Contact"},
            responses = {
                @ApiResponse(
                        content = @Content(mediaType = "application/json",
                                schema = @Schema(implementation = ContactDTO.class)),
                        responseCode = "200", description = "Successful operation"),
                @ApiResponse(content = @Content(mediaType = "application/json",
                        schema = @Schema(implementation = ExceptionDTO.class)),
                        responseCode = "400", description = "Invalid Id supplied"),
                @ApiResponse(content = @Content(mediaType = "application/json",
                        schema = @Schema(implementation = ExceptionDTO.class)),
                        responseCode = "404", description = "Contact not found")})
    public ContactDTO getContactById(@PathParam("id") long id) {
        if (id <= 0) {
            throw new WebApplicationException("Invalid Id supplied", 400);
        }
        try {
            return FACADE.getById(id);

        } catch (Exception ex) {
            throw new WebApplicationException(ex.getMessage(), 404);
        }
    }

    @Path("edit/{id}")
    @PUT
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Operation(summary="Edit a contact to be resolved",
            tags={"Contact"},
            responses = {
                @ApiResponse(
                content = @Content(mediaType="application/json",
                        schema = @Schema(implementation = ContactDTO.class)),
                        responseCode = "200", description = "Successfull Operation"),
                @ApiResponse(
                content = @Content(mediaType="application/json",
                        schema = @Schema(implementation = ContactDTO.class)),
                        responseCode = "400", description = "Invalid Id"),
                @ApiResponse(
                content = @Content(mediaType="application/json",
                        schema = @Schema(implementation = ContactDTO.class)),
                        responseCode = "404", description = "Contact not found")})
    public ContactDTO editContact(@PathParam("id") long id) throws NotFoundException{
        ContactDTO contact = FACADE.getById(id);
        return FACADE.edit(contact); 
    }

}
