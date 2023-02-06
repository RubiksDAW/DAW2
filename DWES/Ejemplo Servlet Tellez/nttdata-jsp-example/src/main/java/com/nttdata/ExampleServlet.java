package com.nttdata;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Ejemplo - Servlet
 * 
 * @author NTT Data
 *
 */
@WebServlet("/api")
public class ExampleServlet extends HttpServlet {

	/** Serial Version */
	private static final long serialVersionUID = 1L;

	/**
	 * Constructor por defecto.
	 */
	public ExampleServlet() {
		super();
	}

	/**
	 * Método a la escucha de peticiones HTTP método GET.
	 * 
	 * @param request
	 * @param response
	 * @throws ServletException, IOException
	 * @see HttpServlet#doGet
	 */
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// Invocación a servicio y obtención de datos (simulado).
		final List<String> students = new ArrayList<>();
		students.add("Alejandro");
		students.add("Ainara");
		students.add("Raúl");

		// Volcado de información al ámbito de la solicitud (request)
		request.setAttribute("studentsList", students);

		// Redirección web.
		RequestDispatcher disp = request.getRequestDispatcher("formExample.jsp");
		disp.forward(request, response);

	}

}
