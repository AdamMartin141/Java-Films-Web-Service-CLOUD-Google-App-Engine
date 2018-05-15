<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="baseClasses.*" %>
<%@ page import="java.util.*" %>
<%@ page import="java.io.*" %>
<%@ page import="javax.*" %>
<%@ page import="com.google.gson.Gson" %>
<%


List<Film> allFilms = (List<Film>) request.getAttribute("films");

Gson gson = new Gson();

String jsonFilms = gson.toJson(allFilms);
response.getWriter().println(jsonFilms);
%>