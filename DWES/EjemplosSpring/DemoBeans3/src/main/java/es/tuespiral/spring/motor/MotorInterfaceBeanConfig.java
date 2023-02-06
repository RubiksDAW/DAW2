package es.tuespiral.spring.motor;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;


@Configuration
public class MotorInterfaceBeanConfig {
	@Value("${motor.type}")
	private String tipoMotor;
	
	@Bean
	@Primary
    public MotorInterface getMotorConfig() {
		if (tipoMotor.equals("4cilindros"))
			return new Motor4Cilindros();
		else 
			return new MotorElectrico();
    }
}

