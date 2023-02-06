package es.tuespiral.spring.relacion.nm;

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

@Entity	
@Table(name="Z_CUSTOMERS")
public class NMCustomer {
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
	private NMUser user;
	
	@OneToMany(mappedBy="customer")
	private Set<NMOrder> orders = new HashSet<>();
	
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

	public Set<NMOrder> getOrders() {
		return orders;
	}

	public void setOrders(Set<NMOrder> orders) {
		this.orders = orders;
	}

	public NMUser getUser() {
		return user;
	}

	public void setUser(NMUser user) {
		this.user = user;
	}

	
	
}
