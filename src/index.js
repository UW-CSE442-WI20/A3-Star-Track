const d3 = require('d3');

const csvFile = require('./Meteorite_Landings.csv');

/*var name = [];
var id = [];
var recclass = [];
var mass = [];
var year = [];
var GeoLocation = [];*/
var year = 2010;
d3.csv(csvFile, function(data) {
    return {
        name: data.name,
        id: data.id,
        recclass: data.recclass,
        mass: +data["mass (g)"],
        year: parseInt(data.year.substring(6, 10)),
        GeoLocation: data.GeoLocation
    };
}).then(function(d) {
    // code to filter the data using year
    var fd = d.filter(function(row) {
        return row["year"] == year;
    });
    console.log(fd);
});