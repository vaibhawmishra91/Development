//acessing elemnt by css selector
const id=document.querySelector('#first')
//first is id
id.innerHTML="Hello World"
//it return the first element matching the specific css selector

 //const id1=document.querySelector('.header2')
//id1.style.backgroundColor="pink"

const id2=document.querySelectorAll('.header2')
//id2.style.backgroundColor="pink"
//document.querySelectorAll('.header2') returns a NodeList — basically a list (array-like collection) of all elements matching .header2.
//You can’t directly apply .style to a NodeList, because it’s not a single element, but a collection of them.
//with for each loop
// id2.forEach(element => {
//   element.style.backgroundColor = "pink";
// });
//or
for(i=0;i<id2.length;i++)
   id2[i].style.color='red'





/******************* */
//acessing element by tag
const obj=document.getElementsByTagName('h1')

//we can also acess chil and parent node
