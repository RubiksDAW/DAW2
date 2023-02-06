package es.tuespiral.spring.turbo;

import org.springframework.stereotype.Component;

@Component
public class TurboSimple implements TurboInterface {
	
	@Override
	public void activar() {
		System.out.println("Turbo simple activo");
	}
	
	@Override
	public void desactivar() {
		System.out.println("Turbo simple desactivo");
	}
}
