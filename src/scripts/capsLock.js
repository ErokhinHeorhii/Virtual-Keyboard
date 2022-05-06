

function addClassCapsLock() {
    const keyboards = document.querySelectorAll('.key')

    keyboards.forEach(item => {
        if ((item.getAttribute("data-name")) === "CapsLock") {
            item.classList.add('key__activalable')
        }

    })
}


const addCapsLock = function(e) {
    if ((e.target.getAttribute("data-name")) === "CapsLock" ) {
        e.target.classList.toggle("key__active");
    }
}

const changeCapsLock = function () {
    const allButtons = document.querySelectorAll(".key");
    allButtons.forEach((item) => {
        if ((/^[a-z]/).test(item.getAttribute("data-name")) ) {
            item.innerHTML = (item.getAttribute("data-name")).toUpperCase();
            item.setAttribute("data-name",item.getAttribute("data-name").toUpperCase() )

        } else if ((/^[A-Z]$/).test(item.getAttribute("data-name")) ) {
            item.innerHTML = (item.getAttribute("data-name")).toLowerCase();
            item.setAttribute("data-name",item.getAttribute("data-name").toLowerCase() )
        }
    });
}




export { addClassCapsLock, addCapsLock, changeCapsLock}