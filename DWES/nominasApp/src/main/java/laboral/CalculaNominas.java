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

                CalculaNominas.escribe(emp1);
                
                // Escribimos la información del sueldo en nuestro archivo de prueba
                Nomina.Escribir(emp1);
                
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
