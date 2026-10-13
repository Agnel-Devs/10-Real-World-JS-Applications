document.addEventListener("DOMContentLoaded",()=>{
    const color1 = document.querySelector(".c1");
    const color2 = document.querySelector(".c2");
    const gradientcont=document.querySelector("#gradient-cont");
    const btn=document.querySelector(".btn");
    const copybtn=document.querySelector(".copy");
    const csscode=document.getElementById("code");
    function makecolor(){
        let randomcolor=Math.floor(Math.random()*16777215).toString(16);
        return randomcolor.padStart(6,'0');
    }
    function setgradient(){
        const gradient = `linear-gradient(135deg, ${color1.value}, ${color2.value})`;
        gradientcont.style.background = gradient;
        if (csscode) {
            csscode.textContent = `background: ${gradient};`;
        }
    }
    function generategradient(){
        color1.value = "#" + makecolor();
        color2.value = "#" + makecolor();
        setgradient();
    }
    function copytoclipboard(){
        const text = csscode ? csscode.textContent : `background: linear-gradient(135deg, ${color1.value}, ${color2.value});`;
        navigator.clipboard.writeText(text).then(() => {
            copybtn.textContent = "Copied!";
            setTimeout(() => { copybtn.textContent = "Copy"; }, 600);
        }).catch(() => {
            copybtn.textContent = "Copy failed";
        });
    }
    generategradient();
    color1.addEventListener("input", setgradient);
    color2.addEventListener("input", setgradient);
    btn.addEventListener("click", generategradient);
    copybtn.addEventListener("click", copytoclipboard);

});