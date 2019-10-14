const body = document.querySelector("body");

const PAGE = 5;

function parintImg(number) {
    const image = new Image();
    image.src = `../images/${number + 1}.jpg`;
    image.classList.add("bgImg");
    body.prepend(image);
};

function randomNumber() {
    const number = Math.floor(Math.random() * PAGE);
    return number;
};

function init() {
    const number = randomNumber();
    parintImg(number);
};

init();