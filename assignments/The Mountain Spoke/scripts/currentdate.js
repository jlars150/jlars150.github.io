windows.onload = function () {
    
    var currentTime = new Date();
    var day = new Array(7);
        day[0]="Sunday";
        day[1]="Monday";
        day[2]="Tuesday";
        day[3]="Wednesday";
        day[4]="Thursday";
        day[5]="Friday";
        day[6]="Saturday";
    var month = new Array(12);
        month[0]="January";
        month[1]="Februrary";
        month[2]="March";
        month[3]="April";
        month[4]="May";
        month[5]="June";
        month[6]="July";
        month[7]="August";
        month[8]="September";
        month[9]="October";
        month[10]="November";
        month[11]="December";
       document.getElementById("currentdate").innerHTML = day[currentTime.getDay()] + ', ' + currentTime.getDate() + ' ' + month[currentTime.getMonth()] + ' ' + currentTime.getFullYear();
}