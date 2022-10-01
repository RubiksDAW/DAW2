package laboral;

/**
 * A class that represents a person
 */
public class Persona {
	
	public String nombre;
	public String dni;
	public char sexo;
	
	public Persona(String nombre, String dni, char sexo) {
		super();
		this.nombre = nombre;
		this.dni = dni;
		this.sexo = sexo;
	}

	public Persona(String nombre, char sexo) {
		super();
		this.nombre = nombre;
		this.sexo = sexo;
	}
	
	public void setDni(String dni) {
		this.dni = dni;
	}

	public void imprime(){
		System.out.println("El dni es: " + this.dni);
		System.out.println("El nombre es: "+ this.nombre);

	}

	


	
	
	
	
}
