package baseClasses;

import java.io.Serializable;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;



/**
 * The Film public base class establishes the attributes of a Film (id, name, year, director, stars, review), and 
 * sets and gets its values. All of the attributes are of type String, apart from id (int) and year (int). The class
 * contains 2 constructors, a 'Java Bean', that uses getters and setters to get and set attributes, and a normal constructor,
 * which uses named attribute parameters. These constructors construct film objects for the database. 
 * 
 * @author Adam Martin 11021206
 * @version 1.0
 * 
 */

//Makes the class 'persistence capable' for the Google Cloud Data Store
@PersistenceCapable

//Sets each film record's XML root element for XML parsing
@XmlRootElement (name = "filmRecord")
@XmlAccessorType (XmlAccessType.FIELD)


public class Film implements Serializable {
	

	private static final long serialVersionUID = 1L;


	/** 
	 * The Film public constructor constructs a film object using named parameters (id, title, year, director, stars, review).
	 *  
	 * @param id, title, year, director, stars, review
	 * 
	 * @author Adam Martin
	 * @version 1.0
	 */
		
	public Film(long id, String name, int year, String director, String stars, String review) {
		
		super();
		this.id = id;
		this.name = name;
		this.year = year;
		this.director = director;
		this.stars = stars;
		this.review = review;
	}
	
       // Establishment of a primary key ('Long' used to avoid App Engine issues)
	   @PrimaryKey
	   @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)   
	   private Long id;
	   @Persistent
	   
	   // Makes the attributes 'persistent', for the Google Cloud Datastore
	   private String name;
	   @Persistent
	   private int year;
	   @Persistent
	   private String director;
	   @Persistent
	   private String stars;
	   @Persistent
	   private String review;
	  
	
	   
	// 'Setter and Getter' methods to get and return values

		
	/** 
	 * This employee 'getter' gets the film's id number. 
	 * 
	 * @return the film's id number
	 * 
	 * @author Adam Martin
	 * @version 1.0
	 */


	public Long getID() {
		return id;
	}

	
	/**
	 * This film 'setter' sets the film's id number number.
	 * 
	 * @param id
	 *  
	 * @author Adam Martin
	 * @version 1.0
	 */
	
	public void setID(Long id) {
		this.id = id;
	}

	
	/** 
	 * This film 'getter' gets the film's name/ title. 
	 * 
	 * @return the film's name/ title
	 * 
	 * @author Adam Martin
	 * @version 1.0
	 */
	
	public String getTitle() {
		return name;
	}

	
	/**
	 * This film 'setter' sets the film's name/ title.
	 * 
	 * @param name
	 *  
	 * @author Adam Martin
	 * @version 1.0
	 */
	
	public void setTitle(String name) {
		this.name = name;
	}

	
	/** 
	 * This film 'getter' gets the film's year. 
	 * 
	 * @return the film's year
	 * 
	 * @author Adam Martin
	 * @version 1.0
	 */
	
	public int getYear() {
		return year;
	}

	
	/**
	 * This film 'setter' sets the film's year.
	 * 
	 * @param year
	 *  
	 * @author Adam Martin
	 * @version 1.0
	 */
	
	public void setYear(int year) {
		this.year = year;
	}

	
	/** 
	 * This film 'getter' gets the film's director. 
	 * 
	 * @return the film's year
	 * 
	 * @author Adam Martin
	 * @version 1.0
	 */
	
	public String getDirector() {
		return director;
	}

	
	/**
	 * This film 'setter' sets the film's director.
	 * 
	 * @param director
	 *  
	 * @author Adam Martin
	 * @version 1.0
	 */
	
	public void setDirector(String director) {
		this.director = director;
	}

	
	/** 
	 * This film 'getter' gets the film's stars. 
	 * 
	 * @return the film's stars
	 * 
	 * @author Adam Martin
	 * @version 1.0
	 */
	
	public String getStars() {
		return stars;
	}

	
	/**
	 * This film 'setter' sets the film's stars.
	 * 
	 * @param stars
	 *  
	 * @author Adam Martin
	 * @version 1.0
	 */
	
	public void setStars(String stars) {
		this.stars = stars;
	}

	
	/** 
	 * This film 'getter' gets the film's review. 
	 * 
	 * @return the film's review
	 * 
	 * @author Adam Martin
	 * @version 1.0
	 */
	
	public String getReview() {
		return review;
	}

	
	/**
	 * This film 'setter' sets the film's review.
	 * 
	 * @param stars
	 *  
	 * @author Adam Martin
	 * @version 1.0
	 */
	
	public void setReview(String review) {
		this.review = review;
	}
	
	
	
	/** 
	 * This toString() method puts all of the 'Film' attributes in a string, to avoid the Film being outputted
	 * as byte code.
	 * 
	 * @author Adam Martin
	 * @version 1.0 
	 * 
	 */
	
	@Override
	public String toString() {
		
	    return "Film [id=" + id + ", name=" + name + ", year=" + year + ", director=" + director + ", stars=" + stars + ", review=" + review + "]"; 	
	}
		
}