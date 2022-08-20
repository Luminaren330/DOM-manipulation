let qoute = document.querySelector('.qoute');
let person = document.querySelector('.person');
let btn = document.querySelector('#new-quote');
let btnadd = document.querySelector('#add-quote');
let container = document.querySelector('.container');
let count = 0;

const qoutes = [{
    qoute: "You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.",
    person: "Abraham Lincoln"
}, {
    qoute: "All the world’s a stage, and all the men and women merely players.",
    person: "William Shakespeare"
}, {
    qoute: "Ask not what your country can do for you; ask what you can do for your country.",
    person: "John Kennedy"
}, {
    qoute: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    person: "Thomas Edison"
}, {
    qoute: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    person: "Martin Luther King"
}, {
    qoute: "If at first you don’t succeed, try, try again.",
    person: "W. E. Hickson"
}, {
    qoute: "If you are going through hell, keep going.",
    person: "Winston Churchill"
}, {
    qoute: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    person: "Albert Einstein"
}, {
    qoute: "That’s one small step for a man, a giant leap for mankind.",
    person: "Neil Armstrong"
}, {
    qoute: "Three can keep a secret, if two of them are dead.",
    person: "Benjamin Franklin"
}]

// function AddNewQoute1() {
//     if (count==0) { 
//     var qoute1 = document.createElement("input");
//     qoute1.type="Qoute";
//     qoute1.className="text-field";
//     qoute1.placeholder = "Qoute";
//     var author = document.createElement("input");
//     author.type="Qoute";
//     author.className="text-field";
//     author.placeholder = "Author";
//     var submit = document.createElement("button");
//     submit.innerHTML = "Add"
//     submit.id = "add";
//     container.appendChild(qoute1);
//     container.appendChild(author);
//     container.appendChild(submit);
//     submit.addEventListener("click", function(qoute1,author) {

//     });
//     }
//     count++;
// }

// let newqoute = {qoute: "Yes", person: "John"}
// qoutes.push(newqoute);
// console.log(qoutes);


btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * qoutes.length);
    qoute.innerText = qoutes[random].qoute;
    person.innerText = qoutes[random].person;
});
