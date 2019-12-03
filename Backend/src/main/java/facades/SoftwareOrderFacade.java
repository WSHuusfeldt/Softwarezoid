package facades;

import entities.Software;
import entities.SoftwareOrder;
import entities.SoftwareOrderLine;
import entities.dto.SoftwareOrderDTO;
import entities.mapper.EntityFromDTOMappers;
import errorhandling.NotFoundException;
import java.util.Date;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author Andreas Vikke
 */
public class SoftwareOrderFacade {

    private static SoftwareOrderFacade instance;
    private static EntityManagerFactory emf;

    //Private Constructor to ensure Singleton
    private SoftwareOrderFacade() {
    }

    /**
     *
     * @param _emf
     * @return an instance of this facade class.
     */
    public static SoftwareOrderFacade getSoftwareOrderFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new SoftwareOrderFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }
    
    public List<SoftwareOrderDTO> getAllSoftwareOrder() {
        return getEntityManager().createQuery("SELECT new entities.dto.SoftwareOrderDTO(softwareOrder) FROM SoftwareOrder softwareOrder", SoftwareOrderDTO.class).getResultList();
    }
    
    public SoftwareOrderDTO getSoftwareOrderById(long id) throws NotFoundException {
        SoftwareOrder softwareOrder = getEntityManager().find(SoftwareOrder.class, id);
        if (softwareOrder == null) {
            throw new NotFoundException("SoftwareOrder not found");
        }
        return new SoftwareOrderDTO(softwareOrder);
    }
    
    public long addSoftwareOrder(SoftwareOrderDTO softwareOrderDTO) {
        EntityManager em = getEntityManager();
        try {
            SoftwareOrder softwareOrder = EntityFromDTOMappers.mapSoftwareOrderFromDTO(softwareOrderDTO);
            
            em.getTransaction().begin();
            for(SoftwareOrderLine softwareOrderLine : softwareOrder.getOrderLines()) {
                Software software = em.find(Software.class, softwareOrderLine.getSoftware().getId());
                softwareOrderLine.setSoftware(software);
                softwareOrderLine.setPrice(software.getPrice());
                softwareOrderLine.setAssociatedSoftwareOrder(softwareOrder);
                em.persist(softwareOrderLine);
            }
            softwareOrder.setCreated(new Date());
            em.persist(softwareOrder);
            em.getTransaction().commit();
            return softwareOrder.getId();
        } finally {
            em.close();
        }
    }
}
