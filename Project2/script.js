let openbtn = document.querySelector('#open-btn');
let closebtn = document.getElementById('close-btn');
let modelcontainer = document.querySelector('#model-container');

openbtn.addEventListener('click', function() {
    modelcontainer.style.display = 'block';
});

closebtn.addEventListener('click', function() {
    modelcontainer.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if(e.target==modelcontainer) {
        modelcontainer.style.display = 'none';
    }
});