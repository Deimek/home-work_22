const divWrapper = document.querySelector('.wrapper');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

divWrapper.addEventListener('click', (event) => {
    const target = event.target;
    if (target === btn1) {
        divContent('btn1');
    } else if (target === btn2) {
        divContent('btn2');
    } else if (target === btn3) {
        divContent('btn3');
    }
})

const divMessage = document.createElement('div');
document.body.appendChild(divMessage);

function divContent(text) {
    console.log(text);
    divMessage.textContent = text;
    divMessage.style.color = 'blue';
    divMessage.style.fontSize = '60px';
}