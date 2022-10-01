package laboral;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * It's a singleton class that returns a connection to the database
 */
public class DBconexion {
    public static Connection conexion = null;
	public static final String Url = "jdbc:mariadb://localhost:3306/nominas";
    
	public static Connection getConnection() {
		try {
			if (conexion == null) {
				conexion = DriverManager.getConnection(DBconexion.Url,"root","root");
				System.out.println("Conexión realizada con éxito");
			}
		} catch (SQLException ex) {
			ex.printStackTrace();
		}
		return conexion;
	}
	
	public static void close() {
		try {
			if (conexion != null) conexion.close();
		} catch (SQLException e) {
			// TODO: handle exception
			System.err.println(e.getMessage());
		}
	}
}
