document.addEventListener("DOMContentLoaded",function(){
   const invinput=document.getElementById("investment");
   const intinput=document.getElementById("intrest-rate");
   const timeinput=document.getElementById("time");

   invinput.addEventListener("input",function(){
    updateinvvalue(this.value);
   });

   intinput.addEventListener("input",function(){
    updateintvalue(this.value);
   });

   timeinput.addEventListener("input",function(){
    updatetimevalue(this.value);
   });

   updateinvvalue(invinput.value);
   updateintvalue(intinput.value);
   updatetimevalue(timeinput.value);
});
function updateinvvalue(value){
    document.getElementById("inv-value").textContent=`${parseFloat(value).toLocaleString('en-IN')}`;
}
function updateintvalue(value){
    document.getElementById("int-value").textContent=`${parseFloat(value).toLocaleString('en-IN')}`;

}
function updatetimevalue(value){
    document.getElementById("time-value").textContent=`${parseFloat(value).toLocaleString('en-IN')}`;

}
function calc(){
    const principal=parseFloat(document.getElementById("investment").value);
    const rate=parseFloat(document.getElementById("intrest-rate").value);
    const no=parseFloat(document.getElementById("time").value);
    const total=principal*Math.pow((1+((rate/100)/4)),(4*no));
    const amount=total-principal;

    document.getElementById("invested-amount").innerText=`₹${principal.toLocaleString('en-IN')}`;
    document.getElementById("Estd-amount").innerText=`₹${amount.toLocaleString('en-IN')}`;
    document.getElementById("total-amount").innerText=`₹${total.toLocaleString('en-IN')}`;
}