function calculateage(){
    const birthdate=new Date(document.getElementById("Birthdate").value);
    const today=new Date();
    if(isNaN(birthdate.getTime())){
        document.getElementById("result").innerHTML="Please enter a valid date";
        return;
    }
    let age=today.getFullYear()-birthdate.getFullYear();
    let month=today.getMonth()-birthdate.getMonth();
    let day=today.getDate()-birthdate.getDate();
    if(month<0 || (month===0 && day<0)){
        age--;
        month+=12;
    }
    if(day<0){
        month--;
        day+=new Date(today.getFullYear(),today.getMonth(),0).getDate();
    }
    let res = `
  <div class="result-item">Age:<span>${age}</span></div>
  <div class="result-item">Months:<span>${month}</span></div>
  <div class="result-item">Date:<span>${day}</span></div>
`;    
document.getElementById("result").innerHTML=res;
}