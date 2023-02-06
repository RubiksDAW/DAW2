package es.tuespiral.spring.relacion.nm;

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

@Entity
@Table(name="Z_ORDERS")
public class NMOrder {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
	@Column(name="ORDER_DATE", nullable=false)
	private LocalDate orderDate;
	
	@Column(name="ORDER_STATUS", nullable=true)
	private String status;
	
	@ManyToOne
	private NMCustomer customer;

	@OneToMany(mappedBy="order")
	private List<NMOrderProduct> orderProducts = new ArrayList<>();
	
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
	
	public List<NMProduct> getNMProducts() {
		return orderProducts.stream()
				.map(op -> op.getProduct())
				.collect(Collectors.toList());
	}
	
	public void setNMOrderProducts(List<NMOrderProduct> orderProducts) {
		this.orderProducts = orderProducts;
	}
	
	public List<NMOrderProduct> getNMOrderProducts() {
		return orderProducts;
	}
	
}
