document.addEventListener("DOMContentLoaded",()=>{
    const days = [
    { name: 'Sunday', quote: 'Time to chill!' },
    { name: 'Monday', quote: 'Easy like a Sunday morning.' },
    { name: 'Tuesday', quote: 'Just coasting through the week.' },
    { name: 'Wednesday', quote: 'Halfway there, time to breathe.' },
    { name: 'Thursday', quote: 'Pre-weekend mode activated.' },
    { name: 'Friday', quote: 'Flip-flops on, stress off.' },
    { name: 'Saturday', quote: 'Total relaxation mode.' }
];
    const today=days[new Date().getDay()];
    console.log(today);
    document.getElementById("weekday").textContent=today.name;
    document.getElementById("phrase").textContent=today.quote;
});