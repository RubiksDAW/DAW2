<%@ page contentType="text/html;charset=ISO-8859-15"%>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-15">
    <title>Developer Site: Aplicación de ejemplo de barra de menú con JSP y reenvío de peticiones</title>
  </head>
  <body> 
    <P>
      <jsp:include page="menu.jsp" flush="true"/>
    </P>
    <P align="center">
      <STRONG>ESTÁ EN : PÁGINA DE INICIO</STRONG>&nbsp;
    </P>
    <P>
      <center>Bienvenido a Developer Site</center>
    </P>
    <jsp:include page="pie.html" flush="true" />
  </body>
</html> 
