package es.tuespiral.spring.customer;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import es.tuespiral.spring.order.Order;
import es.tuespiral.spring.user.User;

@Entity	
@Table(name="CUSTOMERS")
//@NamedEntityGraph(name = "GroupInfo.detail", attributeNodes = @NamedAttributeNode("orders"))
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
	
	@OneToMany(mappedBy="customer", fetch=FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Order> orders = new ArrayList<>();

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

	@Override
	public String toString() {
		return "Customer [id=" + id + ", name=" + name + ", lastName=" + lastName + ", emailAddress=" + emailAddress
				+ ", birthDate=" + birthDate + ", user=" + user + ", orders=" + orders + "]";
	}

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

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public LocalDate getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(LocalDate birthDate) {
		this.birthDate = birthDate;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Order> getOrders() {
		return orders;
	}

	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}
	
	
}
