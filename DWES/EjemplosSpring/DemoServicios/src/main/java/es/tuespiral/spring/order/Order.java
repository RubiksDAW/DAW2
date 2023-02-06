package es.tuespiral.spring.order;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import es.tuespiral.spring.customer.Customer;
import es.tuespiral.spring.orderproduct.OrderProduct;
import es.tuespiral.spring.product.Product;
import lombok.Data;

@Entity
@Table(name="ORDERS")
@Data
public class Order {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
	@Column(name="ORDER_DATE", nullable=false)
	private LocalDate orderDate;
	
	@Column(name="ORDER_STATUS", nullable=true)
	private String status;
	
	@ManyToOne(fetch = FetchType.LAZY)
	private Customer customer;

	@OneToMany(mappedBy="order")
	private List<OrderProduct> orderProducts = new ArrayList<>();
	
	public List<Product> getProducts() {
		return orderProducts.stream()
				.map(op -> op.getProduct())
				.collect(Collectors.toList());
	}
	
	public void setNMOrderProducts(List<OrderProduct> orderProducts) {
		this.orderProducts = orderProducts;
	}
	
	public List<OrderProduct> getNMOrderProducts() {
		return orderProducts;
	}
}
