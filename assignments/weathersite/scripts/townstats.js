let request = new XMLHttpRequest();
let apiURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    request.open('GET', apiURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var townstats = request.response;
        console.log(townstats);
        towndata(townstats);
    }
    
    function towndata(jsonObj) {
        var towns = jsonObj['towns'];
        document.getElementById('motto' + towns[0].name).innerHTML = towns[0].motto;
        document.getElementById('yearFounded' + towns[0].name).innerHTML = towns[0].yearFounded;
        document.getElementById('currentPopulation' + towns[0].name).innerHTML = towns[0].currentPopulation;
        document.getElementById('averageRainfall' + towns[0].name).innerHTML = towns[0].averageRainfall;
        
        document.getElementById('motto' + towns[1].name).innerHTML = towns[1].motto;
        document.getElementById('yearFounded' + towns[1].name).innerHTML = towns[1].yearFounded;
        document.getElementById('currentPopulation' + towns[1].name).innerHTML = towns[1].currentPopulation;
        document.getElementById('averageRainfall' + towns[1].name).innerHTML = towns[1].averageRainfall;
        
        document.getElementById('motto' + towns[3].name).innerHTML = towns[3].motto;
        document.getElementById('yearFounded' + towns[3].name).innerHTML = towns[3].yearFounded;
        document.getElementById('currentPopulation' + towns[3].name).innerHTML = towns[3].currentPopulation;
        document.getElementById('averageRainfall' + towns[3].name).innerHTML = towns[3].averageRainfall;
        for (var i = 0; i < towns.length; i++) {
            if(towns[i].name != 'Placerton') {
               
            }
        }
        
        //var mydiv = document.getElementById(towns[0].name);
        //var mypara1 = document.createElement('p');
        // mypara1.textContent = 'Motto: ' + towns[0].motto;
        // mydiv.appendChild(mypara1);
    }