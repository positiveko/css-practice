const plusBtn = document.querySelector('.button');
const counter = document.querySelector('.counter');
let count = 0;

plusBtn.addEventListener('click', (event) => { 
    event.preventDefault();
    count++;
    counter.innerText = count;
});