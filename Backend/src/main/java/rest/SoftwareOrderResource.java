
package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entities.dto.SoftwareDTO;
import entities.dto.SoftwareOrderDTO;
import errorhandling.dto.ExceptionDTO;
import facades.SoftwareOrderFacade;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import java.util.List;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
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
@Path("order")
public class SoftwareOrderResource {

    private static final EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory(
            "pu",
            "jdbc:mysql://localhost:3307/softwarezoid",
            "dev",
            "ax2",
            EMF_Creator.Strategy.CREATE);
    private static final SoftwareOrderFacade FACADE = SoftwareOrderFacade.getSoftwareOrderFacade(EMF);
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    @Path("all")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = "Get all Orders",
            tags = {"Order"},
            responses = {
                @ApiResponse(
                        content = @Content(mediaType = "application/json",
                                schema = @Schema(implementation = SoftwareOrderDTO.class)),
                        responseCode = "200", description = "Succesful operation")})
    public List<SoftwareOrderDTO> getJson() {
        return FACADE.getAllSoftwareOrder();
    }

    @Path("{id}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = "Get order by id",
            tags = {"Order"},
            responses = {
                @ApiResponse(
                        content = @Content(mediaType = "application/json",
                                schema = @Schema(implementation = SoftwareOrderDTO.class)),
                        responseCode = "200", description = "Succesful operation"),
                @ApiResponse(content = @Content(mediaType = "application/json",
                        schema = @Schema(implementation = ExceptionDTO.class)),
                        responseCode = "400", description = "Invalid Id supplied"),
                @ApiResponse(content = @Content(mediaType = "application/json",
                        schema = @Schema(implementation = ExceptionDTO.class)),
                        responseCode = "404", description = "Software not found")})
    public SoftwareOrderDTO getById(@PathParam("id") long id) {
        if (id <= 0) {
            throw new WebApplicationException("Invalid Id supplied", 400);
        }
        try {
            SoftwareOrderDTO software = FACADE.getSoftwareOrderById(id);
            return software;
        } catch (Exception ex) {
            throw new WebApplicationException(ex.getMessage(), 404);
        }

    }

    @Path("/add")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Operation(summary = "Add a new order",
            tags = {"Order"},
            responses = {
                @ApiResponse(
                        content = @Content(mediaType = "application/json",
                                schema = @Schema(implementation = SoftwareOrderDTO.class)),
                        responseCode = "200", description = "Succesful operation"),
                @ApiResponse(content = @Content(mediaType = "application/json",
                        schema = @Schema(implementation = ExceptionDTO.class)),
                        responseCode = "500", description = "Internal Server Error")})
    public String addSoftware(SoftwareOrderDTO softwareOrderDTO) {
        try {
            FACADE.addSoftwareOrder(softwareOrderDTO);
            return "{\"msg\": \"200 ok\"}";
        } catch (Exception e) {
            return "{\"msg\": \"404 not found exception\"}";
        }
    }
}
