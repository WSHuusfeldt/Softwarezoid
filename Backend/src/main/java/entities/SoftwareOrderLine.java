
package entities;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;

/**
 *
 * @author Andreas Vikke
 */
@Entity
@NamedQuery(name = "SoftwareOrderLine.deleteAllRows", query = "DELETE from SoftwareOrderLine")
public class SoftwareOrderLine implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    @JoinColumn(name = "software_id")
    private Software software;
    private int price;
    private int qty;
    
    @ManyToOne
    private SoftwareOrder associatedSoftwareOrder;

    public SoftwareOrderLine() {
    }

    public SoftwareOrderLine(Software software, int price, int qty) {
        this.software = software;
        this.price = price;
        this.qty = qty;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Software getSoftware() {
        return software;
    }

    public void setSoftware(Software software) {
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

    public SoftwareOrder getAssociatedSoftwareOrder() {
        return associatedSoftwareOrder;
    }

    public void setAssociatedSoftwareOrder(SoftwareOrder associatedSoftwareOrder) {
        this.associatedSoftwareOrder = associatedSoftwareOrder;
    }
}
