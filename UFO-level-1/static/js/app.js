// from data.js
var tableData = data;

// get reference to tbody
var tbody = d3.select("tbody");

// add data to the html
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    
    // add tr for each row of data
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      
      // append a cell to the row for each value
      // in the ufo report object
      var cell = row.append("td");
      cell.text(value);
    });
});

// get reference to the 'Filter Table' button
var button = d3.select("#filter-btn");

// run function when 'Filter Table' button is clicked
button.on("click", runEnter);

// define runEnter function
function runEnter() {

    // prevent page refreshing
    d3.event.preventDefault();

    // clear table from html 'tbody' tag
    tbody.html("");
    
    // get reference to the date field
    var inputElement = d3.select("#datetime");
  
    // get value of the input
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);

    // filter data with the requested date
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  
    console.log(filteredData);

    // add data to the html
    filteredData.forEach(function(filteredReport) {
        console.log(filteredReport);
        
        // add tr for each row of data
        var row = tbody.append("tr");
        Object.entries(filteredReport).forEach(function([key, value]) {
          console.log(key, value);
          
          // append a cell to the row for each value
          // in the ufo report object
          var cell = row.append("td");
          cell.text(value);
        });
    });
    

}











