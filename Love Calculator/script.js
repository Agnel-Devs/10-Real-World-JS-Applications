function calc(){
    const name1=document.getElementById("name1").value.trim();
    const name2=document.getElementById("name2").value.trim();
    if(!name1 || !name2){
        alert("Enter both names");
        return;
    }
    const love=Math.floor(Math.random()*101);
    const result=document.getElementById("result");
    result.innerHTML= `${name1} and ${name2} 's love percentage: ${love}%<br><br>`;
    if(love<30){
     result.innerHTML+= "Not a great match.Keep looking!";  
    }
    else if(love<70){
     result.innerHTML+=  "There is a potential.Look for a chance"; 
    }
    else{
     result.innerHTML+= "Great Match! Love is on air";  
    }
}