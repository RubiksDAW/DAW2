package laboral;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
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
                    "select nombre, dni, sexo, categoria, anyos from empleados");

            while (rs.next()) {
                emp = new Empleado(rs.getString(1), rs.getString(2), rs.getString(3).toCharArray()[0], rs.getInt(4),
                        rs.getInt(5));
                emp.imprime();
                empleados.add(emp);
            }
        } catch (SQLException err) {
            err.printStackTrace();
        } catch (DatosNoCorrectosException err) {
            err.printStackTrace();
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
        } catch (SQLException err) {
            err.printStackTrace();
        }

        return nominas;
    }

    public static void printNomina(String dni) {

        Connection conexion = DBconexion.getConnection();
        Statement st = null;
        ResultSet rs = null;
        int nomina = 0;

        try {
            st = conexion.createStatement();
            rs = st.executeQuery("select sueldo from nominas where dni='" + dni + "'");

            while (rs.next()) {
                nomina = rs.getInt(1);
            }
        } catch (SQLException err) {
            err.printStackTrace();
        }
        if (nomina == 0) {
            System.out.println("No encontramos el empleado que usted busca");
        } else {
            System.out.println("El salario del empleado " + dni + " es de: " + nomina + "$");
        }

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

        } catch (SQLException err) {
            err.printStackTrace();
        }
    }

    // Nos crea una instancia de nuestro clase empleado y una vez creada nos la
    // inserta en la bbdd
    public static void altaEmpleado(String nombre, String dni, char sexo, int categoria, int anyos) {
        try {
            Empleado emp = new Empleado(nombre, dni, sexo, categoria, anyos);
            altaEmpleado(emp);
        } catch (DatosNoCorrectosException err) {
            err.getMessage();
        }
    }

    /**
     * It reads a file and creates an employee object for each line in the file
     * 
     * @param fichero the file name
     */
    public static void altaEmpleado(String fichero) {
        String linea;
        Empleado emp;
        String[] datos;
        File entrada = null;
        FileReader fr = null;
        BufferedReader br = null;

        try {

            entrada = new File(fichero);
            fr = new FileReader(entrada);
            br = new BufferedReader(fr);

            while (br.ready()) {

                linea = br.readLine();
                datos = linea.split(" ");

                // Checking how many parameters are in the input file

                if (datos.length == 3)
                    emp = new Empleado(datos[0], datos[1], datos[2].toCharArray()[0]);
                else
                    emp = new Empleado(datos[0], datos[1], datos[2].toCharArray()[0], Integer.parseInt(datos[3]),
                            Integer.parseInt(datos[4]));

                altaEmpleado(emp);
                backup(emp);
            }
            br.close();

        } catch (FileNotFoundException err) {
            err.printStackTrace();
        } catch (IOException err) {
            err.printStackTrace();
        } catch (DatosNoCorrectosException err) {
            err.printStackTrace();
        }
    }

    public static void backup(Empleado emp) {

        // Creating a new file called empleadosBackup.txt in the specified path.
        File backup = new File("C:\\Users\\Alejandro\\Desktop\\empleadosBackup.txt");
        FileWriter fw = null;
        BufferedWriter bw = null;
        try {
            fw = new FileWriter(backup.getAbsoluteFile(), true);
            bw = new BufferedWriter(fw);

            // Writing the employee's data to a file.
            bw.write(emp.nombre + " " + emp.dni + " " + emp.sexo + " " + emp.getCategoria() + " " + emp.anyosTrabajados
                    + " " + Nomina.sueldo(emp) + '\n');

            bw.close();
            fw.close();

        } catch (FileNotFoundException err) {
            err.printStackTrace();
        } catch (IOException err) {
            err.printStackTrace();
        }
    }

    public static boolean checkEmpleado(String dni) {
        Connection con = DBconexion.getConnection();
        boolean exists = false;
        Statement st = null;
        ResultSet rs = null;
        try {
            st = con.createStatement();
            rs = st.executeQuery("select * from empleados where dni='" + dni + "'");

            if (rs != null)
                exists = true;

        } catch (SQLException err) {
            err.printStackTrace();
        }

        return exists;
    }

    public static void updateEmpleado(Empleado emp) {
        // Conexón a la base de datos
        Connection con = DBconexion.getConnection();
        Statement st = null;

        try {
            st = con.createStatement();
            System.out.println("update empleados emp set emp.nombre='" + emp.nombre + "' and emp.sexo='" + emp.sexo
                    + "' and emp.categoria=" + emp.getCategoria() + " and emp.anyos=" + emp.anyosTrabajados
                    + " where emp.dni='" + emp.dni + "'");
            
            st.execute("update empleados emp set emp.nombre='" + emp.nombre + "' and emp.sexo='" + emp.sexo
                    + "' and emp.categoria=" + emp.getCategoria() + " and emp.anyos=" + emp.anyosTrabajados
                    + " where emp.dni='" + emp.dni + "'");
           
            st.execute("update nominas set sueldo=" + Nomina.sueldo(emp) + " where dni='" + emp.dni + "'");

        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }

    public static void updateSueldo(String dni) {
        // Conexón a la base de datos
        Connection con = DBconexion.getConnection();
        Statement st = null;
        try {
            st = con.createStatement();
            st.execute("update nominas set sueldo=" + Nomina.sueldo(EmpleadosDB.getEmpleado(dni)) + " where dni='" + dni
                    + "'");

        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }

    public static Empleado getEmpleado(String dni) {
        Connection con = DBconexion.getConnection();
        Statement st = null;
        ResultSet res = null;
        Empleado emp = null;

        try {

            st = con.createStatement();
            res = st.executeQuery(
                    "select nombre, dni, sexo, categoria, anyos from empleados where dni = '" + dni + "'");

            while (res.next()) {
                emp = new Empleado(res.getString(1), res.getString(2), res.getString(3).charAt(0), res.getInt(4),
                        res.getInt(5));
            }

        } catch (SQLException err) {
            err.printStackTrace();

        } catch (DatosNoCorrectosException err) {
            err.printStackTrace();

        }

        return emp;
    }

}
