

$("body").ready(function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth(); //date in no. 0 to 11
    var month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']; //month name array
    var mmName = month[mm]; //curr month name
    var date = mmName + " " + dd; //final date

    var day = today.getDay(); //curr day in no.
    var weekday = ['SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT']; //weekday nmae array
    var dayName = weekday[day]; //curr day in day

    var time = today.toLocaleTimeString();
    var textDate = dayName + " | " + date + " | " + time;

    $("#date").text(textDate);

    navigator.geolocation.getCurrentPosition((success) => {
        let {latitude , longitude} = success.coords;
        console.log(latitude + " " + longitude);
        console.log(success);
    })
})

