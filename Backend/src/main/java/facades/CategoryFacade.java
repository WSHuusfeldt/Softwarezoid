/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import entities.Category;
import entities.Contact;
import entities.Software;
import entities.dto.CategoryDTO;
import entities.dto.ContactDTO;
import entities.dto.SoftwareDTO;
import errorhandling.NotFoundException;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author Andreas Vikke
 */
public class CategoryFacade {

    private static CategoryFacade instance;
    private static EntityManagerFactory emf;

    //Private Constructor to ensure Singleton
    private CategoryFacade() {
    }

    /**
     *
     * @param _emf
     * @return an instance of this facade class.
     */
    public static CategoryFacade getCategoryFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new CategoryFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public List<CategoryDTO> getCategoryAll() {
        return getEntityManager().createQuery("SELECT new entities.dto.CategoryDTO(category) FROM Category category", CategoryDTO.class).getResultList();
    }

    public CategoryDTO getCategoryById(long id) throws NotFoundException {
        Category category = getEntityManager().find(Category.class, id);
        if (category == null) {
            throw new NotFoundException("Category not found");
        }
        return new CategoryDTO(category);
    }

    public void addCategory(CategoryDTO categoryDTO) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(new Category(categoryDTO.getName()));
            em.getTransaction().commit();
        } finally {
            getEntityManager().close();
        }
    }
}
