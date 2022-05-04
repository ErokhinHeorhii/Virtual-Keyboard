import html from "../index.html";

import "../assets/styles/style.scss";
import "../assets/styles/css.css";

const arrWithKeyCode = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
    "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
    "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "ShiftRight",
    "Space"];

document.onkeyup = function (e) {
    console.log(e)
}

function addKeyBoard() {
    let button = "";
    for (let i = 0; i < arrWithKeyCode.length; i++) {
        if (i === 13 || i === 26 || i === 39 || i === 51) {
            button += "<div class='clear-button'> </div>";
        }
        button += `<div class="key" data-name="${arrWithKeyCode[i]}" >${arrWithKeyCode[i]}</div>`;
    }
    document.querySelector(".wrapper").innerHTML = button;
}
addKeyBoard();


document.onkeydown = function (e) {
    let button = document.querySelector('.key[data-name="' + e.key + '"]')
    let otherButton = document.querySelector('.key[data-name="' + e.code + '"]')

    document.querySelectorAll('.key').forEach(item => item.classList.remove('active'))

    arrWithKeyCode.forEach(item => {

        if (item === e.key) {
            button.classList.add('active')
        } else if (item === e.code) {
            otherButton.classList.add('active')
        }
    })
}

document.onkeyup = function (e){
    setTimeout(()=>document.querySelectorAll('.key').forEach(item => item.classList.remove('active')), 250)
}




document.querySelectorAll('.key').forEach(item => {
    item.onclick = () => {
        document.querySelectorAll('.key').forEach(item => {
            item.classList.remove('active')
        })
let newButton =this.getAttribute('data-name')
this.classList.add('active')
console.log(newButton)
    }
})