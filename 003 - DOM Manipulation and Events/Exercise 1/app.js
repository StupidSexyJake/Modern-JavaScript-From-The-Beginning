// ::::::::::::::::
// DOM properties
// ::::::::::::::::

/* let val;

val = document;
val = document.all;
val = document.all[1];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms[0];
val = document.forms[0].method;

val = document.links;
val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;
let scriptsArray = Array.from(scripts);
scriptsArray.forEach(function(script){
    console.log(script.getAttribute('src'));
});

console.log(val); */



// ::::::::::::::
// DOM Selectors
// ::::::::::::::

// Slectors for single elements

/* let val;

val = document.getElementById('task-title');
val = document.getElementById('task-title').id;
val = document.getElementById('task-title').className;

const taskTitle = document.getElementById('task-title');

taskTitle.style.background = "red";
taskTitle.style.color = "white";

taskTitle.textContent = "Task List";
taskTitle.innerText = "My Task";
taskTitle.innerHTML = "<span style=\"color: green\">Task List</span>";

val = document.querySelector("#task-title");
val = document.querySelector(".card-title");
val = document.querySelector("h5");

document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "red";
document.querySelector("li:last-child").style.color = "blue";
document.querySelector("li:nth-child(3)").style.color = "yellow";
document.querySelector("li:nth-child(4)").textContent = "Hello World";
document.querySelector("li:nth-child(odd)").style.background = "#333";
console.log(val); */

// Selectors for multiple elements

/* const items = document.getElementsByClassName("collection-item");
console.log(items);
console.log(items[0]);
items[0].style.color = "red";
items[3].textContent = "Hello";

const listItems = document.querySelector('ul').getElementsByClassName("collection-item");
console.log(listItems); */




// ::::::::::::::
// Traversing the DOM
// ::::::::::::::

/* let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

val = list.childNodes;
val = list.children;

val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;
val = list.children[0];

list.children[1].textContent = "Hello";

val = list.children[3].children;

val = list.firstChild;
val = list.firstElementChild;

val = list.childElementCount;

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

val = listItem.nextSibling;
val = listItem.nextElementSibling;

console.log(val); */



// ::::::::::::::
// Creating Elements
// ::::::::::::::

/* const li = document.createElement("li");

li.className = "collection-item";
li.id = "new-item";
li.setAttribute("title", "New Item");

li.appendChild(document.createTextNode("Hello World"));

const link = document.createElement("a");
link.className = "delete item secondary-content";
link.innerHTML = "<i class=\" fa fa-remove\"></i>";

li.appendChild(link);

document.querySelector("ul.collection").appendChild(li);

console.log(li); */




// :::::::::::::::
// Removing and replacing elements
// :::::::::::::::

/* const newHeading = document.createElement("h2");

newHeading.id = "task-title";
newHeading.appendChild(document.createTextNode("Task List"));

const oldHeading = document.querySelector("#task-title");
const cardAction = document.querySelector(".card-action");

cardAction.replaceChild(newHeading, oldHeading);

const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

lis[0].remove();
list.removeChild(lis[2]);

const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add("test");
val = link.classList;
link.classList.remove("test");

val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
link.setAttribute("title", "Google");
val = link.hasAttribute("title");
link.removeAttribute("title");
val = link;

console.log(val); */




// ::::::::::::::::
// Event Listeners & The Event Object
// ::::::::::::::::

/* document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e){
    console.log("Clicked");
    e.preventDefault();

    let val;

    val = e;

    val = e.target;
    val = e.target.className;
    val = e.target.classList;
    val = e.type;
    val = e.timeStamp;
    val = e.clientY;
    val = e.clientX;
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
} */




// ::::::::::::::::::::
// Mouse events
// ::::::::::::::::::::

/* const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// clearBtn.addEventListener("click", runEvent);
// clearBtn.addEventListener("dblclick", runEvent);
// clearBtn.addEventListener("mousedown", runEvent);
// clearBtn.addEventListener("mouseup", runEvent);
// card.addEventListener("mouseenter", runEvent);
// card.addEventListener("mouseleave", runEvent);
// card.addEventListener("mouseover", runEvent);
// card.addEventListener("mouseout", runEvent);
card.addEventListener("mousemove", runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;

    e.preventDefault();
} */





// ::::::::::::::::::::
// Keyboard and input events
// ::::::::::::::::::::

/* const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");

taskInput.value = "";

// form.addEventListener("submit", runEvent);
// taskInput.addEventListener("input", runEvent);

// taskInput.addEventListener("input", runEvent);
select.addEventListener("change", runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(e.target.value);
    //heading.innerText = e.target.value;

    //console.log(taskInput.value);
    //e.preventDefault();
} */




// :::::::::::::::::::::
// Event bubbling
// :::::::::::::::::::::

/* document.querySelector(".card-title").addEventListener("click", function(){
    console.log("card title");
});

document.querySelector(".card-content").addEventListener("click", function(){
    console.log("card content");
});

document.querySelector(".card").addEventListener("click", function(){
    console.log("card");
});

document.querySelector(".col").addEventListener("click", function(){
    console.log("col");
}); */



// :::::::::::::::::::::
// Event delegation
// :::::::::::::::::::::

// const deleteItem = document.querySelector(".delete-item");

// deleteItem.addEventListener("click", delItem);

/* document.body.addEventListener("click", delItem);

function delItem(e) {
    
    // if(e.target.parentElement.className === "delete-item secondary-content"){
    //     console.log("delete item");
    // }

    if(e.target.parentElement.classList.contains("delete-item")){
        console.log("delete item");
        e.target.parentElement.parentElement.remove();
    }
} */




// ::::::::::::::::::::
// Local and session storage
// ::::::::::::::::::::

// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");

// sessionStorage.setItem("name", "Beth");

// localStorage.removeItem("name");

// name = localStorage.getItem("name");
// age = localStorage.getItem("age");

// localStorage.clear();

// console.log(name, age);

document.querySelector("form").addEventListener("submit", function(e){
    const task = document.getElementById("task").value;
    let tasks;

    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("Task saved");

    e.preventDefault;
});

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach(function(task){
    console.log(task);
});