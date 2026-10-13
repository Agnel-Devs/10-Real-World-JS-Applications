let outputcode=document.getElementById("css");
let sliders=document.querySelectorAll("input[type='range']");
let inputs=document.querySelectorAll("input[type='number']");
sliders.forEach(function(slider){
slider.addEventListener("input",createblob);
});
inputs.forEach(function(inp){
inp.addEventListener("input",createblob);
});
function createblob(){
let radiusone=sliders[0].value;
let radiustwo=sliders[1].value;
let radiusthree=sliders[2].value;
let radiusfour=sliders[3].value;
let blobheight=inputs[0].value;
let blobwidth=inputs[1].value;
let borderradius=`${radiusone}% ${100-radiusone}% ${100-radiusthree}% ${radiusthree}% / ${radiusfour}% ${radiustwo}% ${100-radiustwo}% ${100-radiusfour}%`;
let blob=document.querySelector(".blob");
blob.style.borderRadius=borderradius;
blob.style.height=`${blobheight}px`;
blob.style.width=`${blobwidth}px`;
outputcode.value=`border-radius: ${borderradius};`;
}
document.getElementById("copy").addEventListener("click",function(){
outputcode.select();
document.execCommand("copy");
alert("Code copied to clipboard");
});
createblob();