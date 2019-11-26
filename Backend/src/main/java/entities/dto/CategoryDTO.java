package entities.dto;

import entities.Category;
import io.swagger.v3.oas.annotations.media.Schema;

/**
 *
 * @author Andreas Vikke
 */
@Schema(name="Categroy")
public class CategoryDTO {
    public Long id;
    public String name;
    
    public CategoryDTO() {}
    
    public CategoryDTO(String name) {
        this.name = name;
    }
    
    public CategoryDTO(Category category) {
        this.id = category.getId();
        this.name = category.getName();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }    
}
