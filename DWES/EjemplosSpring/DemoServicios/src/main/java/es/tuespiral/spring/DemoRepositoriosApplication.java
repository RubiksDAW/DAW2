package es.tuespiral.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import es.tuespiral.spring.customer.CustomerException;
import es.tuespiral.spring.customer.CustomerService;

@SpringBootApplication
public class DemoRepositoriosApplication {
	public static void main(String[] args) throws CustomerException {
		ApplicationContext context = SpringApplication.run(DemoRepositoriosApplication.class, args);
		
		CustomerService customerService = context.getBean(CustomerService.class);
		
		customerService.createCustomer("Pedro", "López", "plopez@correo.es", null);

	}

}
