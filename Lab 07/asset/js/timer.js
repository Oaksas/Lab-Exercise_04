// UI Variables 
const timerDemo = document.getElementById("timerDemo");
//timer 
function startTime() {
    //retrieve date 
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    //get the AM / PM value 
    let meridian = h > 12 ? 'PM' : 'AM';
    // Convert the hour to 12 format 
    h = h % 12 || 12;
    // add zero 
    h = addZero(h)
    m = addZero(m);
    s = addZero(s);
    // Assign to the UI [p]
    timerDemo.innerHTML = `${h} : ${addZero(m)} : ${addZero(s)} ${meridian }`;
    setTimeout(startTime, 500);
}

function addZero(i) {
    if (i < 10) { i = "0" + i } // add zero in front of numbers < 10
    return i;
}