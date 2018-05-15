package baseClasses;

import javax.jdo.JDOHelper;
import javax.jdo.PersistenceManagerFactory;


/**
 * The PMF (Persistence Manager Factory) public class is called by the FilmDAO class, which uses its Persistence Managers to 
 * manipulate records in the Google Cloud Data Store.
 * 
 * @author Adam Martin 11021206
 * @version 1.0
 * 
 */

public final class PMF {
	
	// Create a singleton PersistenceManager class.
	private static final PersistenceManagerFactory pmfInstance = JDOHelper
			.getPersistenceManagerFactory("transactions-optional");

		private PMF() {
		}

		public static PersistenceManagerFactory get() {
			return pmfInstance;
		}
}
