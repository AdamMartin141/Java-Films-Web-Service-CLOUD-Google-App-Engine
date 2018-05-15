<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="java.util.*" %>
<%@ page import="baseClasses.*"%>
<%


List<Film> allFilms = (List<Film>) request.getAttribute("films");

Film aFilm = null;

for (int i=0; i< allFilms.size();i++) {
	
	aFilm = allFilms.get(i);
	
	out.write("#" + aFilm.getID() + "#" + aFilm.getTitle() + "#" + aFilm.getYear() 
	+ "#" + aFilm.getDirector() + "#" + aFilm.getStars() + "#" + aFilm.getReview());

}
%>

