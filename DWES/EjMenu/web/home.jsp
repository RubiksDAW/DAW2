<%@ page contentType="text/html;charset=ISO-8859-15"%>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-15">
    <title>Developer Site: Aplicaci�n de ejemplo de barra de men� con JSP y reenv�o de peticiones</title>
  </head>
  <body> 
    <P>
      <jsp:include page="menu.jsp" flush="true"/>
    </P>
    <P align="center">
      <STRONG>EST� EN : P�GINA DE INICIO</STRONG>&nbsp;
    </P>
    <P>
      <center>Bienvenido a Developer Site</center>
    </P>
    <jsp:include page="pie.html" flush="true" />
  </body>
</html> 
