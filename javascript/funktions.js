'use strict';

let correctCount = 0;
let incorrectCount = 0;

function getRandomIntNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomizeNumbers() {
    const num1 = getRandomIntNumberInRange(1, 10);
    const num2 = getRandomIntNumberInRange(1, 10);
    const questionElement = document.getElementById('question');
    questionElement.textContent = num1 + ' + ' + num2 + ' = ';
    return num1 + num2;
}

function updateCounts(isCorrect) {
    if (isCorrect) {
        correctCount++;
        document.getElementById('correctCount').textContent = correctCount;
    } else {
        incorrectCount++;
        document.getElementById('incorrectCount').textContent = incorrectCount;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    randomizeNumbers();

    document.getElementById('checkAnswer').addEventListener('click', () => {
        const userAnswer = parseInt(document.getElementById('userAnswer').value);
        const correctAnswer = randomizeNumbers();
        const isCorrect = userAnswer === correctAnswer;
        if (isCorrect) {
            alert('Correct!');
        } else {
            alert('Incorrect!');
        }
        updateCounts(isCorrect);
    });
});
