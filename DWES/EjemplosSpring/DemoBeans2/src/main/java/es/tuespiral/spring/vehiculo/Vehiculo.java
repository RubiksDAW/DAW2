package es.tuespiral.spring.vehiculo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import es.tuespiral.spring.motor.MotorInterface;
import es.tuespiral.spring.turbo.TurboInterface;

@Component
public class Vehiculo {
	
	private MotorInterface motor;
	private TurboInterface turbo;

	public Vehiculo(MotorInterface motor) {
		this.motor = motor;
	}

	@Autowired(required = false)
	public void setTurbo(TurboInterface turbo) {
		this.turbo = turbo;
	}

	public void arrancar() {
		motor.arrancar();
	}

	public void parar() {
		motor.parar();
	}

	public String toString() {
		String turboTexto = (turbo == null)? "SIN turbo y con ": "CON turbo y con ";  
		return "Vehiculo " + turboTexto + motor.toString();
	}
}
