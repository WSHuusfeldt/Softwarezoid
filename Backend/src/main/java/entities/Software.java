package entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MapKeyColumn;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;

/**
 *
 * @author Martin Frederiksen
 */
@Entity
@NamedQuery(name = "Software.deleteAllRows", query = "DELETE from Software")
public class Software implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "software_id")
    private Long id;
    private String title;
    private String description;
    private int price;
    private String thumbnail;
    @ElementCollection
    private List<String> specifications;

    @OneToMany(mappedBy = "associatedSoftware")
    private List<Review> reviews;

    public Software() {
    }

    public Software(String title, String description, int price, String thumbnail, List<String> specifications) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.specifications = specifications;
        this.reviews = new ArrayList<Review>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public void addReview(Review review) {
        this.reviews.add(review);
    }

    public List<String> getSpecifications() {
        return specifications;
    }

    public void setSpecifications(List<String> specifications) {
        this.specifications = specifications;
    }

}
