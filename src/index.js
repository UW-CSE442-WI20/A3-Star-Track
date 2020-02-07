const d3 = require('d3');

const csvFile = require('./Meteorite_Landings.csv');

/*var name = [];
var id = [];
var recclass = [];
var mass = [];
var year = [];
var GeoLocation = [];*/
var year = 2000;
var slider = document.getElementById("yearRange");
var output = document.getElementById("yearDisplay");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
    year = this.value;
    // TODO: Update the plot here:
}

function filter_data(d, year, cls) {
    var d_filtered =  d.filter(function(row) {
            return row["year"] == year;
        });
    return d_filtered;
}

var all_data = d3.csv(csvFile, function(data) {
    return {
        name: data.name,
        id: data.id,
        recclass: data.recclass,
        mass: +data["mass (g)"],
        year: parseInt(data.year.substring(6, 10)),
        GeoLocation: data.GeoLocation
    };
});
console.log(all_data);
// TODO Resolve this promise!
// {"year": 2020, "mass": 200, "id":3}