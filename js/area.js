const inputs = document.querySelectorAll('.base-input');
const checkBtn = document.querySelector('#btn');
const output = document.querySelector('#output');

function calculation(base, height){
    const mathProblem = (base*height)/2;
    return mathProblem;
}

function calculateArea(){
    const mathProblem = calculation(Number(inputs[0].value), Number(inputs[1].value));
    output.innerText = "The area of the triangle is "+ mathProblem + " cm²"
}

checkBtn.addEventListener('click', calculateArea);