const title = document.querySelector('#main-heading');
title.style.color = "red"; // mozna zmieniać jak w CSS
console.log(title);

const listItems = document.querySelectorAll('.list-items');
// dla wszystkich trzeba zrobić tak
for (var i = 0; i < listItems.length; i++) { 
    listItems[i].style.color = "green";
}
console.log(listItems);

// create
const ul = document.querySelector('ul');
const li = document.createElement('li');
li.innerText = 'DC';
// li.setAttribute('class', 'list-items');
// lub
li.classList.add('list-items');
// li.removeAttribute('class');
// lub całkowicie usunąć
// li.remove();
ul.append(li);
//  rodzice
console.log(ul.parentElement.parentElement);
// console.log(ul.parentNode.parentNode);
// console.log(ul.childNodes); // 12 bo spacje pomiędzy elementami li
// lub zwraca tylko elementy
console.log(ul.children);
console.log(ul.childElementCount); // 6 -tylko elementy
// lub
// console.log(ul.children.length);

ul.childNodes[1].style.backgroundColor = 'lime';

// analogicznie działa sibling