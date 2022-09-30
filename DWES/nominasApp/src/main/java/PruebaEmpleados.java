import java.util.Scanner;

import laboral.*;

public class PruebaEmpleados {
    public static void main(String[] args) {
        int opcion;
        String dniConsulta;

        Scanner sc = new Scanner(System.in);
        System.out.println("Bienvenido a ClientManager 3.0");
        System.out.println("------------------------------");

        System.out.println("0 -Salir");
        System.out.println("1 -Consultar empleados");
        System.out.println("2 -Consultar nomina empleado");
        System.out.println("3 -Menu modificación empleados");
        System.out.println("4 -Recalcular y actualizar sueldo empleado");
        System.out.println("5 -Recalcular y actualizar los sueldos de todos los empleados");
        System.out.println("6 -Realizar una copia de seguridad de la BBDD");
        do {
            opcion = sc.nextInt();
            System.out.println("0 -Salir");
            System.out.println("1 -Consultar empleados");
            System.out.println("2 -Consultar nomina empleado");
            System.out.println("3 -Menu modificación empleados");
            System.out.println("4 -Recalcular y actualizar sueldo empleado");
            System.out.println("5 -Recalcular y actualizar los sueldos de todos los empleados");
            System.out.println("6 -Realizar una copia de seguridad de la BBDD");

            switch (opcion) {
                case 1:
                    EmpleadosDB.getEmpleados();
                    break;

                case 2:
                    System.out.println("introduce el dni del empleado");
                    sc.nextLine();
                    dniConsulta = sc.nextLine();
                    EmpleadosDB.printNomina(dniConsulta);
                    break;
                case 3:

                    System.out.println("Introduce el dni del empleado a modificar");
                    sc.nextLine();
                    dniConsulta = sc.nextLine();
                    if (EmpleadosDB.checkEmpleado(dniConsulta)) {

                        System.out.println("¿Que campo deseas editar?");
                        System.out.println("1 -Nombre");
                        System.out.println("2 -Sexo");
                        System.out.println("3 -Categoria");
                        System.out.println("4 -Años");

                        Empleado emp = EmpleadosDB.getEmpleado(dniConsulta);

                        String editar = sc.nextLine();
                        
                        switch (editar) {
                            case "1":
                                System.out.println("Introduce el nuevo nombre");
                                emp.nombre = sc.nextLine();
                                // Comprobar que el update está bien
                                // A unas malas crear un metodo para actualizar cada uno de las propiedades 
                                // del empleado de forma individual.
                                EmpleadosDB.updateEmpleado(emp);
                                break;

                            default:
                                break;
                        }

                    }

                    break;
                case 4:
                    // This option is only for updating salary after category modification
                    System.out.println("Introduce dni del empleado a modificar");
                    sc.nextLine();
                    dniConsulta = sc.nextLine();
                    if (EmpleadosDB.checkEmpleado(dniConsulta)) {
                        EmpleadosDB.updateSueldo(dniConsulta);
                        System.out.println("Sueldo actualizado");
                    } else {
                        System.out.println("El empleado no existe");
                    }
                    break;
                case 5:
                    for (Empleado e : EmpleadosDB.getEmpleados()) {
                        EmpleadosDB.updateSueldo(e.dni);
                    }
                    System.out.println("Empleados actualizados");

                    break;
                case 6:
                    System.out.println("Realizando copia de los siguientes empleados...");
                    for (Empleado emp : EmpleadosDB.getEmpleados()) {
                        EmpleadosDB.backup(emp);
                    }
                    System.out.println("Copia realizada con exito");

                    break;

                default:
                    break;
            }

        } while (opcion != 0);
    }
}
