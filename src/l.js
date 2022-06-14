var vis = d3.select("body").append("svg")
//var turn = 12 * (pi / 180);
var turn = 12;
var ringStart = 280;
var rD = 30;
var pi = Math.PI;

var paths = [
    [0, 190, 360 + 182, '#00FF00'],

    [rD, 200, 360 + 90, '#00EE00'],
    [rD, 90 +turn, 173, '#00EE00'],
    
    [rD*2,     193,    350, '#00DD00'],
    [rD*2,      12,    162, '#00DD00'],

    [rD*3,    183,  270 -turn, '#00BB00'],
    [rD*3, 270 +turn, 360 + 170, '#00BB00'],

    [rD*4, 195, 360 + 75, '#00AA00'],
    [rD*4, 100, 185, '#00AA00'],

    [rD*7, 200, 360 + 170, '#0000DD']
]


for (let i = 0; i < paths.length; i++) {
    var arc = d3.arc()
	.innerRadius(ringStart - paths[i][0])
	.outerRadius(ringStart + 2 - paths[i][0])
	.startAngle(paths[i][1] * (pi / 180)) // degs to radians
	.endAngle( paths[i][2] * (pi / 180));
    var id = `id_${i}`;
    var textId = `text${id}`
    
    vis.attr("width", "600").attr("height", "600")
	.append("path")
	.attr("id", id)
	.attr("d", arc)
	.attr("fill", paths[i][3])
	.attr("transform", "translate(300,300)")

    var daPath = document.getElementById(id);
    console.log(`path length: ${id} ${daPath.getTotalLength()}`);

    vis.append("text")
	.append("textPath")
	.attr("id", textId)
	.attr("xlink:href", `#${id}` )
	.style("text-anchor", "left")
	.attr("startOffset", "0%")
	.text("punkin squish punkin squish");

    var daText = document.getElementById(textId);
    console.log(`text length: ${textId} ${daText.getComputedTextLength()} `);

}


/*
      //Create an SVG path (based on bl.ocks.org/mbostock/2565344)
      svg.append("path")
    .attr("id", "wavy") //Unique id of the path
    .attr("d", "M 10,90 Q 100,15 200,70 Q 340,140 400,30") //SVG path
    .style("fill", "none")
    .style("stroke", "#AAAAAA");

      //Create an SVG text element and append a textPath element
      svg.append("text")
    .append("textPath") //append a textPath to the text element
    .attr("xlink:href", "#wavy") //place the ID of the path here
    .style("text-anchor","middle") //place the text halfway on the arc
    .attr("startOffset", "50%")
    .text("Yay, my text is on a wavy path");

*/
