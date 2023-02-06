package es.tuespiral.spring.modelo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data; 

@Entity
@Table(name="USERS")
@Data
public class User {
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
	private String userName;
	
	private String userPassword;
	
	@OneToOne
	private Customer customer;
}
