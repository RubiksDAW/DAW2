package es.tuespiral.spring.product;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import es.tuespiral.spring.order.Order;
import es.tuespiral.spring.orderproduct.OrderProduct;

@Entity	
@Table(name="PRODUCTS")
public class Product {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
	private String name;
	
	@Column(length=500, nullable=true)
	private String description;
	
	@Column
	private BigDecimal price;

	@OneToMany(mappedBy="product")
	private List<OrderProduct> orderProducts = new ArrayList<>();	
	
	public Product () {}
	
	public Product(String name, String description, double price) {
		this.name = name;
		this.description = description;
		this.price = BigDecimal.valueOf(price);
	}

	@Override
	public String toString() {
		return "Product [name=" + name + ", description=" + description + ", price=" + price + "]";
	}
	
	public List<Order> getOrders() {
		return orderProducts.stream()
				.map(op -> op.getOrder())
				.collect(Collectors.toList());
	}
	
	public void setNMOrderProducts(List<OrderProduct> orderProducts) {
		this.orderProducts = orderProducts;
	}
	
	public List<OrderProduct> getNMOrderProducts() {
		return orderProducts;
	}
	
}
