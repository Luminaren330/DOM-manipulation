const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

addTask.addEventListener('click', function () { 

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let chceckBtn = document.createElement('button');
    chceckBtn.innerHTML = '<i class = " fa fa-solid  fa-check"></i>';
    chceckBtn.classList.add('checkTask');
    task.appendChild(chceckBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class = "fa fa-solid fa-trash fa-can"></i>';
    deleteBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn);

    if(inputTask.value =="") {
        alert('Please Enter a Task');
    } else {
        taskContainer.appendChild(task);
    }
    inputTask.value = "";

    chceckBtn.addEventListener('click', function() {

        chceckBtn.parentElement.style.textDecoration = 'line-through';
    });

    deleteBtn.addEventListener('click', function(e) {
        let target = e.target;

        target.parentElement.parentElement.remove();
    });
    
});