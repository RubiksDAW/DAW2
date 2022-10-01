import java.util.Scanner;

import laboral.*;

/**
 * This class is the main class of the program, it's the one that handles the user input and calls the
 * methods from the other classes
 */
public class PruebaEmpleados {
    public static void main(String[] args) {
        int opcion;
        String dniConsulta;

        Scanner sc = new Scanner(System.in);
        // ATENCIÓN!!!!!!!!!!!!
        // Para ciertos métodos he empleado rutas absolutas por lo que se deberan cambiar para
        // el correcto funcionamiento
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
            System.out.println("Introduce una opción a realizar");
            opcion = sc.nextInt();
            // System.out.println("0 -Salir");
            // System.out.println("1 -Consultar empleados");
            // System.out.println("2 -Consultar nomina empleado");
            // System.out.println("3 -Menu modificación empleados");
            // System.out.println("4 -Recalcular y actualizar sueldo empleado");
            // System.out.println("5 -Recalcular y actualizar los sueldos de todos los empleados");
            // System.out.println("6 -Realizar una copia de seguridad de la BBDD");

            switch (opcion) {
                case 1:
                    EmpleadosDB.getEmpleados();
                    System.out.println("-------------------------------");
                                System.out.println("0 -Salir");
                                System.out.println("1 -Consultar empleados");
                                System.out.println("2 -Consultar nomina empleado");
                                System.out.println("3 -Menu modificación empleados");
                                System.out.println("4 -Recalcular y actualizar sueldo empleado");
                                System.out.println("5 -Recalcular y actualizar los sueldos de todos los empleados");
                                System.out.println("6 -Realizar una copia de seguridad de la BBDD");
                    break;

                case 2:
                    System.out.println("introduce el dni del empleado");
                    sc.nextLine();
                    dniConsulta = sc.nextLine();
                    EmpleadosDB.printNomina(dniConsulta);
                    System.out.println("-------------------------------");
                                System.out.println("0 -Salir");
                                System.out.println("1 -Consultar empleados");
                                System.out.println("2 -Consultar nomina empleado");
                                System.out.println("3 -Menu modificación empleados");
                                System.out.println("4 -Recalcular y actualizar sueldo empleado");
                                System.out.println("5 -Recalcular y actualizar los sueldos de todos los empleados");
                                System.out.println("6 -Realizar una copia de seguridad de la BBDD");
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
                                EmpleadosDB.updateEmpleadoNombre(emp);
                                System.out.println("Nombre cambiado correctamente");
                                System.out.println("-------------------------------");
                                System.out.println("0 -Salir");
                                System.out.println("1 -Consultar empleados");
                                System.out.println("2 -Consultar nomina empleado");
                                System.out.println("3 -Menu modificación empleados");
                                System.out.println("4 -Recalcular y actualizar sueldo empleado");
                                System.out.println("5 -Recalcular y actualizar los sueldos de todos los empleados");
                                System.out.println("6 -Realizar una copia de seguridad de la BBDD");
                                break;

                            case "2":
                                System.out.println("Introduce el nuevo sexo");
                                emp.sexo = sc.nextLine().charAt(0);
                                // Comprobar que el update está bien
                                // A unas malas crear un metodo para actualizar cada uno de las propiedades
                                // del empleado de forma individual.
                                EmpleadosDB.updateEmpleadoSexo(emp);
                                System.out.println("Sexo cambiado correctamente");
                                System.out.println("-------------------------------");
                                System.out.println("0 -Salir");
                                System.out.println("1 -Consultar empleados");
                                System.out.println("2 -Consultar nomina empleado");
                                System.out.println("3 -Menu modificación empleados");
                                System.out.println("4 -Recalcular y actualizar sueldo empleado");
                                System.out.println("5 -Recalcular y actualizar los sueldos de todos los empleados");
                                System.out.println("6 -Realizar una copia de seguridad de la BBDD");
                                break;

                            case "3":
                                System.out.println("Introduce la nueva categoria");
                                emp.setCategoria(sc.nextInt());

                                EmpleadosDB.updateEmpleadoCategoria(emp);
                                System.out.println("Categoria cambiada correctamente");
                                System.out.println("-------------------------------");
                                System.out.println("0 -Salir");
                                System.out.println("1 -Consultar empleados");
                                System.out.println("2 -Consultar nomina empleado");
                                System.out.println("3 -Menu modificación empleados");
                                System.out.println("4 -Recalcular y actualizar sueldo empleado");
                                System.out.println("5 -Recalcular y actualizar los sueldos de todos los empleados");
                                System.out.println("6 -Realizar una copia de seguridad de la BBDD");
                                break;

                            case "4":
                                System.out.println("Introduce los nuevos años");
                                emp.nombre = sc.nextLine();

                                EmpleadosDB.updateEmpleadoAnyos(emp);

                                System.out.println("Años cambiados correctamente");
                                System.out.println("-------------------------------");
                                System.out.println("0 -Salir");
                                System.out.println("1 -Consultar empleados");
                                System.out.println("2 -Consultar nomina empleado");
                                System.out.println("3 -Menu modificación empleados");
                                System.out.println("4 -Recalcular y actualizar sueldo empleado");
                                System.out.println("5 -Recalcular y actualizar los sueldos de todos los empleados");
                                System.out.println("6 -Realizar una copia de seguridad de la BBDD");
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
