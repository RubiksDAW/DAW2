package es.tuespiral.spring.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import es.tuespiral.spring.order.Order;
import es.tuespiral.spring.orderproduct.OrderProductService;

@Controller
@RequestMapping("products")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	@Autowired
	private OrderProductService ordProdService;
	
	
	@GetMapping("/")
	public String findAll(Model model) {	
		model.addAllAttributes(productService.findAll());
		return "products";
	}
	
	@GetMapping("/{id}")
	public String findById(@PathVariable Long id, Model model) throws ProductNotFoundException {
		model.addAttribute("product", productService.findById(id));
		return "product";
	}
	
	@GetMapping("/product")
	public String findByIdWithParam(@RequestParam Long id, Model model) throws ProductNotFoundException {
		return findById(id, model);
	}
	
	@PostMapping
	public ResponseEntity<Product> create(@RequestBody Product p) throws ProductException {
		Product product = productService.createProduct(p.getName(), p.getDescription(), p.getPrice());
		return new ResponseEntity<>(product, HttpStatus.CREATED);
	}
	
	@PutMapping
	public ResponseEntity<Product> update(@RequestBody Product p) throws ProductException {
		Product product = productService.updateProduct(p.getId(), p.getName(), p.getDescription(), p.getPrice());
		return new ResponseEntity<>(product, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) throws ProductException  {
		productService.deleteProduct(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@GetMapping("/product/{id}/orders")
	public ResponseEntity<List<Order>> findOrdersByIdProduct(@PathVariable Long id) {
		return new ResponseEntity<>(ordProdService.findOrdersByProductId(id), HttpStatus.OK);
	}
	
	
}
