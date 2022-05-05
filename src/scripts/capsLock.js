

function addClassCapsLock() {
    const keyboards = document.querySelectorAll('.key')

    keyboards.forEach(item => {
        if ((item.getAttribute("data-name")) === "CapsLock") {
            item.classList.add('key__activalable')
        }

    })
}

let isOnCapsLuck = false;
const allButtons = document.querySelectorAll(".key");

function addCapsLock(e) {
    if ((e.target.getAttribute("data-name")) === "CapsLock") {
      e.target.classList.toggle("key__active");
      isOnCapsLuck = true;
    }
    changeCapsLock();
  }
  
  function changeCapsLock() {
    allButtons.forEach((item) => {
      if ((/^[a-z]{1}/).test(item.getAttribute("data-name")) && isOnCapsLuck) {
        item.innerHTML = (item.getAttribute("data-name")).toUpperCase();
        isOnCapsLuck = false;
      } else if ((/^[a-z]{1}/).test(item.getAttribute("data-name")) && !isOnCapsLuck) {
        item.innerHTML = (item.getAttribute("data-name")).toLowerCase();
      }
    });
  }
  



export {addClassCapsLock, addCapsLock, changeCapsLock}