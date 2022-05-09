import "../assets/styles/style.scss";
import "../assets/styles/css.css";
import { addClassCapsLock, addCapsLock, changeCapsLock } from "./capsLock";

const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");

const arrWithKeyCode = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
    "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
    "ShiftLeft", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "ShiftRight",
    "Control", "Alt", "Space", "◄", "▼", "►"];

const arrWithKeyCodeRu = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab",
    "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\",
    "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
    "ShiftLeft", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "ShiftRight",
    "Control", "Alt", "Space", "◄", "▼", "►"];

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

const h1 =document.createElement("h1")
h1.classList.add("class-h1")
h1.textContent="Virtual Keyboard (simple)"
body.prepend(h1);


const p = document.createElement("p")
p.classList.add("class-p")
p.textContent="Keyboard for Windows, change languages: ShiftLeft+Alt"
body.append(p);

let isWhichLang = false;
// localStorage.setItem('isWhichLang', isWhichLang)
// let isWhichLang = localStorage.getItem('isWhichLang') ? localStorage.getItem('isWhichLang') : false;

function getLocalStorage() {
    if (localStorage.getItem(isWhichLang) ) {
         isWhichLang = localStorage.getItem(isWhichLang)
        // newAddKeyBoard()
    } 
}
window.addEventListener('load', getLocalStorage)

const addKeyBoard = function (arg) {
    let button = "";
    for (let i = 0; i < arg.length; ++i) {
        if (i === 13 || i === 27 || i === 40 || i === 53) {
            button += "<div class='clear-button'> </div>";
        }
        button += `<div class="key" data-name="${arg[i]}" >${arg[i]}</div>`;
    }
    const wrapper = document.querySelector(".wrapper");
    wrapper.innerHTML = button;
}

const newAddKeyBoard = function () {
    if (!isWhichLang) {
        let arg = arrWithKeyCode.slice();
        addKeyBoard(arg)
        isWhichLang = true;
        localStorage.setItem('isWhichLang', isWhichLang)
    }
    else {
        let arg = arrWithKeyCodeRu.slice();
        addKeyBoard(arg)
        isWhichLang = false;
         localStorage.setItem('isWhichLang', isWhichLang)
    }
}
newAddKeyBoard();
addClassCapsLock();




let allButtons = document.querySelectorAll(".key");
// let arg;
const downKeyboard = function (arg) {

    // console.log("i", isWhichLang)
    const allButtons = document.querySelectorAll(".key");
    allButtons.forEach((item) => item.classList.remove("active"));

    return function (e) {
        const button = document.querySelector(`.key[data-name="${e.key}"]`);
        const otherButton = document.querySelector(`.key[data-name="${e.code}"]`);
        isWhichLang === true ? arg = arrWithKeyCode.slice() : arg = arrWithKeyCodeRu.slice()

        console.log(arg)

        arg.forEach((item) => {
            if (item === e.key) {
                console.log("item", item),
                    console.log("e.key", e.key),
                    button.classList.add("active");
            }
            if (e.key === "CapsLock") {
                button.classList.toggle("key__active");
                changeCapsLock();
            }
            else if (item.toUpperCase() === e.key) {
                button.classList.add("active");
            } else if (e.key === "ArrowLeft") {
                document.querySelector("body > div > div:nth-child(61)").classList.add("active");
            } else if (e.key === "ArrowRight") {
                document.querySelector("body > div > div:nth-child(63)").classList.add("active");
            } else if (e.key === "ArrowUp") {
                document.querySelector("body > div > div:nth-child(55)").classList.add("active");
            } else if (e.key === "ArrowDown") {
                document.querySelector("body > div > div:nth-child(62)").classList.add("active");
            } else if (e.key === "Tab") {
                e.preventDefault();
                textarea.value += " ";
            }
            else if (e.key === "Alt") {
                e.preventDefault();
            }

            else if (item === e.code) {
                otherButton.classList.add("active");
            }
        });
    }
};

const downKeyboardWithClosure = downKeyboard()
document.addEventListener("keydown", downKeyboardWithClosure);

const removeClass = function () {
    const allButtons = document.querySelectorAll(".key");
    setTimeout(() => allButtons.forEach((item) => item.classList.remove("active")), 250);
};
document.addEventListener("keyup", removeClass);
 allButtons = document.querySelectorAll(".key");
allButtons.forEach((elem) => {
    const allButtons = document.querySelectorAll(".key");
    elem.onclick = function () {
        allButtons.forEach((item) => {
            item.classList.remove("active");
        });
        textarea.focus();

        const newButton = elem.getAttribute("data-name");
        elem.classList.add("active");

        if (newButton === "Backspace") {
            textarea.value = textarea.value.substring(0, textarea.value.length - 1);
        } else if (newButton === "Enter") {
            textarea.value += "\n";
        } else if (newButton === "ShiftRight" || newButton === "ShiftLeft" || newButton === "Alt" || newButton === "Control") {
            textarea.value += "";
        } else if (newButton === "Enter") {
            textarea.value += "\n";
        } else if (newButton === "Space") {
            textarea.value += " ";
        } else if (newButton === "CapsLock") {
            changeCapsLock();
        } else if (newButton === "Tab") {
            textarea.value += " ";
        }
        else if (newButton === "Alt") {
        }
        else {
            console.log(newButton);
            textarea.value += newButton;
        }
        removeClass();
    };
});

const capsLock = document.querySelector("body > div > div.key.key__activalable");

capsLock.addEventListener("keydown", addCapsLock);
capsLock.addEventListener("click", addCapsLock);

function runOnKeys(func, ...args) {
    let arrChars = []; // массив одновременно нажатых клавиш

    document.addEventListener("keydown", (event) => {
        if (event.repeat) return; // повторы не обрабатываем
        arrChars.push(event.code); // запоминаем код нажатой и пока еще не отпущенной клавиши
    });

    document.addEventListener("keyup", (event) => {
        if (arrChars.length == 0) return; // нечего обрабатывать, завершаем функцию
        let runFunc = true;
        for (let arg of args) {
            if (!arrChars.includes(arg)) {
                runFunc = false;
                break;
            }
        }
        if (runFunc) {
            func()
            addClassCapsLock();
        }; // если нажаты, запускаем заданный код
        arrChars.length = 0; // очистим массив одновременно нажатых клавиш
    });
}


runOnKeys(newAddKeyBoard, "ShiftLeft", "AltLeft");

// LocalStorage

// function setLocalStorage() {
//     localStorage.setItem('isWhichLang', isWhichLang)
//   }
//   window.addEventListener('beforeunload', setLocalStorage)