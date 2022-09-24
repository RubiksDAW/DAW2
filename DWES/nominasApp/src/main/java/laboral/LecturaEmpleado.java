package laboral;

import java.io.BufferedReader;

import java.io.File;
import java.io.FileReader;

public class LecturaEmpleado {

    private static void Leer(){
        File doc = null;
        FileReader fr = null;
        BufferedReader br = null;

        try {

           doc = new File("C:\\Users\\Alejandro\\Desktop\\empleados.txt");
           fr = new FileReader(doc);
           br = new BufferedReader(fr);

           String linea;

           while((linea = br.readLine()) != null){
            System.out.println(linea);
           }

        } catch (Exception e) {
            
            System.out.println(e.getMessage());
        }
    }

    private static void Escribir(){}
    public static void main(String[] args) {
        System.out.println("Procedemos a leer nuestro archivo");
        System.out.println("-------------------------------------");
        Leer();

    }
}
