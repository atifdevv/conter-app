let count = 0;

// Increase counter
function increase() {
    count++;
    document.getElementById("count").innerText = count;
}

// Decrease counter
function decrease() {
    count--;
    document.getElementById("count").innerText = count;
}

// Reset counter
function reset() {
    count = 0;
    document.getElementById("count").innerText = count;
}
