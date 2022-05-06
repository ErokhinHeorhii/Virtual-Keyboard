import "../assets/styles/style.scss";
import "../assets/styles/css.css";
import { addClassCapsLock, addCapsLock, changeCapsLock } from "./capsLock.js";

const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");

const arrWithKeyCode = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
    "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
    "ShiftLeft", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "ArrowUp", "ShiftRight",
    "Control", "Alt", "Space", "<", "ArrowDown", ">"];

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
        if (i === 13 || i === 27 || i === 40 || i === 53) {
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
        if (e.key === "CapsLock") {
            button.classList.toggle("key__active");
            changeCapsLock();
        }
        else if (item === e.key) {
            button.classList.add("active");
        } else if (item === e.code) {
            otherButton.classList.add("active");
        }

    });
};

// document.onkeydown = function (e){
//     const button = document.querySelector(`.key[data-name="${e.key}"]`);
//      if (e.key === "CapsLock"){
//         button.classList.toggle("key__active");
//     }
// }

const removeClass = function () {
    setTimeout(() => allButtons.forEach((item) => item.classList.remove("active")), 250);
};

document.addEventListener("keyup", removeClass);

allButtons.forEach((elem) => {
    elem.onclick = function () {
        allButtons.forEach((item) => {
            item.classList.remove("active");
        });
        textarea.focus();

        const newButton = this.getAttribute("data-name");
        this.classList.add("active");

        if (this.getAttribute("data-name") === "Backspace") {
            textarea.value = textarea.value.substring(0, textarea.value.length - 1);
            console.log(2);
        } else if (this.getAttribute("data-name") === "Enter") {
            textarea.value += "\n";
        } else if (this.getAttribute("data-name") === "ShiftRight" || this.getAttribute("data-name") === "ShiftLeft") {
            textarea.value += "";
        } else if (this.getAttribute("data-name") === "Enter") {
            textarea.value += "\n";
        } else if (this.getAttribute("data-name") === "Space") {
            textarea.value += " ";
        } else if (this.getAttribute("data-name") === "CapsLock") {
            changeCapsLock();
        } else if (newButton === "CapsLock") {
            changeCapsLock();
        } else {
            console.log(newButton);
            textarea.value += newButton;
        }
        removeClass();
    };
});

const capsLock = document.querySelector("body > div > div.key.key__activalable");

capsLock.addEventListener("keydown", addCapsLock);
capsLock.addEventListener("click", addCapsLock);
