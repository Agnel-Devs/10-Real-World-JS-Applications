document.getElementById("incbtn").addEventListener("click", incrementcounter);
document.getElementById("decbtn").addEventListener("click", decrementcounter);
document.getElementById("reset").addEventListener("click", resetcounter);

let counterdisplay = document.getElementById("display");
let countervalue = 0;

function update() {
    counterdisplay.textContent = countervalue;
}

function incrementcounter() {
    countervalue++;
    update();
}

function decrementcounter() {
    if (countervalue<1) {
        countervalue = 0;
    }
    else {
        countervalue--;
    update();
    }
    
}

function resetcounter() {
    countervalue = 0;
    update();
}