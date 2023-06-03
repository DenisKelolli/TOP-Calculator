const sevenButton = document.querySelector(".seven");
const eightButton = document.querySelector(".eight");
const nineButton = document.querySelector(".nine");
const divideButton = document.querySelector(".divide");
const fourButton = document.querySelector(".four");
const fiveButton = document.querySelector(".five");
const sixButton = document.querySelector(".six");
const multiplyButton = document.querySelector(".multiply");
const oneButton = document.querySelector(".one");
const twoButton = document.querySelector(".two");
const threeButton = document.querySelector(".three");
const subtractButton = document.querySelector(".subtract");
const periodButton = document.querySelector(".period");
const zeroButton = document.querySelector(".zero");
const clearButton = document.querySelector(".clear");
const addButton = document.querySelector(".add");
const equalsButton = document.querySelector(".equals");

const topScreenDisplay = document.querySelector(".top_screen_display");
const bottomScreenDisplay = document.querySelector(".bottom_screen_display");

function addNumberToScreen(event) {
    let value = event.target.textContent;
    bottomScreenDisplay.textContent += value;
  }

function clearScreen(){
    bottomScreenDisplay.textContent = ""; 
}

function addition(event){
    let value = event.target.textContent;
    if (bottomScreenDisplay.textContent.includes("-") || bottomScreenDisplay.textContent.includes(".")
    || bottomScreenDisplay.textContent.includes("x") || bottomScreenDisplay.textContent.includes("/")) {
        return;
    }
    if(!bottomScreenDisplay.textContent.includes("+")){
        bottomScreenDisplay.textContent += value;
    }   
}

    

function division(event){
    let value = event.target.textContent;
    if (bottomScreenDisplay.textContent.includes("-") || bottomScreenDisplay.textContent.includes(".")
    || bottomScreenDisplay.textContent.includes("x") || bottomScreenDisplay.textContent.includes("+")) {
        return;
    }
    if(!bottomScreenDisplay.textContent.includes("/")){
        bottomScreenDisplay.textContent += value;
    }
}

function multiplication(event){
    let value = event.target.textContent;
    if (bottomScreenDisplay.textContent.includes("-") || bottomScreenDisplay.textContent.includes(".")
    || bottomScreenDisplay.textContent.includes("+") || bottomScreenDisplay.textContent.includes("/")) {
        return;
    }
    if(!bottomScreenDisplay.textContent.includes("x")){
        bottomScreenDisplay.textContent += value;
    }
}

function subtraction(event){
    let value = event.target.textContent;
    if (bottomScreenDisplay.textContent.includes("+") || bottomScreenDisplay.textContent.includes(".")
    || bottomScreenDisplay.textContent.includes("x") || bottomScreenDisplay.textContent.includes("/")) {
        return;
    }
    if(!bottomScreenDisplay.textContent.includes("-")){
        bottomScreenDisplay.textContent += value;
    }
}

function period(event){
    let value = event.target.textContent;
    if (bottomScreenDisplay.textContent.includes("-") || bottomScreenDisplay.textContent.includes("+")
    || bottomScreenDisplay.textContent.includes("x") || bottomScreenDisplay.textContent.includes("/")) {
        return;
    }
    if(!bottomScreenDisplay.textContent.includes(".")){
        bottomScreenDisplay.textContent += value;
    }
}

function operate(event){
    let textContentString = bottomScreenDisplay.textContent;
    let splitArray = [];
    let total = 0;
    if (textContentString.includes("+")){
        splitArray = textContentString.split("+");
        total = parseFloat(splitArray[0]) + parseFloat(splitArray[1]);
        bottomScreenDisplay.textContent = total;
    }
    else if(textContentString.includes("-")){
        splitArray = textContentString.split("-");
        total = parseFloat(splitArray[0]) - parseFloat(splitArray[1]);
        bottomScreenDisplay.textContent = total;
    }
    else if(textContentString.includes("x")){
        splitArray = textContentString.split("x");
        total = parseFloat(splitArray[0]) * parseFloat(splitArray[1]);
        bottomScreenDisplay.textContent = total;
    }
    else if(textContentString.includes("/")){
        splitArray = textContentString.split("/");
        total = parseFloat(splitArray[0]) / parseFloat(splitArray[1]);
        bottomScreenDisplay.textContent = total;
    }
}


sevenButton.addEventListener("click", addNumberToScreen);
eightButton.addEventListener("click", addNumberToScreen);

nineButton.addEventListener("click", addNumberToScreen);
fourButton.addEventListener("click", addNumberToScreen);
fiveButton.addEventListener("click", addNumberToScreen);
sixButton.addEventListener("click", addNumberToScreen);
oneButton.addEventListener("click", addNumberToScreen);
twoButton.addEventListener("click", addNumberToScreen);
threeButton.addEventListener("click", addNumberToScreen);
periodButton.addEventListener("click", period);
zeroButton.addEventListener("click", addNumberToScreen);

addButton.addEventListener("click", addition);
divideButton.addEventListener("click", division);
multiplyButton.addEventListener("click",multiplication );
subtractButton.addEventListener("click", subtraction);
clearButton.addEventListener("click",clearScreen);

equalsButton.addEventListener("click",operate);