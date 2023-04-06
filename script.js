let number = 0;

function start() {
    document.getElementById("button1").addEventListener(click, increase(), false);
}

function increase() {
    
}

window.addEventListener("load", start(), false);

function home() {
    window.location = "http://127.0.0.1:5500/Home.html";
}
function services() {
    window.location = "http://127.0.0.1:5500/Services.html";
}
function about() {
    window.location = "http://127.0.0.1:5500/About.html";
}
function market() {
    window.location = "http://127.0.0.1:5500/Market.html";
}
function game() {
    window.location = "http://127.0.0.1:5500/tic.html";
}
function review() {
    window.location = "http://127.0.0.1:5500/Reviews.html";
}


// JavaScript function to increment button count
function incrementCount(buttonId) {
    // Get the button element by its ID
    var button = document.getElementById(buttonId);
    // Get the current count from the button's data attribute
    var count = parseInt(button.getAttribute('data-count')) || 0;
    // Increment the count
    count++;
    // Update the button's data attribute with the new count
    button.setAttribute('data-count', count);
    // Update the button's text to display the count
    button.textContent = count;
}

function decrementCount(buttonId) {
    var button = document.getElementById(buttonId);
    var count = parseInt(button.getAttribute('data-count')) || 0;
    count--;
    button.setAttribute('data-count', count);
    button.textContent = count;
}

