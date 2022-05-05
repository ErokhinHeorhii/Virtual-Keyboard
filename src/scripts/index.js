import "../assets/styles/style.scss";
import "../assets/styles/css.css";
import { addClassCapsLock, addCapsLock, changeCapsLock } from "./capsLock.js";

const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");

const arrWithKeyCode = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
    "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
    "ShiftLeft", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "ShiftRight",
    "Space"];

document.onkeyup = function (e) {
    console.log(e);
};

const div = document.createElement("div");
div.classList.add("wrapper");
body.append(div);

const textarea = document.createElement("textarea");
textarea.classList.add("textarea");
textarea.setAttribute("placeholder", "Your text");
textarea.setAttribute("autofocus", "");
body.prepend(textarea);

// add keybords

function addKeyBoard() {
    let button = "";
    for (let i = 0; i < arrWithKeyCode.length; ++i) {
        if (i === 13 || i === 26 || i === 39 || i === 51) {
            button += "<div class='clear-button'> </div>";
        }
        button += `<div class="key" data-name="${arrWithKeyCode[i]}" >${arrWithKeyCode[i]}</div>`;
    }
    const wrapper = document.querySelector(".wrapper");
    wrapper.innerHTML = button;
}

addKeyBoard();
addClassCapsLock();

const allButtons = document.querySelectorAll(".key");

document.onkeydown = function (e) {
    const button = document.querySelector(`.key[data-name="${e.key}"]`);
    const otherButton = document.querySelector(`.key[data-name="${e.code}"]`);

    allButtons.forEach((item) => item.classList.remove("active"));

    arrWithKeyCode.forEach((item) => {
        if (item === e.key) {
            button.classList.add("active");
        } else if (item === e.code) {
            otherButton.classList.add("active");
        }
    });
};


function removeClass() {
    setTimeout(() => allButtons.forEach((item) => item.classList.remove("active")), 250);
}

document.addEventListener("keyup", removeClass);

allButtons.forEach((elem) => {
    elem.onclick = function () {
        allButtons.forEach((item) => {
            item.classList.remove("active");
        });
        const newButton = this.getAttribute("data-name");
        this.classList.add("active");
        if (this.getAttribute("data-name") === "Backspace") {
            textarea.value = textarea.value.substring(0, textarea.value.length - 1)
            console.log(2)
            
        }
        else  {
            console.log(newButton)
            textarea.value  += newButton
        }
        removeClass();
    };
});




const capsLock = document.querySelector(".key[data-name=\"CapsLock\"]");

capsLock.addEventListener("keydown", console.log(1));
capsLock.addEventListener("click", addCapsLock);
// capsLock.addEventListener('keydown', changeCapsLock)
// capsLock.addEventListener("click",changeCapsLock)
