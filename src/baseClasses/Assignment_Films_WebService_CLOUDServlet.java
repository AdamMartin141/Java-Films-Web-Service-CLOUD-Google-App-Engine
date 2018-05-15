package baseClasses;

import java.io.IOException;
import javax.servlet.http.*;

@SuppressWarnings("serial")
public class Assignment_Films_WebService_CLOUDServlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		resp.setContentType("text/plain");
		resp.getWriter().println("Hello, world");
	}
}
