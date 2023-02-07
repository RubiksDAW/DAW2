package es.tuespiral.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import es.tuespiral.spring.customer.CustomerException;
import es.tuespiral.spring.customer.CustomerService;

@SpringBootApplication
public class DemoApiRestApplication {
	public static void main(String[] args) throws CustomerException {
		SpringApplication.run(DemoApiRestApplication.class, args);
	}

}
