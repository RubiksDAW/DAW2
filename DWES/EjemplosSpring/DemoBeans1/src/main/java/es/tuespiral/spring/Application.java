package es.tuespiral.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import es.tuespiral.spring.vehiculo.Vehiculo;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(Application.class, args);
		
		Vehiculo v = context.getBean(Vehiculo.class);
		v.arrancar();
		System.out.println(v);
		v.parar();
		System.out.println(v);
	}

}
