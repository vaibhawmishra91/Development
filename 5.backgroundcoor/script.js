//on clicking change the backgroung

//first access all button 
// const red=document.getElementById('red')
// const blue=document.getElementById('blue')
// const orange=document.getElementById('orange')
// const green=document.getElementById('green')
// const purple=document.getElementById('purple')

// const body=document.body
// document.querySelector('body')

// red.addEventListener('click',()=>{
// body.style.backgroundColor='red'
// })


// blue.addEventListener('click',()=>{
// body.style.backgroundColor='blue'
// })

// orange.addEventListener('click',()=>{
// body.style.backgroundColor='orange'
// })

// green.addEventListener('click',()=>{
// body.style.backgroundColor='green'
// })
// purple.addEventListener('click',()=>{
// body.style.backgroundColor='purple'
// })

//this is long method to short this method
//access a button in one time
const buttons =document.querySelectorAll('button');
const body=document.body
//for loop on button
buttons.forEach((button)=>{
  
    button.addEventListener('click',()=>{
        //background color=botton id i.e red,blue
        body.style.backgroundColor=button.id
    })
})