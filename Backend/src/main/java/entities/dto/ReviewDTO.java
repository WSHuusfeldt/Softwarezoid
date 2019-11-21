/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities.dto;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 *
 * @author emilt
 */
@Schema(name="Review")
public class ReviewDTO {
    @Schema(required=true, example="Very good")
    private String title;
    @Schema(required=true, type="integer", minimum="0", maximum="5")
    private int rating;
    @Schema(required=true, example="I have used this software for developing my own software")
    private String description;
    @Schema(required=true)
    private SoftwareDTO associatedSoftware;
    
    public ReviewDTO() {
        
    }

    public ReviewDTO(String title, int rating, String description, SoftwareDTO associatedSoftware) {
        this.title = title;
        this.rating = rating;
        this.description = description;
        this.associatedSoftware = associatedSoftware;
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

    public SoftwareDTO getAssociatedSoftware() {
        return associatedSoftware;
    }

    public void setAssociatedSoftware(SoftwareDTO associatedSoftware) {
        this.associatedSoftware = associatedSoftware;
    }
    
    
    
    
}
