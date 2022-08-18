const quizForm = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('#btn');
const outputEl = document.querySelector('#output');

const correctAnswer = ["90°", "right angled"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(value of formResults.values()){
        if(value === correctAnswer[index]){
            score++;
        }
        index++;
        outputEl.innerText = "Your score is: " + score;
    }
}

submitBtn.addEventListener('click', calculateScore);