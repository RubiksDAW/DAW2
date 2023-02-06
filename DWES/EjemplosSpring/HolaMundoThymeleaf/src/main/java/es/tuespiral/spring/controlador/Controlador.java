package es.tuespiral.spring.controlador;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Controlador {
	
	@GetMapping("/")
	public String welcome() {
	    return "home";
	}
}
