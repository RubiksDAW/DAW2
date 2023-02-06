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

@Entity
@Table(name="ORDERS")
public class Order {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
	@Column(name="ORDER_DATE", nullable=false)
	private LocalDate orderDate;
	
	@Column(name="ORDER_STATUS", nullable=true)
	private String status;
	
	@ManyToOne
	private Customer customer;

	//@OneToMany(mappedBy="order")
	//private List<OrderProduct> orderProducts = new ArrayList<>();
	
	
	
	public Order() {
		super();
	}

	public Order(Long id, LocalDate orderDate, String status, Customer customer) {
		super();
		this.id = id;
		this.orderDate = orderDate;
		this.status = status;
		this.customer = customer;
	}

	/*public List<Product> getProducts() {
		return orderProducts.stream()
				.map(op -> op.getProduct())
				.collect(Collectors.toList());
	}*/
	
	/*public void setNMOrderProducts(List<OrderProduct> orderProducts) {
		this.orderProducts = orderProducts;
	}*/
	
	/*public List<OrderProduct> getNMOrderProducts() {
		return orderProducts;
	}*/

	@Override
	public String toString() {
		return "Order [id=" + id + ", orderDate=" + orderDate + ", status=" + status + ", customerId=" + customer.getId()
				+ ", orderProducts= orderProducts  ]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	/*public List<OrderProduct> getOrderProducts() {
		return orderProducts;
	}*/

	/*public void setOrderProducts(List<OrderProduct> orderProducts) {
		this.orderProducts = orderProducts;
	}*/
	
	
}
