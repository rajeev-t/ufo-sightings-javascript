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
