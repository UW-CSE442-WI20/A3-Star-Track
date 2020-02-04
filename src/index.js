const d3 = require('d3');

const csvFile = require('./Meteorite_Landings.csv');

/*var name = [];
var id = [];
var recclass = [];
var mass = [];
var year = [];
var GeoLocation = [];*/

d3.csv(csvFile, function(data) {
    return {
        name: data.name,
        id: data.id,
        recclass: data.recclass,
        mass: +data["mass (g)"],
        year: data.year,
        GeoLocation: data.GeoLocation
    };
}).then(function(d) {
    console.log(d);
});