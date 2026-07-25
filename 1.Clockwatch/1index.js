//to update time re
//time time from my system
//date fn in millisecond from ms convert in to  date
function timing(){
const timer =document.getElementById('root');
const now=new Date();

const indiantime=now.toLocaleTimeString()
//this time is standard time
//to convet in indian
timer.innerHTML=indiantime;
}

setInterval(timing,1000)

const timer =document.getElementById('root');
//to increse font size
timer.style.fontSize="100px"
//to display in centre
timer.style.display="flex";
timer.style.height="100vh";
timer.style.justifyContent="center"
timer.style.alignItems="center"
timer.style.backgroundColor="orange"
