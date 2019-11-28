package entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 *
 * @author Andreas Vikke
 */
@Entity
public class SoftwareOrder implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Temporal(TemporalType.DATE)
    private Date created;
    @OneToMany(mappedBy = "associatedSoftwareOrder")
    private List<SoftwareOrderLine> orderLines;

    public SoftwareOrder() {
    }

    public SoftwareOrder(Long id, Date created, List<SoftwareOrderLine> orderLines) {
        this.id = id;
        this.created = created;
        this.orderLines = orderLines;
    }    

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    } 

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public List<SoftwareOrderLine> getOrderLines() {
        return orderLines;
    }

    public void setOrderLines(List<SoftwareOrderLine> orderLines) {
        this.orderLines = orderLines;
    }
}
