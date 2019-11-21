package rest;

import io.swagger.v3.jaxrs2.integration.resources.AcceptHeaderOpenApiResource;
import io.swagger.v3.jaxrs2.integration.resources.OpenApiResource;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;
import java.util.Set;
import javax.ws.rs.core.Application;

@OpenAPIDefinition(
        info = @Info(
                title = "Software Zoid API",
                version = "1.0",
                description = "Software Zoid API documentation"),
        servers = {
                @Server(
                        description = "LocalHost",
                        url = "http://localhost:8080/softwarezoid"),
                @Server(
                        description = "Deployed",
                        url = "https://williamhuusfeldt.dk/softwarezoid")
        }
)
@javax.ws.rs.ApplicationPath("api")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        
        resources.add(OpenApiResource.class);
        resources.add(AcceptHeaderOpenApiResource.class);
        
        return resources;
    }

    /**
     * Do not modify addRestResourceClasses() method.
     * It is automatically populated with
     * all resources defined in the project.
     * If required, comment out calling this method in getClasses().
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(errorhandling.GenericExceptionMapper.class);
        resources.add(org.glassfish.jersey.server.wadl.internal.WadlResource.class);
        resources.add(rest.ContactResource.class);
        resources.add(rest.RenameMeResource.class);
        resources.add(rest.SoftwareResource.class);
        resources.add(rest.SwapiResource.class);
        resources.add(rest.UserInfoRessource.class);
        resources.add(rest.cors.CorsRequestFilter.class);
        resources.add(rest.cors.CorsResponseFilter.class);
        resources.add(security.JWTAuthenticationFilter.class);
        resources.add(security.LoginEndpoint.class);
        resources.add(security.RolesAllowedFilter.class);
    }
    
}
