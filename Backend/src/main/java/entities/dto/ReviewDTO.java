/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities.dto;

import java.util.Date;

/**
 *
 * @author emilt
 */
public class ReviewDTO {
    
    private String name;
    private String imgUrl;
    private Date date;
    private int rating;
    private String description;
    private Long softwareId;
    
    public ReviewDTO() {
        
    }

    public ReviewDTO(String name, String imgUrl, Date date, int rating, String description, Long softwareId) {
        this.name = name;
        this.imgUrl = imgUrl;
        this.date = date;
        this.rating = rating;
        this.description = description;
        this.softwareId = softwareId;
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
