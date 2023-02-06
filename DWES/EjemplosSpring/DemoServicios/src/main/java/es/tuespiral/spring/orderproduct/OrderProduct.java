package es.tuespiral.spring.orderproduct;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import es.tuespiral.spring.order.Order;
import es.tuespiral.spring.product.Product;

@Entity
@Table(name="ORDERS_PRODUCTS")
public class OrderProduct {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
 
    @ManyToOne
    private Order order;
 
    @ManyToOne
    private Product product;
 
    private int quantity;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public OrderProduct(Order order, Product product, int quantity) {
		super();
		this.order = order;
		this.product = product;
		this.quantity = quantity;
	}
    
	public OrderProduct() {}
}
