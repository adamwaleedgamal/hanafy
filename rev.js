let currentQuestion = 1;

function showQuestion(questionNumber) {
    document.querySelectorAll('.question').forEach((question) => {
        question.style.display = 'none';
    });

    document.getElementById(`q${questionNumber}`).style.display = 'block';
}

function nextQuestion() {
    if (currentQuestion < 3) { currentQuestion++; showQuestion(currentQuestion); }
} function prevQuestion() {
    if
        (currentQuestion > 1) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}


function submitQuiz() {
    let score = 0;

    for (let i = 1; i <= 3; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}" ]:checked`); if
            (selectedAnswer) { if (selectedAnswer.value === "yes") { score++; } }
    } const
        resultElement = document.getElementById("result"); resultElement.textContent = `Result: ${score} out of 3`;
}