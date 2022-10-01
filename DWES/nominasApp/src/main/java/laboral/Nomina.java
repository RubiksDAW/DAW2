package laboral;

import java.io.*;

/**
 * It reads the employee's data from a file, calculates the salary and writes it to another file
 */
public class Nomina {

    private static final int SUELDO_BASE[] = { 50000, 70000, 90000, 110000, 130000, 150000, 170000, 190000, 210000,
            230000 };

    public static int sueldo(Empleado emp) {

        int sueldo = 0;

        sueldo = SUELDO_BASE[emp.getCategoria()] + 5000 * emp.anyosTrabajados;

        return sueldo;
    }

    public static void Leer() {
        File doc = null;
        FileReader fr = null;
        BufferedReader br = null;

        try {

            doc = new File("empleados.txt");

            fr = new FileReader(doc);
            br = new BufferedReader(fr);

            String linea;

            while ((linea = br.readLine()) != null) {

                System.out.println(linea);
            }

        } catch (Exception e) {

            System.out.println(e.getMessage());

        }
    }

    // Writing the employee's data to a file.
    public static void Escribir(Empleado emp) {

        FileWriter fichero = null;
        PrintWriter pw = null;

        try {
            // Debemos especificar la ruta, quizás añadir una variable
            fichero = new FileWriter("sueldos.dat", true);
            pw = new PrintWriter(fichero);
            
            pw.print("Sueldo de " + emp.dni + ": " + Nomina.sueldo(emp));
            pw.println("\n");

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {

                if (null != fichero)
                    fichero.close();
            } catch (Exception e2) {
                e2.printStackTrace();
            }
        }

    }

}