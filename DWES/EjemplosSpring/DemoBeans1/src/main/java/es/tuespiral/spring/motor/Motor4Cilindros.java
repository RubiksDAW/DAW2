package es.tuespiral.spring.motor;

import org.springframework.stereotype.Component;

@Component
public class Motor4Cilindros implements MotorInterface {
	
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
		return "motor de 4 cilindros "+(arrancado?"arrancado":"parado");
	}
}
