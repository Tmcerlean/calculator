// Global variables
let initialEntry = '';
let nextEntry = '';
let selectedOperation = '';
let result = '';


// Display
const mainDisplay = document.querySelector('#calculatorscreen');


// Buttons
const numberButtons = document.querySelectorAll('.numberbutton');
const decimalButton = document.querySelector('.decimalbutton');
const mathButtons = document.querySelectorAll('.mathbutton');
const allClear = document.querySelector('.allclearbutton');
const clear = document.querySelector('.clearbutton');
const equals = document.querySelector('.equalsbutton');


// Main operate switch function
function operate() {
    switch (selectedOperation) {
        case 'add':
            return add(initialEntry, nextEntry);
        case 'subtract':
            return subtract(initialEntry, nextEntry);
        case 'multiply':
            return multiply(initialEntry, nextEntry);
        case 'divide':
            return divide(initialEntry, nextEntry);
        case 'modulus':
            return modulus(initialEntry, nextEntry);
        default:
            break;
    } 
}


// Math functions
function add(initialEntry, nextEntry) {
    if (result != '') {
        result = parseFloat(result, 10);
        a = result;
    }
    else {
        a = parseFloat(initialEntry, 10);
    }
    let b = parseFloat(nextEntry, 10);
    return a + b;
}

function subtract(a, b) {
    if (result != '') {
        result = parseFloat(result, 10);
        a = result;
    }
    else {
        a = parseFloat(initialEntry, 10);
    }
    return a - b;
}

function multiply(a, b) {
    if (result != '') {
        result = parseFloat(result, 10);
        a = result;
    }
    else {
        a = parseFloat(initialEntry, 10);
    }
    return a * b;
}

function divide(a, b) {
    if (result != '') {
        result = parseFloat(result, 10);
        a = result;
    }
    else {
        a = parseFloat(initialEntry, 10);
    }
    return a / b;
}

function modulus(a, b) {
    if (result != '') {
        result = parseFloat(result, 10);
        a = result;
    }
    else {
        a = parseFloat(initialEntry, 10);
    }
    return a % b;
}


// Function to store operation
function storeOperation(event) {
    selectedOperation = event.target.dataset.operation;
    // Clear the display
    mainDisplay.innerHTML = '';
}


// Function to add numbers to display
function addNumber(event) {
    if (!selectedOperation) {
        let number = event.target.dataset.number;
        let content = document.createTextNode(number);
        mainDisplay.appendChild(content);
        initialEntry += number;
    }
    else {
        let number = event.target.dataset.number;
        let content = document.createTextNode(number);
        mainDisplay.appendChild(content);
        nextEntry += number;
    }
}


// Function to add numbers via keyboard input
function keyboardAddNumber(event) {
    if (!selectedOperation) {
        if(event.keyCode === 48) {
            number = 0;
        }
        else if (event.keyCode === 49) {
            number = 1;
        }
        if(event.keyCode === 50) {
            number = 2;
        }
        else if (event.keyCode === 51) {
            number = 3;
        }
        if(event.keyCode === 52) {
            number = 4;
        }
        else if (event.keyCode === 53) {
            number = 5;
        }
        if(event.keyCode === 54) {
            number = 6;
        }
        else if (event.keyCode === 55) {
            number = 7;
        }
        if(event.keyCode === 56) {
            number = 8;
        }
        else if (event.keyCode === 57) {
            number = 9;
        }
        let content = document.createTextNode(number);
        mainDisplay.appendChild(content);
        initialEntry += number;
    }
    else {
        if(event.keyCode === 48) {
            number = 0;
        }
        else if (event.keyCode === 49) {
            number = 1;
        }
        if(event.keyCode === 50) {
            number = 2;
        }
        else if (event.keyCode === 51) {
            number = 3;
        }
        if(event.keyCode === 52) {
            number = 4;
        }
        else if (event.keyCode === 53) {
            number = 5;
        }
        if(event.keyCode === 54) {
            number = 6;
        }
        else if (event.keyCode === 55) {
            number = 7;
        }
        if(event.keyCode === 56) {
            number = 8;
        }
        else if (event.keyCode === 57) {
            number = 9;
        }
        let content = document.createTextNode(number);
        mainDisplay.appendChild(content);
        nextEntry += number;
    }
}


// Function to add decimal to display
function addDecimal(event) {
    if (!selectedOperation) {
        if (initialEntry.includes('.')) {
            return;
        }
        let decimal = '.';
        let content = document.createTextNode(decimal);
        mainDisplay.appendChild(content);
        initialEntry += decimal;
    }
    else {
        if (nextEntry.includes('.')) {
            return;
        }
        let decimal = '.';
        let content = document.createTextNode(decimal);
        mainDisplay.appendChild(content);
        nextEntry += decimal;
    }
}


// Function to fully clear display
function clearAllDisplay() {
    mainDisplay.innerHTML = '';
    initialEntry = '';
    nextEntry = '';
    selectedOperation = '';
    result = '';
}


// Function to clear display, but keep result and operator
function clearDisplayKeepResult() {
    mainDisplay.innerHTML = '';
    initialEntry = '';
    nextEntry = '';
}


// Function to remove one number from display
function deleteNumber() {
    initialEntry = initialEntry.slice(0, -1)
    mainDisplay.innerHTML = '';
    let newNumber = document.createTextNode(initialEntry);
    mainDisplay.appendChild(newNumber);
}


// Function to check validity of command
function testFunction() {
    if (initialEntry == '') {
        return false;
    }
}


// Event Listeners
numberButtons.forEach(numberButton => numberButton.addEventListener('click', addNumber));
decimalButton.addEventListener('click', addDecimal);
mathButtons.forEach(mathButton => mathButton.addEventListener('click', storeOperation));
allClear.addEventListener('click', clearAllDisplay);
clear.addEventListener('click', deleteNumber);
equals.addEventListener('click', () => {
    // Run function to check validity
    validity = testFunction();
    if (validity == false) {
        return;
    }
    // Generate the result into a variable
    result = operate();
    // Clear the display
    clearDisplayKeepResult();
    // Display the value into the text area
    let content = document.createTextNode(result);
    mainDisplay.appendChild(content);
})
document.addEventListener('keydown', keyboardAddNumber);