package facades;

import entities.Review;
import entities.Software;
import entities.dto.ReviewDTO;
import entities.dto.SoftwareDTO;
import errorhandling.NotFoundException;
import java.util.Date;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

public class ReviewFacade {

    private static ReviewFacade instance;
    private static EntityManagerFactory emf;

    private ReviewFacade() {
    }

    public static ReviewFacade getReviewFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new ReviewFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public void addReview(ReviewDTO review) throws NotFoundException {        
        EntityManager em = getEntityManager();
        em.getTransaction().begin();
        Software software = em.find(Software.class, review.getSoftwareId());
        Review rev = new Review(review.getName(), review.getImgUrl(), new Date(), review.getRating(), review.getDescription(), software);
        em.persist(rev);
        software.addReview(rev);
        em.merge(software);
        em.getTransaction().commit();
        em.close();
    }
    
    public List<ReviewDTO> getReviews(long id) throws NotFoundException {
        Software software = getEntityManager().find(Software.class, id);
        System.out.println(software.getDescription());
        SoftwareDTO softwareDTO = new SoftwareDTO(software);
        System.out.println(softwareDTO.getReviews().get(0).getDescription());
        return softwareDTO.getReviews();
    }


}
