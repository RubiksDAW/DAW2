package es.tuespiral.spring.motor;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class MotorElectrico implements MotorInterface {
	private boolean arrancado;

	@Override
	public void arrancar() {
		arrancado = true;
	}

	@Override
	public void parar() {
		arrancado = false;
	}

	public String toString() {
		return "motorete de 4 cilindros " + (arrancado ? "arrancado" : "parado");
	}
}
