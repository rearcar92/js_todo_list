const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const TODO = 'todos'

let toDos = [];

function deleteTodo() {
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleanTodo = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanTodo;
    saveTodo();
};

function saveTodo() {
    localStorage.setItem(TODO, JSON.stringify(toDos));
};

function parintTodo(currentValue) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.addEventListener("click", deleteTodo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    btn.innerText = "x";
    span.innerText = currentValue;
    li.id = newId;
    li.appendChild(btn);
    li.appendChild(span);
    todoList.appendChild(li);
    const todoObj = {
        text: currentValue,
        id: newId
    };
    toDos.push(todoObj);
    saveTodo();
};

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    parintTodo(currentValue);
    todoInput.value = "";
};

function addTodo() {
    todoForm.addEventListener("submit", handleSubmit);
};

function eachTodo(toDo) {
    parintTodo(toDo.text);
};

function loadTodo() {
    const loadedTodo = localStorage.getItem(TODO);
    if(loadedTodo !== null) {
        const parsedTodo = JSON.parse(loadedTodo);
        parsedTodo.forEach(eachTodo);
    }
};

function init() {
    loadTodo();
    addTodo();
};

init();