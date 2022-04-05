function getTime() {
    let date = new Date();
    let hh = date.getHours(); // get the hours
    let mm = date.getMinutes(); // get the minutes
    let ss = date.getSeconds(); // get the Seconds
    let time = 'AM';

    if (hh == 0) {    // if hours equal to 0, make it 12
        hh = 12;  
    }
    if (hh > 12) {  // if hours greater than 12, make time show PM.
        hh = hh - 12;
        time = 'PM';
    }
    hh = (hh < 10) ? "0" + hh : hh; // adding an extra 0 before the number if it is less than 10
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let timeFormmated = hh + ':' + mm + ':' + ss + ' ' + time; // selects everything
    document.getElementById('clock').innerText = timeFormmated;  // inserts inside the HTML
    let timeout = setTimeout(function() { getTime() }, 500); // set a updating time in order to update the clock every 500ms.
}

getTime();  //calls the function and make it work