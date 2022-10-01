package laboral;



/**
 * The class Empleado extends the class Persona and adds the attributes categoria and anyosTrabajados
 */
public class Empleado extends Persona {

    private int categoria;

    public int anyosTrabajados;

    public Empleado(String nombre, String dni, char sexo) {
        super(nombre, dni, sexo);
        this.categoria = 1;
        this.anyosTrabajados = 0;
    }

    public Empleado(String nombre, String dni, char sexo, int categoria, int anyosTrabajados)
            throws DatosNoCorrectosException {

        super(nombre, dni, sexo);
        
        if (categoria < 1 || categoria > 10) {
            throw new DatosNoCorrectosException();
        } else {
            this.categoria = categoria;
        }

        if (anyosTrabajados < 0) {
            throw new DatosNoCorrectosException();
        } else {
            this.anyosTrabajados = anyosTrabajados;
        }

    }

    public void setCategoria(int categoria) {
        this.categoria = categoria;
    }

    public int getCategoria() {
        return this.categoria;
    }

    public void incrAnyo() {
        this.anyosTrabajados++;
    }

    public void imprime() {
        System.out.println("Información empleado, nombre: " + super.nombre + " dni: " + super.dni + " sexo: "
                + super.sexo + " categoria: " + this.categoria + " años trabajados: " + this.anyosTrabajados);
    }

    

}