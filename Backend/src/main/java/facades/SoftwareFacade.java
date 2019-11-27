package facades;

import entities.Category;
import entities.Software;
import entities.dto.CategoryDTO;
import entities.dto.SoftwareDTO;
import errorhandling.NotFoundException;
import java.util.ArrayList;
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
    private SoftwareFacade() {
    }

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

    public List<SoftwareDTO> getSoftwareAll() {
        return getEntityManager().createQuery("SELECT new entities.dto.SoftwareDTO(software) FROM Software software", SoftwareDTO.class).getResultList();
    }

    public SoftwareDTO getSoftwareById(long id) throws NotFoundException {
        Software software = getEntityManager().find(Software.class, id);
        if (software == null) {
            throw new NotFoundException("Software not found");
        }
        return new SoftwareDTO(software);
    }

    public void addSoftware(SoftwareDTO softwareDTO) {
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        List<Category> al = new ArrayList();
        for (CategoryDTO category : softwareDTO.getCategories()) {
            Category cat = new Category(category.getName());
            em.persist(cat);
            al.add(cat);
        }
        Software software = new Software(softwareDTO.getTitle(), softwareDTO.getDescription(), softwareDTO.getPrice(), softwareDTO.getThumbnail(), softwareDTO.getSpecifications(), al);
        em.persist(software);
        em.getTransaction().commit();
        em.close();
    }
    
    
    public List<SoftwareDTO> getSoftwareByCategory(String categories) throws NotFoundException {
        List<Category> categoriesList = new ArrayList();
        for (String catId : categories.split(",")) {
            Category category = getEntityManager().find(Category.class, Long.parseLong(catId));
            if (category == null) {
                throw new NotFoundException("Category not found");
            }
            categoriesList.add(category);
        }

        return getEntityManager().createQuery("SELECT DISTINCT s FROM Software s WHERE s.categories IN :categories", SoftwareDTO.class).setParameter("categories", categoriesList).getResultList();
    }
}
