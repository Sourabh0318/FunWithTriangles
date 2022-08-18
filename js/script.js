const inputs = document.querySelectorAll('.angle-input');
const checkBtn = document.querySelector('#btn');
const outputEl = document.querySelector('#output');

function calculateSum(angle1, angle2, angle3){
    const sumOfAngle = angle1 + angle2 + angle3;
    return sumOfAngle;
}

function isTriangle(){
    const sumOfAngle = calculateSum(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngle === 180){
        outputEl.innerText = "Yay! It forms a Triangle";
    }else{
        outputEl.innerText = "Oops! It doesn't form a triangle";
    }
}

checkBtn.addEventListener('click', isTriangle);