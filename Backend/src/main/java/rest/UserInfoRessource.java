package rest;

import entities.dto.UserDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import javax.annotation.security.RolesAllowed;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.SecurityContext;
import security.UserPrincipal;
import utils.EMF_Creator;

/**
 * @author lam@cphbusiness.dk
 */
@Path("info")
public class UserInfoRessource {

    private static EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory(EMF_Creator.DbSelector.DEV, EMF_Creator.Strategy.CREATE);

    @Context
    private UriInfo context;

    @Context
    SecurityContext securityContext;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("user")
    @RolesAllowed({"user", "admin"})
    @Operation(summary="Get user info", 
            tags={"User"},
            responses={
                @ApiResponse(
                        content = @Content(mediaType = "application/json",
                        schema = @Schema(implementation = UserDTO.class)),
                        responseCode = "200", description = "Succesful operation")})
    public UserDTO getFromUser() {
        UserPrincipal userPrincipal = (UserPrincipal)securityContext.getUserPrincipal();
        UserDTO user = new UserDTO(userPrincipal.getName(), userPrincipal.getRoles());
        return user;
    }
}
