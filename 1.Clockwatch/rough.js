const time=document.getElementById('root')
function timing() {
const date=new Date()
const date1=date.toLocaleTimeString()
console.log(date)
console.log(date1)
time.innerHTML=date1
}
setInterval(timing,1000)

time.style.fontSize="100px"
time.style.height="100vh"
time.style.display="flex"
time.style.justifyContent="center"
time.style.alignItems="center"
time.style.backgroundColor="green"