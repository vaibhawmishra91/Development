//creating element with the help of javascript

//1. ex-<li> TS </li>
const element=document.createElement('li')
element.innerHTML="TS"
//access parent element
const parent=document.getElementById("root")
parent.appendChild(element)

//2. to attach multiple elemnt create fn
function attach(content){
const element=document.createElement('li')
element.innerHTML=content ;

const parent=document.getElementById("root")
//parent.appendChild(element)

//if i also need to attach more elemrnt
parent.append(element,"hello coder army")
};
//call fn
attach("Alpha")
attach("Beta")
attach("Gama")

//3 
function attach(content){
const element=document.createElement('li')
element.innerHTML=content ;

const element2=document.createElement('li')
element2.innerHTML=content+"V2.o";

const parent=document.getElementById("root")
parent.append(element,element2)
}


// ******create text
const element3=document.createTextNode("I am Vaibhaw")
const parent1=document.getElementById("root")
parent1.append(element3)



//*** attribute node
//ex <ul id="root">
 //    <li id=" ">CN</li>
const element4=document.ATTRIBUTE_NODE("id")
element4.value="second"
//to access first list
//const curr_list=document.querySelector('li')
//curr_list.setAttribute(element4  )

//to acess other any list  rather than first or first
const parent2=document.getElementById("root")
parent2.children[1].setAttributeNode(element4)


