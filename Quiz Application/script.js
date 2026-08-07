const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language"
        ],
        correct: 0
    },

    {
        question: "Which language is used for styling web pages?",
        answers: [
            "HTML",
            "C++",
            "CSS",
            "Python"
        ],
        correct: 2
    },

    {
        question: "Which keyword declares a variable?",
        answers: [
            "print",
            "let",
            "scanf",
            "cout"
        ],
        correct: 1
    },

    {
        question: "Which company created JavaScript?",
        answers: [
            "Google",
            "Microsoft",
            "Netscape",
            "Apple"
        ],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const nextButton = document.getElementById("next-btn");
const progress = document.getElementById("progress");
const message = document.getElementById("message");

function loadQuestion() {

    message.textContent = "";

    const q = questions[currentQuestion];

    progress.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionElement.textContent = q.question;

    optionButtons.forEach((button, index) => {

        button.textContent = q.answers[index];

        button.onclick = () => {

            optionButtons.forEach(btn => {
                btn.disabled = true;
            });

            if (index === q.correct) {
                score++;
                message.textContent = "✔ Correct answer!";
                message.style.color = "green";
            }

            else {
                message.textContent = "✖ Wrong answer!";
                message.style.color = "red";
            }
        };
    });

    optionButtons.forEach(btn => {
        btn.disabled = false;
    });
}

nextButton.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();
    }

    else {

        let stars = "";
        let finalMessage = "";

        if (score === 4) {
            stars = "⭐⭐⭐⭐⭐";
            finalMessage = "Excellent!";
        }

        else if (score === 3) {
            stars = "⭐⭐⭐⭐";
            finalMessage = "Very good!";
        }

        else if (score === 2) {
            stars = "⭐⭐⭐";
            finalMessage = "Good job!";
        }

        else if (score === 1) {
            stars = "⭐⭐";
            finalMessage = "Keep practising!";
        }

        else {
            stars = "⭐";
            finalMessage = "Don't give up!";
        }

        document.getElementById("quiz-box").innerHTML = `

            <div class="result-box">

                <h1>🎉 Congratulations!</h1>

                <h2>Your score: ${score}/${questions.length}</h2>

                <div class="stars">
                    ${stars}
                </div>

                <h2 class="result-message">
                    ${finalMessage}
                </h2>

                <br>

                <button class="restart-btn"
                    onclick="location.reload()">

                    Restart Quiz

                </button>

            </div>
        `;
    }
});

loadQuestion();