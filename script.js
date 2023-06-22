let itemList = document.querySelector("#items");
// parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentNode.parentNode.parentNode);

// parentElement

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentElement.parentElement.parentElement);

// childNodes

console.log(itemList.childNodes);

// children

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow";

// firstChild

console.log(itemList.firstChild);

// firstElementChild

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello 1";

// lastChild

console.log(itemList.lastChild);

// lastElementChild

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello 4";

// nextSibling

console.log(itemList.nextSibling);

// nextElementSibling

console.log(itemList.nextElementSibling);

// previousSibling

console.log(itemList.previousSibling);

// previousElementSibling

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";

// createElement

// create a div

let newDiv = document.createElement("div");

// Add class

newDiv.className = "hello";

// Add id

newDiv.id = "hello1";

// Add attr

newDiv.setAttribute("title","Hello Div");

// Create text node

let newDivText = document.createTextNode("Hello World");

// Add text to div

newDiv.appendChild(newDivText);

let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");
newDiv.style.fontSize = "30px";
container.insertBefore(newDiv,h1);

console.log(newDiv);

let div2 = document.createElement("p");
div2.className = "class1";
div2.id = "id1";
div2.setAttribute("title","newDiv");
let pText = document.createTextNode("Hello World");
div2.appendChild(pText);
let container1 = document.querySelector("#items");
let target = document.querySelector(".list-group-item");
div2.style.fontSize = "20px";
container1.insertBefore(div2,target);
