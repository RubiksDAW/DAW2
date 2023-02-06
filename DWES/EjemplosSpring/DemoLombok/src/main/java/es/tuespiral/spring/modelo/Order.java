package es.tuespiral.spring.modelo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

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

	@ManyToMany
	private List<Product> products = new ArrayList<>();
}
