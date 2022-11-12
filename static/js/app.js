// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear out existing data
    tbody.html("");

    // loop through data objects
    data.forEach((dataRow) => {

        // append a row per object
        let row = tbody.append("tr");

        Object.values(dataRow).forEach((val) => {

            // append a cell per row
            let cell = row.append("td");

            // substitute in object's value
            cell.text(val);
        });        
    });
}

function handleClick() {
    // holds value from input
    let date = d3.select("#datetime").property("value");

    let filteredData = tableData;

    // filter condition
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // builds table from filtered data
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);