// =========================================
// HERPOWER - QUIZ
// =========================================

const questions = [
    {
        question: "Which Philippine law is known as the Magna Carta of Women?",
        options: [
            "Republic Act No. 9710",
            "Republic Act No. 7877",
            "Republic Act No. 11210",
            "Republic Act No. 11313"
        ],
        answer: 0
    },

    {
        question: "What is one major goal of women empowerment?",
        options: [
            "Limiting women's participation",
            "Promoting equal opportunities",
            "Reducing access to education",
            "Restricting women's leadership"
        ],
        answer: 1
    },

    {
        question: "Which area is an important part of women's empowerment?",
        options: [
            "Education",
            "Exclusion",
            "Discrimination",
            "Isolation"
        ],
        answer: 0
    },

    {
        question: "Which Philippine law addresses gender-based sexual harassment in public spaces and other covered settings?",
        options: [
            "RA 9710",
            "RA 11210",
            "RA 11313",
            "RA 7877"
        ],
        answer: 2
    },

    {
        question: "Why is women's participation in leadership important?",
        options: [
            "It prevents other people from participating",
            "It gives women opportunities to contribute to decisions",
            "It removes the need for equal rights",
            "It limits community development"
        ],
        answer: 1
    },

    {
        question: "Which of the following can help promote gender equality?",
        options: [
            "Supporting equal opportunities",
            "Encouraging stereotypes",
            "Ignoring discrimination",
            "Limiting education"
        ],
        answer: 0
    },

    {
        question: "Who became the Philippines' first Olympic gold medalist?",
        options: [
            "Lea Salonga",
            "Maria Ressa",
            "Hidilyn Diaz",
            "Fe del Mundo"
        ],
        answer: 2
    },

    {
        question: "What is a simple way to support women empowerment?",
        options: [
            "Discourage women from leadership",
            "Support education and equal opportunities",
            "Ignore women's rights",
            "Promote gender stereotypes"
        ],
        answer: 1
    }
];


// =========================================
// QUIZ VARIABLES
// =========================================

let currentQuestion = 0;
let score = 0;
let answered = false;


// =========================================
// GET HTML ELEMENTS
// =========================================

const questionNumber = document.getElementById("questionNumber");
const scoreDisplay = document.getElementById("scoreDisplay");
const questionText = document.getElementById("questionText");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
const nextButton = document.getElementById("nextButton");
const quizProgressBar = document.getElementById("quizProgressBar");

const quizWrapper = document.getElementById("quizWrapper");
const quizResult = document.getElementById("quizResult");

const finalScore = document.getElementById("finalScore");
const resultMessage = document.getElementById("resultMessage");
const restartButton = document.getElementById("restartButton");


// =========================================
// LOAD QUESTION
// =========================================

function loadQuestion() {

    answered = false;

    nextButton.disabled = true;

    quizFeedback.textContent = "";
    quizFeedback.className = "quiz-feedback";

    const question = questions[currentQuestion];

    questionNumber.textContent =
        "Question " + (currentQuestion + 1) +
        " of " + questions.length;

    scoreDisplay.textContent =
        "Score: " + score;

    questionText.textContent =
        question.question;

    quizOptions.innerHTML = "";


    // Progress bar
    const progress =
        (currentQuestion / questions.length) * 100;

    quizProgressBar.style.width =
        progress + "%";


    // Create answer buttons
    question.options.forEach(function(option, index) {

        const button =
            document.createElement("button");

        button.className = "quiz-option";

        button.textContent = option;

        button.addEventListener("click", function() {

            selectAnswer(index);

        });

        quizOptions.appendChild(button);

    });
}


// =========================================
// SELECT ANSWER
// =========================================

function selectAnswer(selectedIndex) {

    if (answered) {
        return;
    }

    answered = true;

    const question = questions[currentQuestion];

    const options =
        document.querySelectorAll(".quiz-option");


    // Disable all options
    options.forEach(function(button) {

        button.disabled = true;

    });


    // Correct answer
    if (selectedIndex === question.answer) {

        score++;

        options[selectedIndex].classList.add("correct");

        quizFeedback.textContent =
            "Correct! Great job.";

        quizFeedback.classList.add(
            "correct-feedback"
        );

    }

    // Wrong answer
    else {

        options[selectedIndex].classList.add("wrong");

        options[question.answer].classList.add("correct");

        quizFeedback.textContent =
            "The correct answer is: " +
            question.options[question.answer];

        quizFeedback.classList.add(
            "wrong-feedback"
        );
    }


    scoreDisplay.textContent =
        "Score: " + score;

    nextButton.disabled = false;
}


// =========================================
// NEXT QUESTION
// =========================================

nextButton.addEventListener("click", function() {

    currentQuestion++;


    if (currentQuestion < questions.length) {

        loadQuestion();

    }

    else {

        showResult();

    }

});


// =========================================
// SHOW RESULT
// =========================================

function showResult() {

    quizWrapper.style.display = "none";

    quizResult.classList.add("show");

    finalScore.textContent = score;


    const percentage =
        (score / questions.length) * 100;


    if (percentage === 100) {

        resultMessage.textContent =
            "Excellent! You have a strong understanding of women empowerment and equal opportunities.";

    }

    else if (percentage >= 75) {

        resultMessage.textContent =
            "Great work! You have a good understanding of the topic.";

    }

    else if (percentage >= 50) {

        resultMessage.textContent =
            "Good effort! Explore HERPOWER to learn more.";

    }

    else {

        resultMessage.textContent =
            "Keep learning! Every new piece of knowledge is a step toward change.";

    }
}


// =========================================
// RESTART QUIZ
// =========================================

restartButton.addEventListener("click", function() {

    currentQuestion = 0;

    score = 0;

    quizResult.classList.remove("show");

    quizWrapper.style.display = "block";

    loadQuestion();

});


// =========================================
// START QUIZ
// =========================================

loadQuestion();