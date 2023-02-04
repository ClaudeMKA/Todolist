//SELECTEURS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector('#filter-todo')
console.log(filterOption)

// ECOUTEURS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("input",filterTodo)
// FUNCTIONS

function addTodo(event){
    if (todoInput.value == "") {

        event.preventDefault();

    } else {
    console.log('Hello')
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // Créer le li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //création d'un nouvel item
    const todo_icone = document.createElement("div");
     todo_icone.classList.add('todo_icone');
    todoDiv.appendChild(todo_icone);
    // Boutton check
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todo_icone.appendChild(completedButton);
    // Boutton Supprimer
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todo_icone.appendChild(trashButton);
    // Ajouter notre todo à notre todolist
    todoList.appendChild(todoDiv);
    console.log(todoList)
    todoInput.value="";
    }
}


function deleteCheck(e){
    const item = e.target
    //Delete Todo
    if (item.classList[0] === "trash-btn") {
        let todo2 = item.parentElement.parentElement;
        todo2.classList.add("fall");
        todo2.addEventListener('transitionend',function (){
            todo2.remove();
        })
        //todo2.remove();
    }
    // Check mark
    if (item.classList[0] === "complete-btn") {
        console.log('hello')
        let todo2 = item.parentElement.parentElement
        console.log(todo2);
        todo2.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todos= todoList.childNodes
    console.log(todos)
    todos.forEach(function (todos){
        switch (e.target.value){
            case "all":
                todos.style.display = "flex";
                break;
            case "completed":
                if (todos.classList.contains("completed")){
                    todos.style.display = "flex";
                } else {
                    todos.style.display = "none";
                }  break
            case "uncompleted":
                     if (!todos.classList.contains("completed")){
                         todos.style.display = "flex";
                     } else {
                         todos.style.display = "none";
                     } break
        }
    })
}