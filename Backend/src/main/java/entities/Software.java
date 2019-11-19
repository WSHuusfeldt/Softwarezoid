package entities;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

/**
 *
 * @author asgerhs
 */
@Entity
@Table(name = "Software")
public class Software implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    @Column(name = "softwareId")
    private Long id;
    
    @Column(name = "softwareName")
    private String name;
    
    @Column(name = "softwareDescription")
    private String description;
    
    @Column(name = "softwareThumbnail")
    private String thumbnail; 
    
    @Column(name = "softwarePrice")
    private int price; 

    public Software() {
    }
    

    public Software(String name, String description, String thumbnail, int price) {
        this.name = name;
        this.description = description;
        this.thumbnail = thumbnail;
        this.price = price;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

 
    
}
