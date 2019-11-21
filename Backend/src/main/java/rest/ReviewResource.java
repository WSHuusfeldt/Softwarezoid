/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entities.dto.ReviewDTO;
import errorhandling.NotFoundException;
import facades.ReviewFacade;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import utils.EMF_Creator;

/**
 * REST Web Service
 *
 * @author emilt
 */
@Path("review")
public class ReviewResource {
    
    private static final EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory(
                "pu",
                "jdbc:mysql://localhost:3307/softwarezoid",
                "dev",
                "ax2",
                EMF_Creator.Strategy.CREATE);
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();
    private static final ReviewFacade FACADE =  ReviewFacade.getReviewFacade(EMF);

    @POST
    @Path("/add")
    @Consumes(MediaType.APPLICATION_JSON)
    public String add(ReviewDTO reviewDTO) {
        try {
        FACADE.addReview(reviewDTO);
        return "{\"msg\": \"200 ok\"}";
        } catch (NotFoundException e ) {
            return "{\"msg\": \"404 not found exception\"}";
        }
    }

    /**
     * PUT method for updating or creating an instance of ReviewResource
     * @param content representation for the resource
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        return "hello this is test";
    }
}
