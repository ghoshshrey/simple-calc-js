// script.js
// Function to append numbers and operators to the display
function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;// Add the clicked button's value to the display
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');

    try {
        // Handle division by zero error
        if (display.value.includes('/0')) {
            throw new Error("Cannot divide by zero");
        }
        display.value = eval(display.value);

    } catch (error) {
        display.value = error.message;
    }
}
