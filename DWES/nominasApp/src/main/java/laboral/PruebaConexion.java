package laboral;

/**
 * It creates a connection to the database and then calls the getEmpleados() method from the
 * EmpleadosDB class
 */
public class PruebaConexion {
    public static void main(String[] args) {
        DBconexion.getConnection();
        EmpleadosDB.getEmpleados();
        // Tengo que revisar la bbdd porque la tabla nominas está vacia.
        EmpleadosDB.altaEmpleado("Alejandro", "30233234Q", 'M', 2, 4);
    }
}
