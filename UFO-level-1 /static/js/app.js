var tableData = data;
console.log(tableData)

var tbody = d3.select("tbody");

tableData.forEach((ufo) => {

	var row = tbody.append("tr");

	Object.entries(ufo).forEach(([key, value]) => {

		var cell = row.append("td");
		cell.text(value);
	});
});

//*** Use a date form in your HTML document and write JavaScript code that will listen
//for events and search through the date/time column to find rows that match user input.

var button = d3.select("#filter-btn");

var form = d3.select("form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

  d3.event.preventDefault();

  var inputElement = d3.select(".form-control");

  var inputValue = inputElement.property("value");

	var results = tableData.filter(ufo => ufo.datetime === inputValue);
	
	tbody.html("");

	if (results.length === 0) {
		tbody.text(`No ufo sightings on ${inputValue}.`);
	}

	else {
		results.forEach((ufo) => {
			var row = tbody.append("tr");
			Object.entries(ufo).forEach(([key, value]) => {
				var cell = row.append("td");
				cell.text(value);
			});
		});
	};
};