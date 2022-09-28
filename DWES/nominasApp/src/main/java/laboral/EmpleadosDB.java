package laboral;

import java.lang.Thread.State;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class EmpleadosDB {

    /**
     * It connects to the database, creates a statement, executes a query, and
     * returns a list of
     * employees
     * 
     * @return A list of employees.
     */
    public static List<Empleado> getEmpleados() {
        // Conexón a la base de datos
        Connection conexion = DBconexion.getConnection();
        Statement st = null;
        ResultSet rs = null;
        ArrayList<Empleado> empleados = new ArrayList<Empleado>();
        Empleado emp;

        try {
            st = conexion.createStatement();
            rs = st.executeQuery(
                    "select nombre, dni, sexo, categoria, anyos from empleados where nombre like 'Joe Biden'");

            while (rs.next()) {
                emp = new Empleado(rs.getString(1), rs.getString(2), rs.getString(3).toCharArray()[0], rs.getInt(4),
                        rs.getInt(5));
                emp.imprime();
                empleados.add(emp);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        } catch (DatosNoCorrectosException ex) {
            ex.printStackTrace();
        }

        return empleados;

    }

    /**
     * It gets the dni and salary of all employees from the database and returns
     * them in a list of
     * arrays
     * 
     * @return A list of String arrays.
     */
    public static List<String[]> getNominas() {

        Connection conexion = DBconexion.getConnection();
        Statement st = null;
        ResultSet rs = null;
        ArrayList<String[]> nominas = new ArrayList<String[]>();
        String[] n = new String[2];

        try {
            st = conexion.createStatement();
            rs = st.executeQuery("select dni, sueldo from nominas");

            while (rs.next()) {
                n[0] = rs.getString(1);
                n[1] = String.valueOf(rs.getInt(2));
                nominas.add(n);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        }

        return nominas;
    }

    /**
     * It takes an employee object, connects to the database, and inserts the
     * employee's data into the
     * database
     * 
     * @param emp Empleado
     */
    public static void altaEmpleado(Empleado emp) {
        
        Connection conexion = DBconexion.getConnection();
        Statement st = null;
        try {
            
            st = conexion.createStatement();

            st.execute("insert into Empleados(nombre,dni,sexo,categoria,anyos) values ('" + emp.nombre + "','" + emp.dni
                    + "','" + emp.sexo + "','" + emp.getCategoria() + "','" + emp.anyosTrabajados + "')");
            
            st.execute("insert into nominas(dni, sueldo) values ('" + emp.dni + "','" + Nomina.sueldo(emp) + "')");

        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }

    public static void altaEmpleado(String nombre, String dni, char sexo, int categoria, int anyos) {
        try {
            Empleado emp = new Empleado(nombre, dni, sexo, categoria, anyos);
            altaEmpleado(emp);
        } catch (DatosNoCorrectosException ex) {
            ex.getMessage();
        }
    }

}
