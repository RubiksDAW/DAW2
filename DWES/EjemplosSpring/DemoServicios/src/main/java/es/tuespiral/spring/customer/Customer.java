package es.tuespiral.spring.customer;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import es.tuespiral.spring.order.Order;
import es.tuespiral.spring.user.User;
import lombok.Data;
import lombok.NonNull;

@Entity	
@Table(name="CUSTOMERS")
@Data
public class Customer {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
	private String name;
	
	@Column(length=150, nullable=false, unique=false)
	private String lastName;
	
	@Column(name="EMAIL", length=250, nullable=true)
	private String emailAddress;
	
	@Column(name="BIRTHDATE", nullable=true)
	private LocalDate birthDate;
	
	@OneToOne(mappedBy = "customer")
	private User user;
	
	@OneToMany(mappedBy="customer")
	private Set<Order> orders = new HashSet<>();

	public Customer() {}
	
	public Customer(String name, String lastName) {
		this.name = name;
		this.lastName = lastName;
	}

	public Customer(String name, String lastName, String emailAddress, LocalDate birthDate) {
		super();
		this.name = name;
		this.lastName = lastName;
		this.emailAddress = emailAddress;
		this.birthDate = birthDate;
	}
	
	
}