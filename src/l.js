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

var sometext = "punkin squish "; 

var arc = d3.arc()
    .innerRadius(ringStart)
    .outerRadius(ringStart)
    .startAngle( paths[0][1] * (pi / 180)) // degs to radians
    .endAngle( paths[0][2] * (pi / 180));

vis.attr("width", "600")
    .attr("height", "600")
    .append("path")
    .attr("id", 't123')
    .attr("d", arc)
    .attr("fill", '#ff00ff')
    .attr("transform", "translate(300,270)");

var daPath = document.getElementById('t123');
var pathLength = daPath.getTotalLength();
console.log("----- begin")
console.log(`path length: t123 ${pathLength}`);


vis.append("text")
    .append("textPath")
    .attr("id", 'tt123')
    .attr("xlink:href", '#t123' )
    .text( sometext )

var daText = document.getElementById('tt123');
var textLength = daText.getComputedTextLength();
console.log(`text length: t123 ${textLength} `);
console.log("----- end")

//for (let i = 0; i < paths.length; i++) {
for (let i = 0; i < 1; i++) {
    arc = d3.arc()
	.innerRadius(ringStart - paths[i][0])
	.outerRadius(ringStart - paths[i][0])
	.startAngle(paths[i][1] * (pi / 180)) // degs to radians
	.endAngle(  paths[i][2] * (pi / 180));
    var id = `id_${i}`;
    var textId = `text${id}`
    
    vis.append("path")
	.attr("id", id)
	.attr("d", arc)
	.attr("fill", paths[i][3])
	.attr("transform", "translate(300,300)")

    var daPath = document.getElementById(id);
    var pathLength = daPath.getTotalLength();

    var n = pathLength / textLength;
    var nr = Math.trunc(n / 2);
    console.log(`n: ${n} ${nr} path length: ${id} ${pathLength}`);
    // ??
    // too long - wraps around "quish"
    // how to stop wrap?

    var coolText = sometext.repeat( nr )
    
    vis.append("text")
	.append("textPath")
	.attr("id", textId)
	.attr("xlink:href", `#${id}` )
//	.style("text-anchor", "left")
	.attr("startOffset", "0%")
	.attr("method", "stretch")
	.attr("side", "right")
	.text(coolText);

    
    daText = document.getElementById(textId);
    textLength = daText.getComputedTextLength();
console.log(`text length: t123 ${textId} ${textLength} `);

    
}
