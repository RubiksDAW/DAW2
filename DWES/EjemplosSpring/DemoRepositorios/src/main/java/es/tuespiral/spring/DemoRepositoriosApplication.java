package es.tuespiral.spring;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import es.tuespiral.spring.customer.Customer;
import es.tuespiral.spring.customer.CustomerRepository;
import es.tuespiral.spring.product.Product;
import es.tuespiral.spring.product.ProductRepository;
import es.tuespiral.spring.user.UserRepository;

@SpringBootApplication
public class DemoRepositoriosApplication {
	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(DemoRepositoriosApplication.class, args);
		
		CustomerRepository customerRepo = context.getBean(CustomerRepository.class);
		UserRepository userRepo = context.getBean(UserRepository.class);
		
//		Customer c = new Customer("Juan", "Rodríguez");
//		Set<Order> orders = new HashSet<>();
//		Order o = new Order();
//		o.setStatus("Pending");
//		o.setOrderDate(LocalDate.now());
//		o.setCustomer(c);
//		orders.add(o);
//		c.setOrders(orders);
//		User u = new User("juan23", "superpassword23", c);	
//		
//		customerRepo.save(c);
//		userRepo.save(u);
		
		Customer c = customerRepo.findById(1L).get();
		c.getOrders();
		System.out.println(c);
		
		// Observa el código de Product y de ProductRepository.
		// Después descomenta las siguientes líneas y ejecuta:
		// ProductRepository productRepo = context.getBean(ProductRepository.class);
		// loadProducts(productRepo);
		// generatedQueriesDemo(productRepo);

	}
	
	private static void loadProducts(ProductRepository repo) {
		repo.save(new Product("Casiotone 3000", "Un teclado infantil buenisimo", 40));
		repo.save(new Product("Casio FR33", "Un reloj buenisimo", 12));
		repo.save(new Product("Casino 10", "Un mini casino en tu hogar", 22));
		repo.save(new Product("Castillo hinchable", "Botarás", 100));
		repo.save(new Product("Castañas asadas", "Qué ricas", 5));
		repo.save(new Product("Castor portatil", "Para hacer tus propias presas", 60));
		repo.save(new Product("Casita 300", "Casa de juguete", 49));
		repo.save(new Product("Casiná", "Eso mismo", 30));
	}
	
	private static void generatedQueriesDemo(ProductRepository repo) {
		List<Product> list = repo.findByPriceLessThanOrderByPriceDesc(BigDecimal.valueOf(50));
		list.stream().forEach(System.out::println);
	}

}
