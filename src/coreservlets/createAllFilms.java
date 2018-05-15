package coreservlets;

import java.io.IOException;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import baseClasses.FilmDAO;


/** 
 * The public 'createAllFilms' servlet class sets up a HTTP route for sending a set of film objects into the Google Cloud
 * Data Store. The class calls the FilmDAO 'createAllFilms' method. The project's 'web.xml' file maps this servlet
 * to the '/createAllFilms' URL path.  
 * 
 * @author Adam Martin 11021206
 * @version 1.0
 */

public class createAllFilms extends HttpServlet {

	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
			
		// Calls the relevant FilmDAO method
		FilmDAO.createAllFilms(); 
	    
	}
	
	
}
