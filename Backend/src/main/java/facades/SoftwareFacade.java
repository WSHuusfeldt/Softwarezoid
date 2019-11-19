package facades;

import entities.dto.SoftwareDTO;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author Martin Frederiksen
 */
public class SoftwareFacade {

    private static SoftwareFacade instance;
    private static EntityManagerFactory emf;
    
    //Private Constructor to ensure Singleton
    private SoftwareFacade() {}
    
    
    /**
     * 
     * @param _emf
     * @return an instance of this facade class.
     */
    public static SoftwareFacade getSoftwareFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new SoftwareFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }
    
    public List<SoftwareDTO> getSoftwareAll(){
        return getEntityManager().createQuery("SELECT new entities.dto.SoftwareDTO(software) FROM Software software", SoftwareDTO.class).getResultList();
    }
    
    public SoftwareDTO getSoftwareById(int id){
        return getEntityManager().find(SoftwareDTO.class, id);
    }
    
}