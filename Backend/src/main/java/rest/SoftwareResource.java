/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entities.Software;
import entities.dto.SoftwareDTO;
import facades.SoftwareFacade;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import utils.EMF_Creator;

/**
 * REST Web Service
 *
 * @author Martin Frederiksen
 */
@Path("software")
public class SoftwareResource {
    private static final EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory(
                "pu",
                "jdbc:mysql://localhost:3307/softwarezoid",
                "dev",
                "ax2",
                EMF_Creator.Strategy.CREATE);
    private static final SoftwareFacade FACADE =  SoftwareFacade.getSoftwareFacade(EMF);
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
        List<Software> softwares = new ArrayList();
        softwares.add(new Software("Netbeans", "Programmers dream", 280000, "NOT"));
        softwares.add(new Software("Visual Studio Code", "Programmers dream", 280000, "TRUE"));
        softwares.add(new Software("Notepad++", "Programmers real real dream", 1000, "Oh Buddy"));
        em.getTransaction().begin();
        for(Software s : softwares)
            em.persist(s);
        em.getTransaction().commit();
        
        return "{\"status\":\"completed\"}";
    }
    
    @Path("all")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<SoftwareDTO> getJson() {
        return FACADE.getSoftwareAll();
    }
    
    @Path("{id}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public SoftwareDTO getById(@PathParam("id") long id) {
        if (id <= 0) {
            throw new WebApplicationException("Invalid Id supplied", 400);
        }
        SoftwareDTO software = FACADE.getSoftwareById(id);
        if (FACADE.getSoftwareById(id) == null) {
            throw new WebApplicationException("Address not found", 404);
        }
        return software;
    }
}
