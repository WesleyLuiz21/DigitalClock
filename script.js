function getTime() {
    let date = new Date();
    let hh = date.getHours(); // get the hours
    let mm = date.getMinutes(); // get the minutes
    let ss = date.getSeconds(); // get the Seconds
    let time = 'AM';

    if (hh == 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        time = 'PM';
    }
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let timeFormmated = hh + ':' + mm + ':' + ss + ' ' + time;
    document.getElementById('clock').innerText = timeFormmated; 
    let timeout = setTimeout(function() { getTime() }, 500);
}

getTime();