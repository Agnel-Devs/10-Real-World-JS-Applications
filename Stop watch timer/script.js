const min=document.getElementById("minutes");
const sec=document.getElementById("seconds");
const mil=document.getElementById("milliseconds");
const start=document.getElementById('startbtn');
const stopp=document.getElementById('stopbtn');
const pause=document.getElementById('paubtn');
const reset=document.getElementById('resbtn');
const laplist=document.getElementById('laplist');
let minutes=0;
let seconds=0;
let milliseconds=0;
let interval=null;

start.addEventListener('click',starttimer);
stopp.addEventListener('click',stoptimer);
pause.addEventListener('click',pausetimer);
reset.addEventListener('click',resettimer);

function starttimer(){
    if (interval) return;
    interval=setInterval(update,10);
    start.disabled=true;
    pause.disabled=false;
    stopp.disabled=false;
}

function stoptimer(){
    clearInterval(interval);
    addlap();
    resettimer();
    interval=null;
    start.disabled=false;
    pause.disabled=true;
    stopp.disabled=true;
}

function pausetimer(){
    clearInterval(interval);
    interval=null;
    start.disabled=false;
    pause.disabled=true;
    stopp.disabled=false;
}

function resettimer(){
    clearInterval(interval);
    interval=null;
    minutes=0;
    seconds=0;
    milliseconds=0;
    displaytimer();
    start.disabled=false;
    pause.disabled=true;
    stopp.disabled=true;
}

function update() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    displaytimer();
}

function displaytimer(){
    min.textContent=minutes<10?"0"+minutes:minutes;
    sec.textContent=seconds<10?"0"+seconds:seconds;
    mil.textContent=milliseconds<10?"0"+milliseconds:milliseconds;
}
function addlap(){
    const formMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formSeconds = seconds < 10 ? "0" + seconds : seconds;
    const formMilliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    const laptime = `${formMinutes}:${formSeconds}:${formMilliseconds}`;
    const listitem=document.createElement('li')
    listitem.innerHTML=`<span>Lap ${laplist.childElementCount+1}:  </span>${laptime}<hr>`;
    laplist.appendChild(listitem);
}