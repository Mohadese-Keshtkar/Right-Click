// ................Slected events.................
const conTextMenu = document.querySelector(".container")
const shareMenu = document.querySelector(".share-menu")

// Right click event
document.addEventListener("contextmenu", (e) => {
    // Prevent page refresh
    e.preventDefault()

    // Right click location and show x axis
    let x = e.offsetX;
    // Right click location and show y axis
    let y = e.offsetY;

    // The amount of page opened by width
    let winWidth = window.innerWidth;
    //The value of the page opened from height
    let winHeight = window.innerHeight;

    // The main width of the display menu
    let cmWidth = conTextMenu.offsetWidth;
    // The main height of the display menu
    let cmHeight = conTextMenu.offsetHeight;

    // If the click on the width axis of the page is less than the main width of the menu (300px):
    // show the request, otherwise show the value of the x axis
    x = x > winWidth - cmWidth ? winWidth - cmWidth : x
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y

    if (x > (winWidth - cmWidth - shareMenu.offsetWidth)) {
        shareMenu.style.left = "-170px"
    } else {
        shareMenu.style.left = "260px"
    }

    conTextMenu.style.left = `${x}px`
    conTextMenu.style.top = `${y}px`
    conTextMenu.style.visibility = "visible"
})

// If clicked, hide the menu
document.addEventListener("click", () => {
    conTextMenu.style.visibility = "hidden"
})

