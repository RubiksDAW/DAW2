package es.tuespiral.spring.vehiculo;

import org.springframework.stereotype.Component;

import es.tuespiral.spring.motor.MotorInterface;

@Component
public class Vehiculo {
	
	private MotorInterface motor;
	
	public Vehiculo(MotorInterface motora) {
		this.motor = motora;
	}
	
	public void arrancar() {
		motor.arrancar();
	}
	
	public void parar() {
		motor.parar();
	}
	
	public String toString() {
		return "Vehiculo con "+motor.toString();
	}
}
