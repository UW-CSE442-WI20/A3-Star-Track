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

// returns a Promise of filtered csv array from all_data
function filter_data() {
    return all_data.
    then(function(d) {
            var d_filtered =  d.filter(function(row) {
                return row["year"] == year;
            });
        return d_filtered;
    });
}

console.log(filter_data());

// Update the current slider value and render a new plot
slider.oninput = function() {
    output.innerHTML = this.value;
    year = this.value;
    // TODO: Update the plot here:
    console.log(filter_data());
}



// TODO Resolve this promise!
// {"year": 2020, "mass": 200, "id":3}