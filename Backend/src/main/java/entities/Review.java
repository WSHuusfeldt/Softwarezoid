/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

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
    private String title;
    private int rating;
    private String description;
    
    @ManyToOne
    private Software associatedSoftware;

    public Review() {
        
    }
    
    public Review(Long id, String title, int rating, String description, Software associatedSoftware) {
        this.id = id;
        this.title = title;
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
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
    
    
}
