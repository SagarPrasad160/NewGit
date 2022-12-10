// console.log("Hello World,");

// Traversing the DOM
// var items=document.querySelector("#items");
// console.log(items.parentNode);
// items.parentNode.style.backgroundColor='#f4f4f4';

//Child nodes

//console.log(items.childNodes);
//Children element

// console.log(items.children);
// items.children[1].style.backgroundColor='yellow';

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
//var newDiv =  document.createElement('div');

// Add class
// newDiv.className= 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add attr
// newDiv.setAttribute('title', 'Hello Div');

//var newDivText=document.createTextNode('Hello World!');
//Add text to Div
// newDiv.appendChild(newDivText);
// var container=document.querySelector("header .container");
// var h1=document.querySelector("header h1");

// container.insertBefore(newDiv,h1);

// var div2=document.createElement('div');
// var div2Text=document.createTextNode("Hello World!");

// div2.appendChild(div2Text);
// var ul=document.querySelector('ul');
// var item1=items.children[0];
// console.log(item1);

// ul.insertBefore(div2,item1);

var form=document.getElementById("addForm");
var itemsList=document.getElementById('items');
var filter=document.getElementById('filter');




// Filter items
filter.addEventListener('keyup',filteritems);

//Form submit Event

form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();
    
    var newItem=document.getElementById('item').value;
    var itemDescription=document.getElementById('item-description').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    //Adding text node
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(itemDescription));

    //Adding delete button
    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemsList.appendChild(li);
}

// Event Delete 

itemsList.addEventListener('click',removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure!')){
            var li=e.target.parentElement;
            itemsList.removeChild(li);
        }
    }
}

function filteritems(e){
    var text=e.target.value.toLowerCase();
    var items=itemsList.getElementsByTagName('li');
    // Converting to array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
}