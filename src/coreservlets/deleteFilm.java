package coreservlets;

import java.io.IOException;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import baseClasses.FilmDAO;


/** 
 * The public 'deleteFilm' servlet class sets up a HTTP route for deleting a film record from the database, using doGet. 
 * The class calls the FilmDAO 'deleteFilm' method. The project's 'web.xml' file maps this servlet to the '/deleteFilm' 
 * URL path. The class enables a user-specified id number to be passed as a parameter, in order for a specific film record 
 * to be deleted. The URL path is '/deleteFilm?id=*ID_NUMBER*'.  
 * 
 * 
 * @author Adam Martin 11021206
 * @version 1.0
 */

public class deleteFilm extends HttpServlet {

	private static final long serialVersionUID = 1L;

	// Utilises doGet
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		
		// Links the passed id value to the 'id' URL parameter
		int id = Integer.parseInt(request.getParameter("id"));  // Tells the program which film number record to delete		
	    
		// Attempts the deletion
	    FilmDAO.deleteFilm(id);   
	    
	}
	
	
}

