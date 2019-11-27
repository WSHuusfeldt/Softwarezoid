/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities.dto;

import entities.Review;
import java.util.Date;
import io.swagger.v3.oas.annotations.media.Schema;

/**
 *
 * @author emilt
 */
@Schema(name="Review")
public class ReviewDTO {
    
    private String name;
    private String imgUrl;
    private Date date;
    private String rating;
    @Schema(required=true, example="I have used this software for developing my own software")
    private String description;
    private Long softwareId;
    
    public ReviewDTO() {
    }

   
    
    public ReviewDTO(Review review) {
        this.name = review.getName();
        this.imgUrl = review.getImgUrl();
        this.date = review.getDate();
        this.rating = review.getRating();
        this.softwareId = review.getId();
        this.description = review.getDescription();
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

    public Long getSoftwareId() {
        return softwareId;
    }

    public void setSoftwareId(Long softwareId) {
        this.softwareId = softwareId;
    }
    
    
    
    
}
