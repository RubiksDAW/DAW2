package es.tuespiral.spring;

import java.time.LocalDate;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import es.tuespiral.spring.customer.Customer;
import es.tuespiral.spring.customer.CustomerException;
import es.tuespiral.spring.customer.CustomerRepository;
import es.tuespiral.spring.order.Order;
import es.tuespiral.spring.order.OrderRepository;

@SpringBootApplication
public class DemoRepositoriosApplication {
	public static void main(String[] args) throws CustomerException {
		ApplicationContext context = SpringApplication.run(DemoRepositoriosApplication.class, args);
		
		CustomerRepository repoCustomer = context.getBean(CustomerRepository.class);
		OrderRepository repoOrder = context.getBean(OrderRepository.class);
		
		Customer c = new Customer("Pedro", "Sánchez", "psan@gmail.com", LocalDate.now());
		repoCustomer.save(c);
				
		Order order = new Order(null, LocalDate.now(), "Pending", c);
		repoOrder.save(order);
		
		Iterable<Customer> iterCus = repoCustomer.findAll();
		for (Customer cus : iterCus) {
			//cus.getOrders().size();
		    System.out.println(cus);			
		}
		
		List<Customer> opc = repoCustomer.findByIdPrueba(1L);
		System.out.println(opc);
				
		
		

	}

}
