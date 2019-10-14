const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");
const greetingTitle = greeting.querySelector("h3");

const LS_NAME = 'name';
const SHOW = 'showing';

function saveGreeting(currentValue) {
    localStorage.setItem(LS_NAME, currentValue);
};

function handleForm(event) {
    event.preventDefault();
    const currentValue = input.value;
    parintGreeting(currentValue);
    saveGreeting(currentValue);
    input.value = "";
};

function askForm() {
    form.classList.add(SHOW);
    form.addEventListener("submit", handleForm);
};

function parintGreeting(name) {
    form.classList.remove(SHOW);
    greeting.classList.add(SHOW);
    greetingTitle.innerText = `Hello ${name}`;
};

function loadGreeting() {
    const loadedGreeting = localStorage.getItem(LS_NAME);
    if (loadedGreeting === null) {
        askForm();
    } else {
        parintGreeting(loadedGreeting);
    };
};

function init() {
    loadGreeting();
};

init();