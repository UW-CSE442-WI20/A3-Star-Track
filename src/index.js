const d3 = require('d3');

const csvFile = require('./Meteorite_Landings.csv');

var year = 2000;
var slider = document.getElementById("yearRange");
var output = document.getElementById("yearDisplay");
output.innerHTML = slider.value; // Display the default slider value

// Load the csv file
var all_data = d3.csv(csvFile, function(data) {
    return {
        name: data.name,
        id: data.id,
        recclass: data.recclass,
        mass: +data["mass (g)"],
        year: parseInt(data.year.substring(6, 10)),
        reclat: data.reclat,
        reclong: data.reclong
    };
});

var mymap = L.map('mapid').setView([40, -0.09], 2);
var shipLayer = L.layerGroup();
mymap.addLayer(shipLayer);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW5naWVsZWV5eiIsImEiOiJjazY4c3MwOHAwOGc1M29xanNrOWdpcjgwIn0.kOc4Y88p-f10kvKPyKoKOA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

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

// Legend
var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Classes</h4>";
  div.innerHTML += '<i style="background: #30C5FF"></i><span>H Chondrite</span><br>';
  div.innerHTML += '<i style="background: #E84855"></i><span>L Chondrite</span><br>';
  div.innerHTML += '<i style="background: #FFFD82"></i><span>Carbonaceous Chondrite</span><br>';
  div.innerHTML += '<i style="background: #C6D4FF"></i><span>Other</span><br>';
  
  return div;
};

legend.addTo(mymap);

function drawPoints() {
    shipLayer.clearLayers();
    filter_data().then(function(d) {
        d.map(function(row) {
            var fill = "";
            // get color based on class
            if (row["recclass"].charAt(0) === 'H') {
                // blue
                fill = "#30C5FF";
            } else if (row["recclass"].charAt(0) === 'L') {
                // red
                fill = "#E84855";
            } else if (row["recclass"].charAt(0) === 'C') {
                // yellow
                fill = "#FFFD82";
            } else {
                // purple
                fill = "#C6D4FF";
            }

            var circle = L.circle([row["reclat"], row["reclong"]], {
                stroke: false,
                fillColor: fill,
                fillOpacity: 0.9,
                radius: Math.min((row["mass"] + 1000.0) * 100.0, 150000)
            });
            shipLayer.addLayer(circle);
            circle.bindPopup("Name: " + row["name"] + "<br>"
                            + "ID: " + row["id"] + "<br>"
                            + "Class: " + row["recclass"] + "<br>"
                            + "Mass (g): " + row["mass"] + "<br>"
                            + "Geolocation: (" + row["reclat"] + ", " + row["reclong"] + ")");
        });
    })
    
}

// Draw points (meteorites) on the map
drawPoints();

// Update the current slider value and render a new plot
slider.oninput = function() {
    output.innerHTML = this.value;
    year = this.value;
    // TODO: Update the plot here:
    drawPoints();
}
