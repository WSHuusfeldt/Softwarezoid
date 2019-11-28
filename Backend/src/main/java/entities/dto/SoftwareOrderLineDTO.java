package entities.dto;

import entities.Software;
import entities.SoftwareOrderLine;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.Objects;

/**
 *
 * @author Martin Frederiksen
 */
@Schema(name = "SoftwareOrderLine")
public class SoftwareOrderLineDTO {

    private long id;
    private SoftwareDTO software;
    private int price;
    private int qty;

    public SoftwareOrderLineDTO() {
    }

    public SoftwareOrderLineDTO(SoftwareOrderLine softwareOrderLine) {
        this.id = softwareOrderLine.getId();
        this.software = new SoftwareDTO(softwareOrderLine.getSoftware());
        this.price = softwareOrderLine.getPrice();
        this.qty = softwareOrderLine.getQty();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public SoftwareDTO getSoftware() {
        return software;
    }

    public void setSoftware(SoftwareDTO software) {
        this.software = software;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 47 * hash + (int) (this.id ^ (this.id >>> 32));
        hash = 47 * hash + Objects.hashCode(this.software);
        hash = 47 * hash + this.price;
        hash = 47 * hash + this.qty;
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
        final SoftwareOrderLineDTO other = (SoftwareOrderLineDTO) obj;
        if (this.id != other.id) {
            return false;
        }
        if (this.price != other.price) {
            return false;
        }
        if (this.qty != other.qty) {
            return false;
        }
        if (!Objects.equals(this.software, other.software)) {
            return false;
        }
        return true;
    }
}
