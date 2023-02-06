package es.tuespiral.spring.relacion.nm;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="Z_ORDERS_PRODUCTS")
public class NMOrderProduct {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
 
    @ManyToOne
    private NMOrder order;
 
    @ManyToOne
    private NMProduct product;
 
    private int quantity;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public NMOrder getOrder() {
		return order;
	}

	public void setOrder(NMOrder order) {
		this.order = order;
	}

	public NMProduct getProduct() {
		return product;
	}

	public void setProduct(NMProduct product) {
		this.product = product;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public NMOrderProduct(NMOrder order, NMProduct product, int quantity) {
		super();
		this.order = order;
		this.product = product;
		this.quantity = quantity;
	}
    
	public NMOrderProduct() {}
}
