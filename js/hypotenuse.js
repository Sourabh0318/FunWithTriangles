const inputs = document.querySelectorAll('.side-input');
const calcBtn = document.querySelector('#btn');
const outputEl = document.querySelector('#output');

function calculateSumOfSquare(a, b){
    const sumOfSquare = a**2 + b**2;
    return sumOfSquare;
}

function calculateHypotenuse(){
    const sumOfSquare = calculateSumOfSquare(Number(inputs[0].value), Number(inputs[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
    outputEl.innerText = "The length of Hypotenuse is: " + lengthOfHypotenuse;
}

calcBtn.addEventListener('click', calculateHypotenuse);

