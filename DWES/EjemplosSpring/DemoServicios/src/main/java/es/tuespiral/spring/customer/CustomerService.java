package es.tuespiral.spring.customer;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import es.tuespiral.spring.utils.mail.EmailService;
import es.tuespiral.spring.utils.mail.Message;
import es.tuespiral.spring.utils.mail.MessageImpl;
import lombok.NonNull;

@Service
public class CustomerService {
	private CustomerRepository repo;
	private EmailService emailService;
	
	@Value("${demo.servicios.email.from}")
	private String emailFrom; 
	
	public CustomerService(CustomerRepository cr, EmailService es) {
		repo = cr;
		emailService = es;
	}
	
	public void createCustomer(@NonNull String name, @NonNull String lastName, 
							   @NonNull String email, LocalDate birthDate)
							   throws CustomerException {
		if (!emailService.validateAddress(email)) {
			throw new CustomerException("El email "+email+" no es válido");
		}
		
		if(!repo.findByEmailAddress(email).isEmpty()) {
			throw new CustomerException("El cliente con "+email+" ya existe");
		}
		
		Customer c = new Customer(name, lastName, email, birthDate);
		repo.save(c);
		Message msg = emailService.buildMessageOf(emailFrom, email, "Good news!", "The customer was created successfully");
		emailService.send(msg);
	}
}
