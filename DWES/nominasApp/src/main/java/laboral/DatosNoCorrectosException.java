package laboral;

/**
 * This class is a custom exception class that extends the Exception class. It has a constructor that
 * takes no arguments and calls the super class's constructor with the message "Datos no correctos"
 */
public class DatosNoCorrectosException extends Exception {
    public DatosNoCorrectosException(){
        super("Datos no correctos");
    }
}
