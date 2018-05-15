// Function for mapping the HTML buttons (in index.html) to this file's JS functions
$(function() {
	
	// createAllFilms function and its assigned HTML button
	$("#createAllFilms-button").click(createAllFilms);
	
	// getAllFilms functions and their assigned HTML buttons
	$("#getAllFilms-text-button").click(getAllFilmsTEXT);
	$("#getAllFilms-json-button").click(getAllFilmsJSON);
	$("#getAllFilms-xml-button").click(getAllFilmsXML);
	

	// getFilm by name functions and their assigned HTML buttons
	$("#getFilm-text-button").click(getFilmTEXT); // INVOKES RIGHT JS METHOD ON BUTTON WITH LEFT HTML ID
	$("#getFilm-json-button").click(getFilmJSON); // INVOKES RIGHT JS METHOD ON BUTTON WITH LEFT HTML ID
	$("#getFilm-xml-button").click(getFilmXML); // INVOKES RIGHT JS METHOD ON BUTTON WITH LEFT HTML ID
		
	
	// getFilm by 'The Shawshank Redemption' title functions and their assigned HTML buttons
	$("#getJurassic-text-button").click(getJurassicTEXT);
	$("#getJurassic-json-button").click(getJurassicJSON);
	$("#getJurassic-xml-button").click(getJurassicXML);
		
	
	// deleteFilm and insertFilm functions and their assigned HTML buttons
	$("#delete-film-button").click(deleteFilmAJAX);	
	$("#insertFilm-button").click(insertFilmAJAX);
		
});





//Function that calls the createAllFilms servlet to persist the cloud database with data, and displays a message to the user
function createAllFilms() {
				
		// Makes a data request to the 'createAllFilms' servlet
		$.ajax({
			url: "createAllFilms",
			type: "GET",
			
		});
		
		
	$("#createAllFilms-msg").html("The 'Films' Google Cloud Database has been filled with data records.")
		
	
			
	// jQuery UI effect - confirmation message slides in from the left 
	$('#createAllFilms-msg').effect("slide", "right");		
	
	console.log("'Films' Google Cloud Database filled with data records")


}





// Function that retrieves all film objects from the database in TEXT format, and posts them to index.html in a readable format
function getAllFilmsTEXT() {
	
	// Creates variables for the method	
	var title;
	var filmRecordText;
	var filmAttribute;
	var numberOfFilmAttributes;
	var filmsTableHeadings = "";
	var filmsTable = "";
	

	// Makes a data request to the 'getAllFilms' servlet
	$.ajax({
		url: "getAllFilms",
		type: "GET",
		data: "format=" + "text",
		dataType: "text",

		
		complete: function(responseBody) {
			
			// Assigns the retrieved film records (responseBody) to a JS variable
			filmRecordText = responseBody.responseText;

			// Splits the film records into their individual attributes (id, title, year, director, stars, review) on the double space
			// in between each attribute in films-string.jsp
			filmAttribute = filmRecordText.split("#");
			
			// Puts the number of attributes contained within the film record(s) found into a 'numberOfFilmAttributes JS variable 
			numberOfFilmAttributes = parseInt(filmAttribute.length);
			
			// If no films are found, amend the numberOfFilmAttributes to 0, its true value
			if (numberOfFilmAttributes == 1) {
				numberOfFilmAttributes = numberOfFilmAttributes -1;
				
			}
			
			// If a single film is found, amend the numberOfFilmAttributes to 6, its true value
			if (numberOfFilmAttributes == 7) {
				numberOfFilmAttributes = numberOfFilmAttributes -1;
				
			}

				
			// Prints the number of attributes found and the content of the film record found to the console for debugging
			console.log("Number of film attributes found: " + numberOfFilmAttributes);
			console.log("Contents of text film record(s) found:")
			console.log(filmRecordText);
			
			
			// BELOW CODE CHECKS THE SEARCH QUERY
			
			// If at least 1 film record is found....
			if (numberOfFilmAttributes >= 1) {

				// Displays a message in the specified HTML element to inform the user
				$("#get-All-Films-text-msg").html("The following Film record(s) have been found in the 'Films' database, and converted " +
						"from TEXT format" + ":");

				// Empties any previous results from the results div
				$('#get-All-Films-text-Div').empty();

				
				// BELOW CODE PLACES DATA INTO A HTML TABLE
				

					// Creates a table row containing table headings
					filmsTableHeadings +=
					
					"<table>" +

					"<tr>" + 
					"<th>ID</th>" + 
					"<th>Title</th>" + 
					"<th>Year</th>" + 
					"<th>Director</th>" + 
					"<th>Stars</th>" + 
					"<th>Review</th>" + 
					"</tr>" +  
					
					"</table"

					// Puts the array of attributes in a for loop, which churns through them, and puts them in a HTML table in the browser
					for (i = 1; i < filmAttribute.length; i++) {
						
					filmsTable+=
					
					("<table>" +
						
					"<tr>" + 
					
					"<td>" + filmAttribute[i] + "</td>" + 
					"<td>" + filmAttribute[i = i + 1] + "</td>" + 
					"<td>" + filmAttribute[i = i + 1] + "</td>" + 
					"<td>" + filmAttribute[i = i + 1] + "</td>" + 
					"<td>" + filmAttribute[i = i + 1] + "</td>" + 
					"<td>" + filmAttribute[i = i + 1] + "</td>" +
					"</tr>" +

					"</table");
					
				}
				
				// Places the headings and results table in the HTML div
				$('#get-All-Films-text-Div').html(filmsTableHeadings+filmsTable);
				
				// jQuery UI effect - film table div slides in from the left 
				$('#get-All-Films-text-Div').effect("slide", "right");
				
				// Confirms successful browser data formatting in the console, for debugging
				console.log("Text Film record(s) successfully sent to the browser in a readable format");
				
			}

			// If no film records are found...
			if (numberOfFilmAttributes == 0) {
				
				// Print an error message to the HTML page, and empty any previous results from the results div
				$("#get-All-Films-text-msg").html("Sorry, no films found in the database");
				$('#get-All-Films-text-Div').empty();

			}
		}
	});
}





// Function that retrieves all film objects from the database in JSON format, and posts them to index.html in a readable format
function getAllFilmsJSON() {
	
	// Creates variables for the method
	var filmRecordJSON;
	var numberOfFilms;
	var filmsTableHeadings = "";
	var filmsTable = "";	
	
	// Makes a data request to the 'getAllFilms' servlet
	$.ajax({
		url: "getAllFilms",
		type: "GET",
		data: "format=" + "json",
		dataType: "json",
		
		
		complete: function(responseBody) {
								
		// Assigns the retrieved film records (responseBody) to a JS variable
		filmRecordJSON = responseBody.responseJSON;
		
		// Prints the number of film records found to the console for debugging
		numberOfFilms = filmRecordJSON.length;
		console.log("Number of JSON film records found: " + numberOfFilms);
		
		
		// BELOW CODE CHECKS THE SEARCH QUERY
		
		// If the film record is found....
		if (numberOfFilms >= 1) {

			// Displays a message in the specified HTML element to inform the user
			$("#get-All-Films-json-msg").html("The following Film record(s) have been found in the 'Films' database, and converted " +
					"from JSON format" + ":");

			// Empties any previous results from the results div
			$('#get-All-Films-json-Div').empty();
			
			
			// BELOW CODE PLACES DATA INTO A HTML TABLE
			
			
			// Creates a table row containing table headings
			filmsTableHeadings +=
			
			"<table>" +

			"<tr>" + 
			"<th>ID</th>" + 
			"<th>Title</th>" + 
			"<th>Year</th>" + 
			"<th>Director</th>" + 
			"<th>Stars</th>" + 
			"<th>Review</th>" + 
			"</tr>" +  
			
			"</table"
			
			// Puts the array of attributes in a for loop, which churns through them, and puts them in a HTML table in the browser
			for(i=0; i < filmRecordJSON.length; i++) {  
				console.log("Content of JSON film record(s) found:");
				console.log(filmRecordJSON[i]);
				
				filmsTable +=
				
				("<table>" +
					
				"<tr>" + 
				"<td>" + filmRecordJSON[i].id + "</td>" + 
				"<td>" + filmRecordJSON[i].name + "</td>" + 
				"<td>" + filmRecordJSON[i].year + "</td>" + 
				"<td>" + filmRecordJSON[i].director + "</td>" + 
				"<td>" + filmRecordJSON[i].stars + "</td>" + 
				"<td>" + filmRecordJSON[i].review + "</td>" + 
				"</tr>" +

				"</table");
				
			}
			
			// Places the headings and results table in the HTML div
			$('#get-All-Films-json-Div').html(filmsTableHeadings+filmsTable);
			
			// jQuery UI effect - film table div slides in from the left 
			$('#get-All-Films-json-Div').effect("slide", "right");
			
			// Confirms successful browser data formatting in the console, for debugging
			console.log("JSON Film record(s) successfully sent to the browser in a readable format");
		
		}
		
		// If the film record is not found...
		if (numberOfFilms == 0) {

			// Print an error message to the HTML page, and empty any previous results from the results div
			$("#get-All-Films-json-msg").html("Sorry, no films found in the database");
			$('#get-All-Films-json-Div').empty();

		}
	}
});
}





// Function that retrieves all film objects from the database in XML format, and posts them to index.html in a readable format
function getAllFilmsXML() {
	
	// Creates variables for the method
	var title;
	var filmRecordXML;	
	var numberOfFilms;
	var filmsTableHeadings = "";
	var filmsTable = "";	

	// Makes a data request to the 'getAllFilms' servlet
	$.ajax({
		url: "getAllFilms",
		type: "GET",
		data: "format=" + "xml",
		dataType: "xml",
		
		
		complete: function(responseBody) {
			
		// Assigns the raw XML film data to a JS variable	
		filmRecordXML = responseBody.responseXML; 
		
		// Assigns the number of XML film records found to a JS variable
		numberOfFilms = $(filmRecordXML).find("filmRecord").length; 
		
		// Prints the number of XML film records found, and the content of the record, to the console for debugging
		console.log("Number of XML film records found: " + numberOfFilms); 
		console.log("Contents of XML film record(s) found:")
		console.log(filmRecordXML);

					
		// BELOW CODE CHECKS THE SEARCH QUERY
			
		// If at least 1 film record is found....
		if (numberOfFilms >= 1) {

		// Displays a message in the specified HTML element to inform the user
		$("#get-All-Films-xml-msg").html("The following Film record(s) have been found in the 'Films' database, and converted " +
				"from XML format" + ":");

		// Empties any previous results from the results div
		$('#get-All-Films-xml-Div').empty();
				
				
		// BELOW CODE PLACES DATA INTO A HTML TABLE
				
					 
		    // Creates a table row containing table headings
			filmsTableHeadings +=
						
			"<table>" +

			"<tr>" + 
			"<th>ID</th>" + 
			"<th>Title</th>" + 
			"<th>Year</th>" + 
			"<th>Director</th>" + 
			"<th>Stars</th>" + 
			"<th>Review</th>" + 
			"</tr>" +
			
			"</table"

            // Places the XML film attributes into an HTML table
			if ($(filmRecordXML).find("filmRecord").length > 0) {
				 
				$(filmRecordXML).find("filmRecord").each(function() {
			
			filmsTable+=
			
			("<table>" +

			"<tr>" +
			"<td>" + $(this).find("id").text() + "</td>" +
			"<td>" + $(this).find("name").text() + "</td>" +
			"<td>" + $(this).find("year").text() + "</td>" + 
			"<td>" + $(this).find("director").text() + "</td>" +
			"<td>" + $(this).find("stars").text() + "</td>" +
			"<td>" + $(this).find("review").text() + "</td>" +
			"</tr>" +
				        
			"</table" );
																		
		})
				 
		// Places the headings and results table in the HTML div
		$('#get-All-Films-xml-Div').html(filmsTableHeadings+filmsTable);
			
		// jQuery UI effect - film table div slides in from the left 
		$('#get-All-Films-xml-Div').effect("slide", "right");
					
		// Confirms successful browser data formatting in the console, for debugging
		console.log("XML Film record(s) successfully sent to the browser in a readable format");
				
		}
	}
	
	// If the film record is not found...
	if (numberOfFilms == 0) {

		// Print an error message to the HTML page, and empty any previous results from the results div
		$("#gget-All-Films-xml-msg").html("Sorry, no films found in the database");
		$('#get-All-Films-xml-Div').empty();

	}
}
});
}





// Function that retrieves a film object from the database in text format, and posts it to index.html in a readable format
function getFilmTEXT() {
	
	// Creates variables for the method	
	var title;
	var filmRecordText;
	var filmAttribute;
	var numberOfFilmAttributes;
	var filmsTableHeadings = "";
	var filmsTable = "";	

	// Gets the typed film title from the HTML input box, and places it in a JS variable
	title = $("#getFilm-text-query").val();

	// Makes a data request to the 'getFilm' servlet
	$.ajax({
		url: "getFilm",
		type: "GET",
		data: "name=" + title + "&format=" + "text",
		dataType: "text",

		
		complete: function(responseBody) {
			
			// Assigns the retrieved film records (responseBody) to a JS variable
			filmRecordText = responseBody.responseText;

			// Splits the film records into their individual attributes (id, title, year, director, stars, review) on the double space
			// in between each attribute in films-string.jsp
			filmAttribute = filmRecordText.split("#");
			
			// Puts the number of attributes contained within the film record(s) found into a 'numberOfFilmAttributes JS variable 
			numberOfFilmAttributes = parseInt(filmAttribute.length);
			
			// If no films are found, amend the numberOfFilmAttributes to 0, its true value
			if (numberOfFilmAttributes == 1) {
				numberOfFilmAttributes = numberOfFilmAttributes -1;
				
			}
			
			// If a single film is found, amend the numberOfFilmAttributes to 6, its true value
			if (numberOfFilmAttributes == 7) {
				numberOfFilmAttributes = numberOfFilmAttributes -1;
				
			}

				
			// Prints the number of attributes found and the content of the film record found to the console for debugging
			console.log("Number of film attributes found: " + numberOfFilmAttributes);
			console.log("Contents of text film record(s) found:")
			console.log(filmRecordText);
			
			
			// BELOW CODE CHECKS THE SEARCH QUERY
			
			// If at least 1 film record is found....
			if (numberOfFilmAttributes >= 1) {

				// Displays a message in the specified HTML element to inform the user
				$("#get-Film-Text-msg").html("Film record(s) found with the title " + "'" + title + "'" + ":");

				// Empties any previous results from the results div
				$('#get-Film-Text-Div').empty();

				
				// BELOW CODE PLACES DATA INTO A HTML TABLE
				
				// Creates a table row containing table headings
				filmsTableHeadings +=
				
				"<table>" +

				"<tr>" + 
				"<th>ID</th>" + 
				"<th>Title</th>" + 
				"<th>Year</th>" + 
				"<th>Director</th>" + 
				"<th>Stars</th>" + 
				"<th>Review</th>" + 
				"</tr>" +  
				
				"</table"

				// Puts the array of attributes in a for loop, which churns through them, and puts them in a HTML table in the browser
				for (i = 1; i < filmAttribute.length; i++) {
					
				filmsTable+=
				
				("<table>" +
					
				"<tr>" + 
				
				"<td>" + filmAttribute[i] + "</td>" + 
				"<td>" + filmAttribute[i = i + 1] + "</td>" + 
				"<td>" + filmAttribute[i = i + 1] + "</td>" + 
				"<td>" + filmAttribute[i = i + 1] + "</td>" + 
				"<td>" + filmAttribute[i = i + 1] + "</td>" + 
				"<td>" + filmAttribute[i = i + 1] + "</td>" +
				"</tr>" +

				"</table");
				
			}
				
				// Places the headings and results table in the HTML div
				$('#get-Film-Text-Div').html(filmsTableHeadings+filmsTable);
				
				// jQuery UI effect - film table div slides in from the left 
				$('#get-Film-Text-Div').effect("slide", "right");
				
				// Confirms successful browser data formatting in the console, for debugging
				console.log("Text Film record(s) successfully sent to the browser in a readable format");
				
			}

			// If no film records are found...
			if (numberOfFilmAttributes == 0) {
				
				// Print an error message to the HTML page, and empty any previous results from the results div
				$("#get-Film-Text-msg").html("Sorry, no films found with the title " + "'" + title + "'");
				$('#get-Film-Text-Div').empty();

			}
		}
	});
}





//Function that retrieves a film object from the database in JSON format, and posts it to index.html in a readable format
function getFilmJSON() {
	
	// Creates variables for the method
	var title;
	var filmRecordJSON;
	var numberOfFilms;
	var filmsTableHeadings = "";
	var filmsTable = "";	
	
	// Gets the typed film title from the HTML input box, and places it in a JS variable
	title = $("#getFilm-json-query").val();

	// Makes a data request to the 'getFilm' servlet
	$.ajax({
		url: "getFilm",
		type: "GET",
		data: "name=" + title + "&format=" + "json",
		dataType: "json",
		
		
		complete: function(responseBody) {
								
		// Assigns the retrieved film records (responseBody) to a JS variable
		filmRecordJSON = responseBody.responseJSON;
		
		// Prints the number of film records found to the console for debugging
		numberOfFilms = filmRecordJSON.length;
		console.log("Number of JSON film records found: " + numberOfFilms);
		
		
		// BELOW CODE CHECKS THE SEARCH QUERY
		
		// If at least 1 film record is found....
		if (numberOfFilms >= 1) {

			// Displays a message in the specified HTML element to inform the user
			$("#get-Film-json-msg").html("Film record(s) found with the title " + "'" + title + "'" + ":");

			// Empties any previous results from the results div
			$('#get-Film-json-Div').empty();
			
			
			// BELOW CODE PLACES DATA INTO A HTML TABLE
			
			// Creates a table row containing table headings
			filmsTableHeadings +=
			
			"<table>" +

			"<tr>" + 
			"<th>ID</th>" + 
			"<th>Title</th>" + 
			"<th>Year</th>" + 
			"<th>Director</th>" + 
			"<th>Stars</th>" + 
			"<th>Review</th>" + 
			"</tr>" +  
			
			"</table"
			
			// Puts the array of attributes in a for loop, which churns through them, and puts them in a HTML table in the browser
			for(i=0; i < filmRecordJSON.length; i++) {  
				console.log("Content of JSON film record(s) found:");
				console.log(filmRecordJSON[i]);
				
				filmsTable +=
				
				("<table>" +
					
				"<tr>" + 
				"<td>" + filmRecordJSON[i].id + "</td>" + 
				"<td>" + filmRecordJSON[i].name + "</td>" + 
				"<td>" + filmRecordJSON[i].year + "</td>" + 
				"<td>" + filmRecordJSON[i].director + "</td>" + 
				"<td>" + filmRecordJSON[i].stars + "</td>" + 
				"<td>" + filmRecordJSON[i].review + "</td>" + 
				"</tr>" +

				"</table");
				
			}
			
			// Places the headings and results table in the HTML div
			$('#get-Film-json-Div').html(filmsTableHeadings+filmsTable);
			
			// jQuery UI effect - film table div slides in from the left 
			$('#get-Film-json-Div').effect("slide", "right");
			
			// Confirms successful browser data formatting in the console, for debugging
			console.log("JSON Film record(s) successfully sent to the browser in a readable format");
		
		}
		
		// If no film records are found...
		if (numberOfFilms == 0) {

			// Print an error message to the HTML page, and empty any previous results from the results div
			$("#get-Film-json-msg").html("Sorry, no films found with the title " + "'" + title + "'");
			$('#get-Film-json-Div').empty();

		}
	}
});
}

		


//Function that retrieves a film object from the database in XML format, and posts it to index.html in a readable format		
function getFilmXML() {
	
	// Creates variables for the method
	var title;
	var filmRecordXML;	
	var numberOfFilms;
	var filmsTableHeadings = "";
	var filmsTable = "";


	// Gets the typed film title from the HTML input box, and places it in a JS variable
	title = $("#getFilm-xml-query").val();

	// Makes a data request to the 'getFilm' servlet
	$.ajax({
		url: "getFilm",
		type: "GET",
		data: "name=" + title + "&format=" + "xml",
		dataType: "xml",
		
		
		complete: function(responseBody) {
			
		// Assigns the raw XML film data to a JS variable	
		filmRecordXML = responseBody.responseXML; 
		
		// Assigns the number of XML film records found to a JS variable
		numberOfFilms = $(filmRecordXML).find("filmRecord").length; 
		
		// Prints the number of XML film records found, and the content of the record, to the console for debugging
		console.log("Number of XML film records found: " + numberOfFilms); 
		console.log("Contents of XML film record(s) found:")
		console.log(filmRecordXML);

					
		// BELOW CODE CHECKS THE SEARCH QUERY
			
		// If at least 1 film record is found....
		if (numberOfFilms >= 1) {

		// Displays a message in the specified HTML element to inform the user
		$("#get-Film-xml-msg").html("Film record(s) found with the title " + "'" + title + "'" + ":");

		// Empties any previous results from the results div
		$('#get-Film-xml-Div').empty();
				
				
		// BELOW CODE PLACES DATA INTO A HTML TABLE
				
		// Creates a table row containing table headings
		filmsTableHeadings +=
					
		"<table>" +

		"<tr>" + 
		"<th>ID</th>" + 
		"<th>Title</th>" + 
		"<th>Year</th>" + 
		"<th>Director</th>" + 
		"<th>Stars</th>" + 
		"<th>Review</th>" + 
		"</tr>" +
		
		"</table"

        // Places the XML film attributes into an HTML table
		if ($(filmRecordXML).find("filmRecord").length > 0) {
			 
			$(filmRecordXML).find("filmRecord").each(function() {
		
		filmsTable+=
		
		("<table>" +

		"<tr>" +
		"<td>" + $(this).find("id").text() + "</td>" +
		"<td>" + $(this).find("name").text() + "</td>" +
		"<td>" + $(this).find("year").text() + "</td>" + 
		"<td>" + $(this).find("director").text() + "</td>" +
		"<td>" + $(this).find("stars").text() + "</td>" +
		"<td>" + $(this).find("review").text() + "</td>" +
		"</tr>" +
			        
		"</table" );
																	
	})
				 
		// Places the headings and results table in the HTML div
		$('#get-Film-xml-Div').html(filmsTableHeadings+filmsTable);
			
		// jQuery UI effect - film table div slides in from the left 
		$('#get-Film-xml-Div').effect("slide", "right");
					
		// Confirms successful browser data formatting in the console, for debugging
		console.log("XML Film record(s) successfully sent to the browser in a readable format");
				
		}
	}
	
	// If the film record is not found...
	if (numberOfFilms == 0) {

		// Print an error message to the HTML page, and empty any previous results from the results div
		$("#get-Film-xml-msg").html("Sorry, no films found with the title " + "'" + title + "'");
		$('#get-Film-xml-Div').empty();

	}
}
});
}




//Function that retrieves 'Jurassic Park' object from the database in text format, and posts it to index.html in a readable format
function getJurassicTEXT() {
	
	// Creates variables for the method	
	var filmRecordText;
	var filmAttribute;
	var numberOfFilmAttributes;
	var filmsTable;
	

	// Makes a data request to the 'getFilm' servlet
	$.ajax({
		url: "getFilm",
		type: "GET",
		data: "name=" + "Jurassic+Park" + "&format=" + "text",
		dataType: "text",

		
		complete: function(responseBody) {
			
			// Assigns the retrieved film record (responseBody) to a JS variable
			filmRecordText = responseBody.responseText;

			// Splits the film record into its 6 individual attributes (id, title, year, director, stars, review) on the double space
			// in between each attribute in films-string.jsp
			filmAttribute = filmRecordText.split("#");

			// Puts the number of films found into a variable
			numberOfFilmAttributes = parseInt(filmAttribute.length);
			
			// If the film is found, amend the numberOfFilmAttributes to 6, its true value
			if (numberOfFilmAttributes == 7) {
				numberOfFilmAttributes = numberOfFilmAttributes -1;
				
			} 
			
			
			// Prints the number of attributes found and the content of the film record found to the console for debugging
			console.log("Number of film attributes found: " + numberOfFilmAttributes);
			console.log("Content of text film record found:")
			console.log(filmRecordText);
			
			
			// BELOW CODE CHECKS THE SEARCH QUERY
			
			// If the film record is found....
			if (numberOfFilmAttributes == 6) {

				// Displays a message in the specified HTML element to inform the user
				$("#get-jurassic-text-msg").html("Film record, 'Jurassic Park' has been found" + ":");

				// Empties any previous results from the results div
				$('#get-jurassic-text-div').empty();

				
				// BELOW CODE PLACES DATA INTO A HTML TABLE
				
				// Puts the array of attributes in a for loop, which churns through them, and puts them in a HTML table in the browser
				for (i = 0; i < filmAttribute.length; i = 7) {

					// Creates an empty HTML table to hold the data	
					filmsTable =
					
					("<table>" +

					"<tr>" + 
					"<th>ID</th>" + 
					"<th>Title</th>" + 
					"<th>Year</th>" + 
					"<th>Director</th>" + 
					"<th>Stars</th>" + 
					"<th>Review</th>" + 
					"</tr>" +

					// Pushes the looping film attributes into the above-created HTML table
					"<tr>" + 
					
					"<td>" + filmAttribute[i = i + 1] + "</td>" + 
					"<td>" + filmAttribute[i = i + 1] + "</td>" + 
					"<td>" + filmAttribute[i = i + 1] + "</td>" + 
					"<td>" + filmAttribute[i = i + 1] + "</td>" + 
					"<td>" + filmAttribute[i = i + 1] + "</td>" + 
					"<td>" + filmAttribute[i = i + 1] + "</td>" + 
					"</tr>" +

					"</table");
					
				}
				
				// Places the results table in the HTML div
				$('#get-jurassic-text-div').html(filmsTable);
				
				// jQuery UI effect - film table div slides in from the left 
				$('#get-jurassic-text-div').effect("slide", "right");
				
				// Confirms successful browser data formatting in the console, for debugging
				console.log("'Jurassic Park' Text Film record successfully sent to the browser in a readable format");
				
			}

			// If the film record is not found...
			if (numberOfFilmAttributes == 1) {

				// Print an error message to the HTML page, and empty any previous results from the results div
				$("#get-jurassic-text-msg").html("Sorry, 'Jurassic Park' has not been found");
				$('#get-jurassic-text-div').empty();

			}
		}
	});
}
	



//Function that retrieves 'Jurassic Park' film object from the database in JSON format, and posts it to index.html in a readable format
function getJurassicJSON() {
	
	// Creates variables for the method
	var filmRecordJSON;
	var numberOfFilms;
	var filmsTable;
	
	
	// Makes a data request to the 'getFilm' servlet
	$.ajax({
		url: "getFilm",
		type: "GET",
		data: "name=" + "Jurassic+Park" + "&format=" + "json",
		dataType: "json",
		
		
		complete: function(responseBody) {
								
		// Assigns the retrieved film record (responseBody) to a JS variable
		filmRecordJSON = responseBody.responseJSON;
		
		// Prints the number of film records found to the console for debugging
		numberOfFilms = filmRecordJSON.length;
		console.log("Number of JSON film records found: " + numberOfFilms);
		
		
		// BELOW CODE CHECKS THE SEARCH QUERY
		
		// If the film record is found....
		if (numberOfFilms == 1) {

			// Displays a message in the specified HTML element to inform the user
			$("#get-jurassic-json-msg").html("Film record, 'Jurassic Park' has been found" + ":");

			// Empties any previous results from the results div
			$('#get-jurassic-json-div').empty();
			
			
			// BELOW CODE PLACES DATA INTO A HTML TABLE
			
			for(i=0; i < filmRecordJSON.length; i++) {  
				console.log("Content of JSON film record found:");
				console.log(filmRecordJSON[i]);
				
				// Creates an empty HTML table to hold the data	
				filmsTable =
				
				("<table>" +

				"<tr>" + 
				"<th>ID</th>" + 
				"<th>Title</th>" + 
				"<th>Year</th>" + 
				"<th>Director</th>" + 
				"<th>Stars</th>" + 
				"<th>Review</th>" + 
				"</tr>" +
				
				// Pushes the looping film attributes into the above-created HTML table
				"<tr>" + 
				"<td>" + filmRecordJSON[i].id + "</td>" + 
				"<td>" + filmRecordJSON[i].name + "</td>" + 
				"<td>" + filmRecordJSON[i].year + "</td>" + 
				"<td>" + filmRecordJSON[i].director + "</td>" + 
				"<td>" + filmRecordJSON[i].stars + "</td>" + 
				"<td>" + filmRecordJSON[i].review + "</td>" + 
				"</tr>" +

				"</table");
				
			}
			
			// Places the results table in the HTML div
			$('#get-jurassic-json-div').html(filmsTable);
			
			// jQuery UI effect - film table div slides in from the left 
			$('#get-jurassic-json-div').effect("slide", "right");
			
			// Confirms successful browser data formatting in the console, for debugging
			console.log("'Jurassic Park' JSON Film record successfully sent to the browser in a readable format");
		
		}
		
		// If the film record is not found...
		if (numberOfFilms == 0) {

			// Print an error message to the HTML page, and empty any previous results from the results div
			$("#get-jurassic-json-msg").html("Sorry, 'Jurassic Park' has not been found");
			$('#get-jurassic-json-div').empty();

		}
	}
});
}





//Function that retrieves 'Jurassic Park' film object from the database in XML format, and posts it to index.html in a readable format		
function getJurassicXML() {
	
	// Creates variables for the method
	var filmRecordXML;	
	var numberOfFilms;
	var filmsTable;


	// Makes a data request to the 'getFilm' servlet
	$.ajax({
		url: "getFilm",
		type: "GET",
		data: "name=" + "Jurassic+Park" + "&format=" + "xml",
		dataType: "xml",
		
		
		complete: function(responseBody) {
			
		// Assigns the raw XML film data to a JS variable	
		filmRecordXML = responseBody.responseXML; 
		
		// Assigns the number of XML film records found to a JS variable
		numberOfFilms = $(filmRecordXML).find("filmRecord").length; 
		
		// Prints the number of XML film records found, and the content of the record, to the console for debugging
		console.log("Number of XML film records found: " + numberOfFilms); 
		console.log("Content of XML film record found:")
		console.log(filmRecordXML);

					
		// BELOW CODE CHECKS THE SEARCH QUERY
			
		// If the film record is found....
		if (numberOfFilms == 1) {

		// Displays a message in the specified HTML element to inform the user
		$("#get-jurassic-xml-msg").html("Film record, 'Jurassic Park' has been found");

		// Empties any previous results from the results div
		$('#get-jurassic-xml-div').empty();
				
				
		// BELOW CODE PLACES DATA INTO A HTML TABLE
				
		if ($(filmRecordXML).find("filmRecord").length > 0) {
					 
			$(filmRecordXML).find("filmRecord").each(function() {
					 
			// Creates an empty HTML table to hold the data	
			filmsTable =
						
			("<table>" +

			"<tr>" + 
			"<th>ID</th>" + 
			"<th>Title</th>" + 
			"<th>Year</th>" + 
			"<th>Director</th>" + 
			"<th>Stars</th>" + 
			"<th>Review</th>" + 
			"</tr>" +
						
			"<tr>" +
			"<td>" + $(this).find("id").text() + "</td>" +
			"<td>" + $(this).find("name").text() + "</td>" +
			"<td>" + $(this).find("year").text() + "</td>" + 
			"<td>" + $(this).find("director").text() + "</td>" +
			"<td>" + $(this).find("stars").text() + "</td>" +
			"<td>" + $(this).find("review").text() + "</td>" +
			"</tr>" +
				        
			"</table" );
																		
		})
				 
		// Places the results table in the HTML div
		$('#get-jurassic-xml-div').html(filmsTable);
			
		// jQuery UI effect - film table div slides in from the left 
		$('#get-jurassic-xml-div').effect("slide", "right");
					
		// Confirms successful browser data formatting in the console, for debugging
		console.log("'Jurassic Park' XML Film record successfully sent to the browser in a readable format");
				
		}
	}
	
	// If the film record is not found...
	if (numberOfFilms == 0) {

		// Print an error message to the HTML page, and empty any previous results from the results div
		$("#get-jurassic-xml-msg").html("Sorry, 'Jurassic Park' has not been found");
		$('#get-jurassic-xml-div').empty();

	}
}
});
}





// Function that deletes a film record and displays confirmation in the browser, without it refreshing or redirecting
function deleteFilmAJAX() {
	
	// Gets the typed film title from the HTML input box, and places it in a JS variable
	filmID = $("#deleteFilm-query").val();

		
	// Makes a data request to the 'deleteFilm' servlet
	$.ajax({
		url: "deleteFilm",
		type: "GET",
		data: "id=" + filmID,
		dataType: "text",
		
	});
	
	
	if (filmID.length = 5) {
		
		// Displays a confirmation message in the specified HTML element to inform the user of the deletion
		$("#delete-film-msg").html("Film record " + filmID + " has been deleted, if it exists in the database");
		
		// jQuery UI effect - confirmation message slides in from the left 
		$('#delete-film-msg').effect("slide", "right");
		
		console.log("Film record with specified ID has been deleted, if it exists");
		
	} 
	
	
	if (filmID == "") {
		
		$("#delete-film-msg").html("Film ID field empty. Please enter the Film ID of the record you would like to delete");
		
	}
	
	
	if (filmID.length < 5 && filmID.length >= 1) {
		
		$("#delete-film-msg").html("Please enter a valid Film ID. Film IDs contain 5 number characters (e.g. 10502)");

	}
	
	
	if (filmID.length > 5) {
		
		$("#delete-film-msg").html("Please enter a valid Film ID. Film IDs contain 5 number characters (e.g. 10502)");

	}	
	
}





function insertFilmAJAX() {
	
	// Gets the typed film attributes from the HTML input box, and places them in JS variables
	filmID = $("#insertIDText").val();
	title = $("#insertTitleText").val();
	year = $("#insertYearText").val();
	director = $("#insertDirectorText").val();
	stars = $("#insertStarsText").val();
	review = $("#insertReviewText").val();

	
	// Inserts the film if none of the data entry fields are empty/ 'null'
	if (filmID && title && year && director && stars && review != null) {
		
		// Makes a data request to the 'insertFilm' servlet
		$.ajax({
			url: "insertFilm",
			type: "GET",
			
			data: "id=" + filmID + "&name=" + title + "&year=" + year + "&director=" + director + 
			"&stars=" + stars + "&review=" + review,
			
			dataType: "text",
			
		});
		
	//$("#insert-film-text-message").html("Film Record," + " " + "'" + title + "'" + " " + "successfully added to the database");
	$("#insert-film-text-msg").html("The Following Film Record has been Added to the Database: " +
			"<ul>" +
			"<li>" + "ID:" + " " + filmID + "</li>" + 
			"<li>" + "Title:" + " " + title + "</li>" + 
			"<li>" + "Year:" + " " + year + "</li>" + 
			"<li>" + "Director:" + " " + director + "</li>" + 
			"<li>" + "Stars:" + " " + stars + "</li>" + 
			"<li>" + "Review:" + " " + review + "</li>" + 
			"</ul")
	
			
	// jQuery UI effect - confirmation message slides in from the left 
	$('#insert-film-text-msg').effect("slide", "right");		
	
	console.log("Film record successfully inserted")

	}
	
	
	else if (filmID || title || year || director || stars || review == null) {
		
	$("#insert-film-text-msg").html("Sorry, film not added. Ensure that all fields are filled in.");
	
	}

}

		
				