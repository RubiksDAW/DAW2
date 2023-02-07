package es.tuespiral.spring.product;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;


@Service
public class ProductService {
	@Autowired
	private ProductRepository repo;

	public List<Product> findAll() {
		List<Product> result = new ArrayList<>();
	    Iterable<Product> iterable = repo.findAll();
	    iterable.forEach(result::add);
	    return result;
	}
	
	public Product createProduct(@NonNull String name, @NonNull String description, BigDecimal price) throws ProductException {
		if (price.doubleValue() <= 0) {
			throw new ProductException("El precio " + price + " no es válido");
		}

		if (!repo.findByName(name).isEmpty()) {
			throw new ProductException("El producto " + name + " ya existe");
		}

		Product p = new Product(name, description, price);
		repo.save(p);
		return p;
	}

	public Product updateProduct(@NonNull Long id, @NonNull String name, @NonNull String description, BigDecimal price) throws ProductException {
		if (price.doubleValue() <= 0) {
			throw new ProductException("El precio " + price + " no es válido");
		}

		Optional<Product> op = repo.findById(id); 
		
		if (op.isEmpty()) {
			throw new ProductNotFoundException("El producto con ID = " + id + " no existe");
		} else {
			Product p = op.get();
			p.setName(name);
			p.setDescription(description);
			p.setPrice(price);
			repo.save(p);
			return p;
		}
	}
	
	public void deleteProduct(@NonNull Long id) throws ProductException {
		Optional<Product> op = repo.findById(id); 
		
		if (op.isEmpty()) {
			throw new ProductNotFoundException("El producto con ID = " + id + " no existe");
		} else {
			Product p = op.get();
			repo.delete(p);
		}
	}

	public Product findById(Long id) throws ProductNotFoundException {
		Optional<Product> op = repo.findById(id); 
		
		if (op.isEmpty()) {
			throw new ProductNotFoundException("El producto con ID = " + id + " no existe");
		} else {
			Product p = op.get();
			System.out.println(p);
			return p;
		}
	}
	
	
}
