package entities.dto;

import entities.Software;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import java.util.Objects;

/**
 *
 * @author Martin Frederiksen
 */
@Schema(name="Software")
public class SoftwareDTO {
    @Schema(required=true, example="Netbeans")
    private String title;
    @Schema(required=true, example="This is a program used to develop software")
    private String description;
    @Schema(required=true, example="0")
    private int price;
    @Schema(required=true, example="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Apache_NetBeans_Logo.svg/1200px-Apache_NetBeans_Logo.svg.png")
    private String thumbnail;
    private List<String> specifications;
    private List<ReviewDTO> reviews;

    public SoftwareDTO() {
    }
    
    public SoftwareDTO(Software software) {
        this.title = software.getTitle();
        this.description = software.getDescription();
        this.price = software.getPrice();
        this.thumbnail = software.getThumbnail();
        this.specifications = software.getSpecifications();
        
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

    public List<String> getSpecifications() {
        return specifications;
    }

    public void setSpecifications(List<String> specifications) {
        this.specifications = specifications;
    }

  


    
    public List<ReviewDTO> getReviews() {
        return reviews;
    }

    public void setReviews(List<ReviewDTO> reviews) {
        this.reviews = reviews;
    }
    
    public void addReview(ReviewDTO review) {
        this.reviews.add(review);
    }
    

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 71 * hash + Objects.hashCode(this.title);
        hash = 71 * hash + Objects.hashCode(this.description);
        hash = 71 * hash + this.price;
        hash = 71 * hash + Objects.hashCode(this.thumbnail);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final SoftwareDTO other = (SoftwareDTO) obj;
        if (this.price != other.price) {
            return false;
        }
        if (!Objects.equals(this.title, other.title)) {
            return false;
        }
        if (!Objects.equals(this.description, other.description)) {
            return false;
        }
        if (!Objects.equals(this.thumbnail, other.thumbnail)) {
            return false;
        }
        return true;
    }
    
}
