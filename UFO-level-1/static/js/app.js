// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// add data to the html
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    
    // add tr for each row of data
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the ufo report object
      var cell = row.append("td");
      cell.text(value);
    });
});


// Getting a reference to the 'Filter Table' button
var button = d3.select("#filter-btn");

// get reference to the date field
var form = d3.select('#datetime');

// This function is triggered when the button is clicked
function handleClick() {
  console.log("A button was clicked!");

  // We can use d3 to see the object that dispatched the event
  console.log(d3.event.target);
}

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);


button.on("click", runEnter);
// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    tbody.html("");
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);

  
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  
    console.log(filteredData);

    
    
    
    
    

    // add data to the html
    filteredData.forEach(function(filteredReport) {
        console.log(filteredReport);
        
        // add tr for each row of data
        var row = tbody.append("tr");
        Object.entries(filteredReport).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          // in the ufo report object
          var cell = row.append("td");
          cell.text(value);
        });
    });
    





}











