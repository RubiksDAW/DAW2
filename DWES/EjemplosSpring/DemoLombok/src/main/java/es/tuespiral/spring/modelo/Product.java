package es.tuespiral.spring.modelo;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity	
@Table(name="PRODUCTS")
@Data
public class Product {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
	private String name;
	
	@Column(length=500, nullable=true)
	private String description;
	
	@Column
	private BigDecimal price;

	@ManyToMany(mappedBy="products")
	private List<Order> orders = new ArrayList<>();	
}
