package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entities.Category;
import entities.Software;

import entities.dto.SoftwareDTO;
import errorhandling.NotFoundException;
import errorhandling.dto.ExceptionDTO;
import facades.SoftwareFacade;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import javax.persistence.EntityManager;
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
@Path("software")
public class SoftwareResource {

    private static final EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory(
            "pu",
            "jdbc:mysql://localhost:3307/softwarezoid",
            "dev",
            "ax2",
            EMF_Creator.Strategy.CREATE);
    private static final SoftwareFacade FACADE = SoftwareFacade.getSoftwareFacade(EMF);
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    @Path("setup")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    @Operation(summary = "Setup dummy softwares in database",
            tags = {"Setup"})
    public String setupDatabase() {
        EntityManager em = EMF.createEntityManager();
        List<Software> softwares = new ArrayList();
        List<Category> cat = new ArrayList();
        cat.add(new Category("Programming"));
        cat.add(new Category("Office"));
        cat.add(new Category("Student"));
        softwares.add(new Software("Netbeans", "NetBeans is an integrated development environment (IDE) for Java. NetBeans allows applications to be developed from a set of modular software components called modules. NetBeans runs on Windows, macOS, Linux and Solaris. In addition to Java development, it has extensions for other languages like PHP, C, C++, HTML5, and JavaScript. Applications based on NetBeans, including the NetBeans IDE, can be extended by third party developers.", 280000, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Apache_NetBeans_Logo.svg/1200px-Apache_NetBeans_Logo.svg.png",
                (Arrays.asList("Version: 11.1",
                        "Compatability: Windows, MacOS, Linux",
                        "type: IDE", "Written in: Java",
                        "Platform: Java SE, Java EE, Java FX",
                        "Avaible in: 28 languages")), Arrays.asList(cat.get(0), cat.get(1), cat.get(2))));

        softwares.add(new Software("Visual Studio Code", "Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control and GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring. It is highly customizable, allowing users to change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality. The source code is free and open source and released under the permissive MIT License. The compiled binaries are freeware and free for private or commercial use.", 280000, "https://mospaw.com/wp-content/uploads/2018/07/Visual_Studio_code_logo.png",
                (Arrays.asList("Version: 1.40.1",
                        "Compatability: Windows 7 or later, OS X 10.9 or later, Linux",
                        "Type: Source code editor, debugger",
                        "Written in: TypeScript, JavaScript, CSS",
                        "Platform: IA-32, x86-64",
                        "Avaible in: English (US), Simplified Chinese, Traditional Chinese, French, German, Italian, Portuguese (Brazil), Japanese, Korean, Russian, Spanish")), Arrays.asList(cat.get(0), cat.get(1), cat.get(2))));

        softwares.add(new Software("Notepad++", "Notepad++ is a text editor and source code editor for use with Microsoft Windows. It supports tabbed editing, which allows working with multiple open files in a single window. The project's name comes from the C increment operator.", 1000, "https://www.slashcoding.com/wp-content/uploads/2013/08/Notepad_plus_plus.png",
                (Arrays.asList("Version: 7.8.1",
                        "Compatability: Windows, MacOS, Linux",
                        "Type: Source code editor",
                        "Written in: C++", "Platform: IA-32, x86-64",
                        "Avaible in: 84 languages")), Arrays.asList(cat.get(0), cat.get(1), cat.get(2))));

        softwares.add(new Software("Word", "Microsoft Word (or simply Word) is a word processor developed by Microsoft. Commercial versions of Word are licensed as a standalone product or as a component of Microsoft Office, Windows RT or the discontinued Microsoft Works suite.", 10000, "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072015/word_0.png?itok=YCX08sq9",
                (Arrays.asList("Versions: Windows: 2019 (16.0), Mac: 16.30",
                        "Compatability: Windows 7 or later, OS X Sierra or later, Linux",
                        "Type: Word Processor",
                        "Avaible in: 106 languages")), Arrays.asList(cat.get(1), cat.get(2))));

        softwares.add(new Software("Excel", "Microsoft Excel is a spreadsheet developed by Microsoft for Windows, macOS, Android and iOS. It features calculation, graphing tools, pivot tables, and a macro programming language called Visual Basic for Applications. It has been a very widely applied spreadsheet for these platforms, especially since version 5 in 1993, and it has replaced Lotus 1-2-3 as the industry standard for spreadsheets. Excel forms part of the Microsoft Office suite of software.", 10000, "https://teaching.cambriancollege.ca/wp-content/uploads/2018/07/Top-of-Page-Images.jpg",
                (Arrays.asList("Version: Windows: 2019 (16.0), Mac: 16.30",
                        "Compatability: Windows 7 or later, OS X Sierra or later, Linux",
                        "Type: Spreadsheet",
                        "Avaible in: 106 languages")), Arrays.asList(cat.get(1), cat.get(2))));

        softwares.add(new Software("PowerPoint", "Microsoft PowerPoint is a presentation program, created by Robert Gaskins and Dennis Austin at a software company named Forethought, Inc. It was released on April 20, 1987, initially for Macintosh computers only. Microsoft acquired PowerPoint for $14 million three months after it appeared. This was Microsoft's first significant acquisition, and Microsoft set up a new business unit for PowerPoint in Silicon Valley where Forethought had been located. Microsoft PowerPoint is one of many programs run by the company Microsoft and can be identified by its trademark orange, and P initial on the logo. It offers users many ways to display information from simple presentations to complex multimedia presentations.", 100000, "https://www.tcd.ie/CAPSL/TIC/assets/img/accessible-info/powerpoint.png",
                (Arrays.asList("Version: Windows: 2019 (16.0), Mac: 16.30",
                        "Compatability: Windows 7 or later, OS X Sierra or later, Linux",
                        "Type: Spreadsheet",
                        "Avaible in: 106 languages")), Arrays.asList(cat.get(1), cat.get(2))));

        softwares.add(new Software("WinRar", "WinRAR is a trialware file archiver utility for Windows, "
                + "developed by Eugene Roshal of win.rar GmbH. It can create and view archives in RAR or ZIP file formats, "
                + "and unpack numerous archive file formats. To enable the user to test the integrity of archives, "
                + "WinRAR embeds CRC32 or BLAKE2 checksums for each file in each archive. WinRAR supports creating encrypted, "
                + "multi-part and self-extracting archives. WinRAR is a Windows-only program. ",
                0,
                "https://cdn.worldvectorlogo.com/logos/winrar-1.svg",
                (Arrays.asList("Version: 5.71",
                        "Compatability: Windows XP and later",
                        "Written in: C++", "Platform: IA-32, x64",
                        "Avaible in: 46 languages")), Arrays.asList(cat.get(0), cat.get(1), cat.get(2))));

//        SoftwareFacade sf = SoftwareFacade.getSoftwareFacade(EMF);
//        Software s = new Software(
//                "Spotify",
//                "Spotify is an international media services provider based in Stockholm, Sweden."
//                + "founded in 2006 the compnay's primary busines is providing an audio streaming platform.",
//                10000,
//                "https://developer.spotify.com/assets/branding-guidelines/icon1@2x.png",
//                (Arrays.asList("Version: 5.71",
//                        "Compatability: Windows, Linux, Android and iOS / MacOS",
//                        "Written in: Python", "Platform: IA-32, x64",
//                        "Avaible in: 46 languages")),cat);
//        SoftwareDTO sdto = new SoftwareDTO(s);
//        sf.addSoftware(sdto);
        //softwares.add(new Software("Not real program", "Test program for very very very very very very very very very very very very very very very very very very very very very very very very long description", 0, "https://cdn3.vectorstock.com/i/1000x1000/19/77/isolated-abstract-blue-color-thumb-up-contour-logo-vector-10861977.jpg"));
        em.getTransaction().begin();
        for (Software sk : softwares) {
            em.persist(sk);
        }

        for (Category c : cat) {
            em.persist(c);
        }
        for (Software sk : softwares) {
            em.persist(sk);
        }

        em.getTransaction().commit();

        return "{\"status\":\"completed\"}";
    }

    @Path("all")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = "Get all softwares",
            tags = {"Software"},
            responses = {
                @ApiResponse(
                        content = @Content(mediaType = "application/json",
                        array = @ArraySchema(schema = @Schema(implementation = SoftwareDTO.class))),
                        responseCode = "200", description = "Succesful operation")})
    public List<SoftwareDTO> getJson() {
        return FACADE.getSoftwareAll();
    }

    @Path("{id}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = "Get software by id",
            tags = {"Software"},
            responses = {
                @ApiResponse(
                        content = @Content(mediaType = "application/json",
                                schema = @Schema(implementation = SoftwareDTO.class)),
                        responseCode = "200", description = "Succesful operation"),
                @ApiResponse(content = @Content(mediaType = "application/json",
                        schema = @Schema(implementation = ExceptionDTO.class)),
                        responseCode = "400", description = "Invalid Id supplied"),
                @ApiResponse(content = @Content(mediaType = "application/json",
                        schema = @Schema(implementation = ExceptionDTO.class)),
                        responseCode = "404", description = "Software not found")})
    public SoftwareDTO getById(@PathParam("id") long id) {
        if (id <= 0) {
            throw new WebApplicationException("Invalid Id supplied", 400);
        }
        try {
            SoftwareDTO software = FACADE.getSoftwareById(id);
            return software;
        } catch (Exception ex) {
            throw new WebApplicationException(ex.getMessage(), 404);
        }

    }

    @Path("/add")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Operation(summary = "Add a new software",
            tags = {"Software"},
            responses = {
                @ApiResponse(
                        content = @Content(mediaType = "application/json",
                                schema = @Schema(implementation = SoftwareDTO.class)),
                        responseCode = "200", description = "Succesful operation"),
                @ApiResponse(content = @Content(mediaType = "application/json",
                        schema = @Schema(implementation = ExceptionDTO.class)),
                        responseCode = "500", description = "Internal Server Error")})
    public String addSoftware(SoftwareDTO softwareDTO) {
        try {
            FACADE.addSoftware(softwareDTO);
            return "{\"msg\": \"200 ok\"}";
        } catch (Exception e) {
            return "{\"msg\": \"404 not found exception\"}";
        }
    }

    @Path("all/{categories}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = "Get all software by category id",
            tags = {"Software"},
            responses = {
                @ApiResponse(
                        content = @Content(mediaType = "application/json",
                                schema = @Schema(implementation = SoftwareDTO.class)),
                        responseCode = "200", description = "Succesful operation"),
                @ApiResponse(content = @Content(mediaType = "application/json",
                        schema = @Schema(implementation = ExceptionDTO.class)),
                        responseCode = "400", description = "Invalid Id supplied"),
                @ApiResponse(content = @Content(mediaType = "application/json",
                        schema = @Schema(implementation = ExceptionDTO.class)),
                        responseCode = "404", description = "Software not found")})
    public List<SoftwareDTO> getSoftwareByCategory(@PathParam("categories") String categories) {
        if (categories.contains("0")) {
            throw new WebApplicationException("Invalid Id supplied", 400);
        }
        try {
            return FACADE.getSoftwareByCategory(categories);
        } catch (Exception ex) {
            throw new WebApplicationException(ex.getMessage(), 404);
        }
    }

}
