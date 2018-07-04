
var temph = parseFloat(document.getElementById('temp-high').innerHTML);
var templ = parseFloat(document.getElementById('temp-low').innerHTML);
var temp = (temph + templ) / 2;
var windspeed = parseFloat(document.getElementById('windspeed').innerHTML);;


var wc = windChill(temp, windspeed);
document.getElementById('windchill').innerHTML = parseFloat(wc).toFixed(2);

function windChill(tempF, speed){
return wind_chill = 35.74 + (0.6215 * tempF) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275 * tempF * Math.pow(speed, 0.16));
;
}