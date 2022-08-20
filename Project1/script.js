let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let btn = document.querySelector('#new-quote');
let btnadd = document.querySelector('#add-quote');
let container = document.querySelector('.container');
let condition = true;

const quotes = [{
    quote: "You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.",
    person: "Abraham Lincoln"
}, {
    quote: "All the world’s a stage, and all the men and women merely players.",
    person: "William Shakespeare"
}, {
    quote: "Ask not what your country can do for you; ask what you can do for your country.",
    person: "John Kennedy"
}, {
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    person: "Thomas Edison"
}, {
    quote: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    person: "Martin Luther King"
}, {
    quote: "If at first you don’t succeed, try, try again.",
    person: "W. E. Hickson"
}, {
    quote: "If you are going through hell, keep going.",
    person: "Winston Churchill"
}, {
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    person: "Albert Einstein"
}, {
    quote: "That’s one small step for a man, a giant leap for mankind.",
    person: "Neil Armstrong"
}, {
    quote: "Three can keep a secret, if two of them are dead.",
    person: "Benjamin Franklin"
}]

function AddNewQuote1() {
    if (condition)  { 
    var quote1 = document.createElement("input");
    quote1.type="quote";
    quote1.className="text-field";
    quote1.placeholder = "Quote";

    var author = document.createElement("input");
    author.type="quote";
    author.className="text-field";
    author.placeholder = "Author";

    var submit = document.createElement("button");
    submit.innerHTML = "Add"
    submit.id = "add";

    container.appendChild(quote1);
    container.appendChild(author);
    container.appendChild(submit);

    submit.addEventListener("click", function() {

    let newquote = {quote: quote1.value, person: author.value}
    quotes.push(newquote);
    container.removeChild(submit);
    container.removeChild(author);
    container.removeChild(quote1);
    condition=true;
    console.log(condition);
    console.log(quotes);
    });
    }
    condition=false;
}

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
