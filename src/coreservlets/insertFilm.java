package coreservlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import baseClasses.FilmDAO;


/** 
 * The public 'insertFilm' servlet class sets up a HTTP route for inserting a film record into the database, using doGet. 
 * The class calls the FilmDAO 'insertFilm' method, using doGet. The project's 'web.xml' file maps this servlet to the 
 * '/insertFilm' URL path. The class enables user-specified film attributes (id, name, year, director, stars, review) 
 * to be passed as parameters. 
 * The URL path is '/insertFilm?id=*ID_NUMBER*&name=*TITLE*&year=*YEAR*&director=*DIRECTOR*&stars=*STARS*&review=*REVIEW*'.  
 * 
 * @author Adam Martin 11021206
 * @version 1.0
 */

public class insertFilm extends HttpServlet {

	private static final long serialVersionUID = 1L;

	// Utilises doGet
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		// Creates a new film object to insert into the database
		int id = Integer.parseInt(request.getParameter("id"));
		String name = request.getParameter("name");
		int year = Integer.parseInt(request.getParameter("year"));
		String director = request.getParameter("director");
		String stars = request.getParameter("stars");
		String review = request.getParameter("review");

		// Tries to call the relevant DAO method, using the above-established parameters	
		FilmDAO.insertFilm(id, name, year, director, stars, review);
		
	}
	
}


		