// let firstValue = "";
// let operatorValue = "";
// let secondValue = "";
//
// function exampleFunction(event) {
//     let input = event.target.value;
//
//     if (firstValue === "") {
//       firstValue = input;
//     } else {
//         secondValue = input;
//     }
//     document.getElementById("unitOne").append(firstValue);
//     document.getElementById("unitTwo").append(secondValue);
//
// };


let firstValue = "";
let operatorValue = "";
let secondValue = "";
let result = "";

function exampleFunction(event) {
    let input = event.target.value;

    if (input === "+" || input === "-" || input === "*" || input === "/") {
        operatorValue = input;
        document.getElementById("unitOne").textContent = firstValue + " " + operatorValue;
    } else if (input === "=") {
        secondValue = document.getElementById("unitTwo").textContent;
        switch (operatorValue) {
            case "+":
                result = parseFloat(firstValue) + parseFloat(secondValue);
                break;
            case "-":
                result = parseFloat(firstValue) - parseFloat(secondValue);
                break;
            case "*":
                result = parseFloat(firstValue) * parseFloat(secondValue);
                break;
            case "/":
                result = parseFloat(firstValue) / parseFloat(secondValue);
                break;
        }
        document.getElementById("unitOne").textContent = result;
        firstValue = result;
        operatorValue = "";
        secondValue = "";
        result = "";
    } else if (input === "c") {
        firstValue = "";
        operatorValue = "";
        secondValue = "";
        result = "";
        document.getElementById("unitOne").textContent = "";
        document.getElementById("unitTwo").textContent = "";
    } else if (firstValue === "") {
        firstValue = input;
        document.getElementById("unitOne").textContent = firstValue;
    } else {
        secondValue += input;
        document.getElementById("unitTwo").textContent = secondValue;
    }
};
