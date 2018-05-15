package coreservlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import baseClasses.Film;
import baseClasses.FilmDAO;


/**
 * The public 'getFilm' servlet class sets up a HTTP route for getting a List of
 * films with a title that matches a given title input string, and displaying it
 * in a web browser, using doGet. The class calls the FilmDAO 'getFilm' method.
 * The project's 'web.xml' file maps this servlet to the '/getFilm' URL path.
 * The class enables 2 parameters to be passed, which consist of a 'film title/
 * name' string, and a format string (text, json or xml). Each format string
 * directs the user to 1 of 3 JSP output pages. The URL path is
 * '/getFilm?name=*TITLE*&format=*FORMAT*'.
 * 
 * @author Adam Martin 11021206
 * @version 1.0
 */

public class getFilm extends HttpServlet {

	private static final long serialVersionUID = 1L;

	// Utilises doGet
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// Links the passed film name value to the 'name' URL parameter
		String filmSearch = request.getParameter("name");
		List<Film> searchedFilms = null;

		// Tries to call the relevant DAO method
		searchedFilms = FilmDAO.getFilm(filmSearch);

		// Request the ArrayList of films
		request.setAttribute("films", searchedFilms);

		// Links the passed format value to the 'format' URL parameter
		String format = request.getParameter("format");
		String outputPage;

		
		// If 'xml' is passed as the format, direct user to XML JSP
		if ("xml".equals(format)) {
			response.setContentType("text/xml");
			outputPage = "/WEB-INF/viewers/films-xml.jsp";

		// If 'json' is passed as the format, direct user to JSON JSP
		} else if ("json".equals(format)) {
			response.setContentType("application/json");
			outputPage = "/WEB-INF/viewers/films-json.jsp";

		// If anything else if passed as the format (text), direct user to TEXT JSP
		} else {
			response.setContentType("text/plain");
			outputPage = "/WEB-INF/viewers/films-text.jsp";
		}

		RequestDispatcher dispatcher = // Where do you want to go? Let's go there with the request you have
				request.getRequestDispatcher(outputPage);
		dispatcher.forward(request, response);

	}

}