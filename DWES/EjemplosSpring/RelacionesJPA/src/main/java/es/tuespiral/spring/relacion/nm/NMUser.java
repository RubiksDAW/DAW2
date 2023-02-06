package es.tuespiral.spring.relacion.nm;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table; 

@Entity
@Table(name="Z_USERS")
public class NMUser {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
	private String userName;
	
	private String userPassword;
	
	@OneToOne
	private NMCustomer customer;
	
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = encrypt(userPassword);
	}
	
	private String encrypt(String msg) {
		// Aquí pondríamos nuestro algoritmo de cifrado de la password
		return msg;
	}

	public NMCustomer getCustomer() {
		return customer;
	}

	public void setCustomer(NMCustomer customer) {
		this.customer = customer;
	}
	
}
