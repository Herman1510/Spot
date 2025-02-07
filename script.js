function checkAnswer() {
    let selectedAnswer = document.querySelector('input[name="answer"]:checked');
    let resultText = document.getElementById("result");

    if (!selectedAnswer) {
        resultText.innerHTML = "Please select an answer.";
        resultText.style.color = "red";
        return;
    }

    if (selectedAnswer.value === "c") {
        resultText.innerHTML = "Correct! These are squamous cells.";
        resultText.style.color = "green";
    } else {
        resultText.innerHTML = "Incorrect. The correct answer is C. Squamous cells.";
        resultText.style.color = "red";
    }
}
