package laboral;

/**
 * It creates a connection to the database and then calls the getEmpleados() method from the
 * EmpleadosDB class
 */
public class PruebaConexion {
    public static void main(String[] args) {
        DBconexion.getConnection();
        // EmpleadosDB.getEmpleados();
        Nomina.Leer();
        // EmpleadosDB.altaEmpleado("MariaLuisa", "30239243Q", 'F', 2, 2);
        EmpleadosDB.altaEmpleado("C:\\DATA\\DAW2\\DAW2\\DWES\\nominasApp\\empleadosNuevos.txt");

    }
}
