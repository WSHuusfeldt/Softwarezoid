package entities.dto;

import entities.SoftwareOrder;
import entities.SoftwareOrderLine;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

/**
 *
 * @author Martin Frederiksen
 */
@Schema(name = "SoftwareOrder")
public class SoftwareOrderDTO {

    private long id;
    @Schema(required = true, example = "")
    private Date date;
    private List<SoftwareOrderLineDTO> orderLines;

    public SoftwareOrderDTO() {
    }

    public SoftwareOrderDTO(SoftwareOrder softwareOrder) {
        this.date = softwareOrder.getCreated();
        this.orderLines = new ArrayList();
        for(SoftwareOrderLine orderLine : softwareOrder.getOrderLines())
            this.orderLines.add(new SoftwareOrderLineDTO(orderLine));
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<SoftwareOrderLineDTO> getOrderLines() {
        return orderLines;
    }

    public void setOrderLines(List<SoftwareOrderLineDTO> orderLines) {
        this.orderLines = orderLines;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 47 * hash + (int) (this.id ^ (this.id >>> 32));
        hash = 47 * hash + Objects.hashCode(this.date);
        hash = 47 * hash + Objects.hashCode(this.orderLines);
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
        final SoftwareOrderDTO other = (SoftwareOrderDTO) obj;
        if (this.id != other.id) {
            return false;
        }
        if (!Objects.equals(this.date, other.date)) {
            return false;
        }
        if (!Objects.equals(this.orderLines, other.orderLines)) {
            return false;
        }
        return true;
    }
}
