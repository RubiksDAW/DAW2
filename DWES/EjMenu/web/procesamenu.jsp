<%@ page contentType="text/html;charset=ISO-8859-15"%>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-15">
    <title>Procesa opci�n de men�</title>
  </head>
  <body>
  <%
    String pag = request.getParameter("pag");
    pag = pag+".jsp";
  %>
  <jsp:forward page="<%=pag%>"/>
  </body>
</html> 
