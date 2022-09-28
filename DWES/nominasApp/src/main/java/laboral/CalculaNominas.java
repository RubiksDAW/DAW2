package laboral;

public class CalculaNominas {

    private static void escribe(Empleado emp) {

        System.out.println("Empleado " + emp.nombre);
        System.out.println(Nomina.sueldo(emp));
        emp.imprime();

    }

    public static void main(String[] args) {

        try {

            Empleado emp1 = new Empleado("James", "3200032G", 'M', 4, 7);
            Empleado emp2 = new Empleado("Ada Lovelace", "32000031R", 'F');

            // Escribimos la información del sueldo en nuestro archivo sueldos.dat
            // Nomina.Escribir(emp1);
            // Nomina.Escribir(emp2);
            System.out.println("DOCUMENTO DE SUELDOS");
            System.out.println("----------------------");
            Nomina.Leer();

        } catch (Exception e) {
            System.out.println(e);
        }
        // Empleado emp1 = new Empleado("James", "3200032G", 'M', 4, 7);

        // Empleado emp2 = new Empleado("Ada", "32334344", 'F');

        // CalculaNominas.escribe(emp1);

        // CalculaNominas.escribe(emp2);

        // System.out.println("HACEMOS CAMBIOS");

        // emp2.incrAnyo();

        // emp1.setCategoria(9);

        // CalculaNominas.escribe(emp1);
        // CalculaNominas.escribe(emp2);

    }
}
