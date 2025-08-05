// get all boxes
const   boxes = document.querySelectorAll('.box');
//Get the button 
const   button = document.querySelector('#changeBox');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i<6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
button.addEventListener('click', () => {
    boxes.forEach(box => {
 box.style.backgroundColor = getRandomColor();
    });
})