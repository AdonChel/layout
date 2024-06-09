'use strict'

const questions = document.querySelectorAll(".question-header");
const question = document.querySelectorAll('.question');

for (let i = 0; i< questions.length; i++) {
    questions[i].addEventListener("click", function () {
        const clickedAnswer = questions[i].parentElement.querySelector(".answer");
        questions[i].classList.toggle("question-header--active");
        question[i].classList.toggle("question--active");
        clickedAnswer.classList.toggle("answer--visible");

        if (clickedAnswer.classList.contains("answer--visible")) {
            clickedAnswer.style.maxHeight = clickedAnswer.scrollHeight + "px";
        } else {
            clickedAnswer.style.maxHeight = null;
        }
    });
}

