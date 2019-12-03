
package entities.mapper;

import entities.Category;
import entities.Software;
import entities.SoftwareOrder;
import entities.SoftwareOrderLine;
import entities.dto.CategoryDTO;
import entities.dto.SoftwareDTO;
import entities.dto.SoftwareOrderDTO;
import entities.dto.SoftwareOrderLineDTO;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 *
 * @author Andreas Vikke
 */
public class EntityFromDTOMappers {
    public static Software mapSoftwareFromDTO(SoftwareDTO softwareDTO) {
        List<Category> categories = new ArrayList();
        for(CategoryDTO categoryDTO : softwareDTO.getCategories())
            categories.add(mapCategoryFromDTO(categoryDTO));
        
        Software software = new Software(softwareDTO.getTitle(), softwareDTO.getDescription(), softwareDTO.getPrice(), softwareDTO.getThumbnail(), softwareDTO.getSpecifications(), categories);
        software.setId(softwareDTO.getId());
        return software;
    }
    
    public static Category mapCategoryFromDTO(CategoryDTO categoryDTO) {
        return new Category(categoryDTO.getName());
    }
    
    public static SoftwareOrder mapSoftwareOrderFromDTO(SoftwareOrderDTO softwareOrderDTO) {
        List<SoftwareOrderLine> softwareOrderLines = new ArrayList();
        for(SoftwareOrderLineDTO softwareOrderLine : softwareOrderDTO.getOrderLines())
            softwareOrderLines.add(mapSoftwareOrderLineFromDTO(softwareOrderLine));
        
        return new SoftwareOrder(new Date(), softwareOrderLines);
    }
    
    public static SoftwareOrderLine mapSoftwareOrderLineFromDTO(SoftwareOrderLineDTO softwareOrderLineDTO) {
        return new SoftwareOrderLine(mapSoftwareFromDTO(softwareOrderLineDTO.getSoftware()), 0, softwareOrderLineDTO.getQty());
    }
}
