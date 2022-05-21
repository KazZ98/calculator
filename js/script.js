function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function percentage(num1, num2) {
    return (num1/100) * num2; 
}

function operate(operator, num1, num2) {
    let total;
    if (!operator) return num2
    if (operator === "+") return total = add(num1, num2);
    if (operator === "-") return total = subtract(num1, num2);
    if (operator === "*") return total = multiply(num1, num2);
    if (operator === "/") return total = divide(num1, num2);
    if (operator === "%") return total = percentage(num1, num2);
}

function createArray(string) {
    const array = string.split(" ");
    return array;
}

const digitsBtns = document.querySelectorAll(".digit");
const operatorBtns = document.querySelectorAll(".operator");
const userInput = document.querySelector("#dInput");
const userOutput = document.querySelector("#dOutput");
const resultBtn = document.querySelector("#equal");
const clearBtn = document.querySelector("#clear");
const dotBtn = document.querySelector("#dot");

digitsBtns.forEach(e => e.addEventListener("click", (e) => {
    if (userInput.textContent.charAt(0) === "0") {
        userInput.textContent = ""
    }
    userInput.textContent += `${e.target.value}`;
}));

operatorBtns.forEach(e => e.addEventListener("click", (e) => {
    const operator = e.target.value;
    userInput.textContent += ` ${operator} `;
}));

resultBtn.addEventListener("click", () => {
    let operator;
    const array = createArray(userInput.textContent);
    const result = array.reduce((total, num) => {
        let num1 = total;
        let num2;
        if (!parseFloat(num)) {
            operator = num;
            return total = num1;
        } else {
            num2 = parseFloat(num);
        }
        return total = operate(operator, num1, num2);
    }, 0);
    userOutput.textContent = result.toFixed(2);
});

clearBtn.addEventListener("click", () => {
    userInput.textContent = "0";
    userOutput.textContent = "0";
});

dotBtn.addEventListener("click", (e) => {
    if (userInput.textContent.lastIndexOf(".") >= 0) {
        userInput.textContent += "";
        if (userInput.textContent.lastIndexOf(" ") > userInput.textContent.lastIndexOf("."))
        userInput.textContent += `${e.target.value}`;
    } else {
        userInput.textContent += `${e.target.value}`;
    }
});