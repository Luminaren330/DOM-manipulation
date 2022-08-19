// get element by id
const title = document.getElementById("main-heading");
console.log(title);

// get element by class name
const listItem = document.getElementsByClassName("list-items"); 
console.log(listItem);

// get element by tag name
const tagItem = document.getElementsByTagName("li"); 
console.log(tagItem);

// query selector - bierze tylko piwerszy div
const container = document.querySelector("div");
console.log(container);

// query selectorALL - bierze wszystkie divy
const containerAll = document.querySelectorAll("div");
console.log(containerAll);