package laboral;

/**
 * It creates a connection to the database and then calls the getEmpleados() method from the
 * EmpleadosDB class
 */
public class PruebaConexion {
    public static void main(String[] args) {
        DBconexion.getConnection();
        // EmpleadosDB.getEmpleados();
        // // Tengo que revisar la bbdd porque la tabla nominas está vacia.
        // EmpleadosDB.altaEmpleado("Maria", "30233243Q", 'F', 2, 2);
        EmpleadosDB.altaEmpleado("C:\\Users\\Alejandro\\Desktop\\empleadosNuevos.txt");

    }
}
