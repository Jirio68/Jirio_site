// --- Глобальные переменные ---
let revealRadius = 30; // Начальный радиус видимой области (в %)
const maxRadius = 100; // Максимальный радиус (полностью видимое изображение)
const step = 10; // Шаг увеличения радиуса
let revealCount = 0; // Счетчик кликов на кнопку "Показать больше"
const maxReveals = 3; // Максимальное количество кликов
const quizImage = document.getElementById("quiz-image");
const revealButton = document.getElementById("reveal-button");
const submitButton = document.getElementById("submit-button");
const answerInput = document.getElementById("answer-input");
const fireworksContainer = document.getElementById("fireworks");
const correctAnswer = "Darth Vader"; // Правильный ответ

// Обработка кнопки "Показать больше"
if (revealButton) {
    revealButton.addEventListener("click", () => {
        revealCount++;
        if (revealCount > maxReveals) {
            revealButton.disabled = true;
            revealButton.style.backgroundColor = "#ccc";
            revealButton.style.color = "#999";
            return;
        }
        revealRadius += step;
        if (revealRadius > maxRadius) revealRadius = maxRadius;
        quizImage.style.clipPath = `circle(${revealRadius}% at center)`;
    });
} else {
    console.error("The 'Show more' button was not found.");
}

// Обработка кнопки "Ответить"
submitButton.addEventListener("click", () => {
    const userAnswer = answerInput.value.trim();
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        fireworksContainer.style.display = "block";
        fireworksContainer.classList.add("firework-animation");
        setTimeout(() => {
            const resultContainer = document.createElement("div");
            resultContainer.style.textAlign = "center";
            const fullImage = document.createElement("img");
            fullImage.src = quizImage.src;
            fullImage.style.maxWidth = "50%";
            fullImage.style.height = "auto";
            const congratText = document.createElement("h2");
            congratText.textContent = "Amazing!";
            congratText.style.color = "#4caf50";
            congratText.style.marginTop = "20px";
            resultContainer.appendChild(fullImage);
            resultContainer.appendChild(congratText);
            quizImage.parentNode.replaceChild(resultContainer, quizImage);
            revealButton.style.display = "none";
            submitButton.style.display = "none";
            answerInput.style.display = "none";
            setTimeout(() => {
                window.location.href = "Quiz3.html";
            }, 2000);
        }, 2000);
    } else {
        alert("Wrong answer. Try again!");
    }
});