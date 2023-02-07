 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>NTT Data - JSP Ejemplo</title>
</head>
<body>

	<p>Listado de estudiantes:</p>
	<c:forEach var="student" items="${studentsList}">
	
	<tr>${student}</tr>
	
	</c:forEach>

</body>
</html>