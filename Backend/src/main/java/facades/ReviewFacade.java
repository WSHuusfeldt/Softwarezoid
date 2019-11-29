package facades;

import entities.Review;
import entities.Software;
import entities.dto.ReviewDTO;
import errorhandling.NotFoundException;
import java.util.ArrayList;
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
        try {            
            Software software = em.find(Software.class, review.getSoftwareId());
            if (software == null) {
                throw new NotFoundException("Software not found");
            }
            Review rev = new Review(review.getName(), review.getImgUrl(), new Date(), review.getRating(), review.getDescription(), software);
            em.getTransaction().begin();
            em.persist(rev);
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }

    public List<ReviewDTO> getReviews(long id) throws NotFoundException {
        Software software = getEntityManager().find(Software.class, id);
        List<Review> l = software.getReviews();
        List<ReviewDTO> ldto = new ArrayList();
        
        for(Review rev : l){
            ldto.add(new ReviewDTO(rev));
        }
        
        return ldto;
    }

}
