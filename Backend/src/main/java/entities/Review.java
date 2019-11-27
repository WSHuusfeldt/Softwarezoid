/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

//import static entities.Software_.title;
import java.io.Serializable;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author emilt
 */
@Entity
public class Review implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String imgUrl;
    @Temporal(TemporalType.DATE)
    private Date date;
    private String rating;
    private String description;
    
    @ManyToOne
    private Software associatedSoftware;

    public Review() {
        
    }

    public Review(String name, String imgUrl, Date date, String rating, String description, Software associatedSoftware) {
        this.name = name;
        this.imgUrl = imgUrl;
        this.date = date;
        this.rating = rating;
        this.description = description;
        this.associatedSoftware = associatedSoftware;
    }
    
       
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Software getAssociatedSoftware() {
        return associatedSoftware;
    }

    public void setAssociatedSoftware(Software associatedSoftware) {
        this.associatedSoftware = associatedSoftware;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
    
    
    
}
