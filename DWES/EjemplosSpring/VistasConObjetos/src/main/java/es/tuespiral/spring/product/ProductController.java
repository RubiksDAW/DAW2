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


@Controller
@RequestMapping("products")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/")
	public String findAll(Model model) {	
		model.addAttribute("products", productService.findAll());
		return "product-list-all";
	}
	
	@GetMapping("/{id}")
	public String findById(@PathVariable Long id, Model model) {
		try {
			model.addAttribute("product", productService.findById(id));
			return "product-by-id";
		} catch (ProductNotFoundException e) {
			model.addAttribute("message", "El producto buscado no existe");
			return "error";
		}
	}
	
	@GetMapping("/product")
	public String findByIdWithParam(@RequestParam Long id, Model model) {
		return findById(id, model);
	}

}
