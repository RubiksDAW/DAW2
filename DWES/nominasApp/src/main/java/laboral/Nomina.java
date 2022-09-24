package laboral;

import java.io.*;

public class Nomina {

    private static final int SUELDO_BASE[] = { 50000, 70000, 90000, 110000, 130000, 150000, 170000, 190000, 210000,
            230000 };

    public static int sueldo(Empleado emp) {

        int sueldo = 0;

        sueldo = SUELDO_BASE[emp.getCategoria()] + 5000 * emp.anyosTrabajados;

        return sueldo;
    }

    private static void Leer() {
        File doc = null;
        FileReader fr = null;
        BufferedReader br = null;

        try {

            doc = new File("C:\\Users\\Alejandro\\Desktop\\empleados.txt");
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
    public static void Escribir(Empleado emp){

        FileWriter fichero = null;
        PrintWriter pw = null;
        try
        {
            // Debemos especificar la ruta, quizás añadir una variable 
            fichero = new FileWriter("C:\\Users\\Alejandro\\Desktop\\prueba.txt", true);
            pw = new PrintWriter(fichero);

            //Grabamos la información del empleado y añadimos un salto de linea
            pw.print("Sueldo de "+ emp.dni + ": " + Nomina.sueldo(emp));
            pw.println("\n");
            
            
          

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
           try {
           // Nuevamente aprovechamos el finally para 
           // asegurarnos que se cierra el fichero.
           if (null != fichero)
              fichero.close();
           } catch (Exception e2) {
              e2.printStackTrace();
           }
        }

    }



}