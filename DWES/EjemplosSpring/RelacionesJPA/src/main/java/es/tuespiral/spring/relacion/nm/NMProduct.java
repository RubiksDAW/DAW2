package es.tuespiral.spring.relacion.nm;

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

@Entity	
@Table(name="Z_PRODUCTS")
public class NMProduct {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
	private String name;
	
	@Column(length=500, nullable=true)
	private String description;
	
	@Column
	private BigDecimal price;
	// BigDecimal es el mejor tipo Java para guardar precios. No produce fallos en los decimales.

	@OneToMany(mappedBy="product")
	private List<NMOrderProduct> orderProducts = new ArrayList<>();	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public List<NMOrder> getNMOrders() {
		return orderProducts.stream()
				.map(op -> op.getOrder())
				.collect(Collectors.toList());
	}
	
	public void setNMOrderProducts(List<NMOrderProduct> orderProducts) {
		this.orderProducts = orderProducts;
	}
	
	public List<NMOrderProduct> getNMOrderProducts() {
		return orderProducts;
	}
	
}
