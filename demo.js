console.log("Hello World,");

// Traversing the DOM
var items=document.querySelector("#items");
console.log(items.parentNode);
items.parentNode.style.backgroundColor='#f4f4f4';

//Child nodes

//console.log(items.childNodes);
//Children element

console.log(items.children);
items.children[1].style.backgroundColor='yellow';

//FirstChild
//console.log(items.firstChild);

//First element child
// console.log(items.firstElementChild);
// items.firstElementChild.textContent="Hello";

//Last child
// console.log(items.lastChild);

//Last Element child
// console.log(items.lastElementChild);
// items.lastElementChild.innerHTML="Good-Bye";


//Next Sibling
// console.log(items.nextSibling);

//Next element sibling
// console.log(items.nextElementSibling);

//Previous Sibling and Previous Element Sibling
// console.log(items.previousElementSibling);

// items.previousElementSibling.style.color='green';

// createElement

// Create a div
var newDiv =  document.createElement('div');

// Add class
// newDiv.className= 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add attr
// newDiv.setAttribute('title', 'Hello Div');

var newDivText=document.createTextNode('Hello World!');
//Add text to Div
newDiv.appendChild(newDivText);
var container=document.querySelector("header .container");
var h1=document.querySelector("header h1");

container.insertBefore(newDiv,h1);

var div2=document.createElement('div');
var div2Text=document.createTextNode("Hello World!");

div2.appendChild(div2Text);
var ul=document.querySelector('ul');
var item1=items.children[0];
console.log(item1);

ul.insertBefore(div2,item1);