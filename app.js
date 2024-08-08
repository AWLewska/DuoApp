// Key Stage 3 English Questions Data
const lessons = [
    {
        question: "Which of the following sentences uses a *simile*?",
        options: ["The sun was a golden ball.", "She sang like an angel.", "The wind whispered through the trees.", "His heart was a stone."],
        correctAnswer: "She sang like an angel."
    },
    {
        question: "What is the meaning of the word *'melancholy'*?",
        options: ["Happiness", "Sadness", "Excitement", "Anger"],
        correctAnswer: "Sadness"
    },
    {
        question: "Who wrote the play *'Romeo and Juliet'*?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "J.K. Rowling"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "Which sentence uses correct punctuation?",
        options: ["Its a beautiful day?", "It's a beautiful day.", "Its' a beautiful day.", "Its a beautiful day."],
        correctAnswer: "It's a beautiful day."
    },
    {
        question: "Which of these sentences contains *alliteration*?",
        options: ["Peter Piper picked a peck of pickled peppers.", "The stars danced playfully in the sky.", "The sun was as bright as gold.", "She was as brave as a lion."],
        correctAnswer: "Peter Piper picked a peck of pickled peppers."
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    renderQuestion();
}

// Function to render a question
function renderQuestion() {
    const currentQuestion = lessons[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const questionNumberElement = document.getElementById('question-number');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-btn');
    const feedbackElement = document.createElement('div');
    feedbackElement.id = "feedback";
    feedbackElement.className = "feedback";

    // Update the question number
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} of ${lessons.length}`;

    // Clear previous options and feedback
    optionsElement.innerHTML = '';
    if (document.getElementById('feedback')) {
        document.getElementById('feedback').remove();
    }

    // Set question text
    questionElement.textContent = currentQuestion.question;

    // Create buttons for options
    currentQuestion.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.className = 'option';
        optionButton.onclick = () => checkAnswer(option);
        optionsElement.appendChild(optionButton);
    });

    optionsElement.appendChild(feedbackElement);
    nextButton.style.display = 'none';
}

// Function to check the user's answer
function checkAnswer(selectedOption) {
    const currentQuestion = lessons[currentQuestionIndex];
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('next-btn');

    feedbackElement.style.display = 'block';

    if (selectedOption === currentQuestion.correctAnswer) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.className = 'feedback correct';
        score++;
    } else {
        feedbackElement.textContent = `Incorrect! The correct answer was "${currentQuestion.correctAnswer}".`;
        feedbackElement.className = 'feedback incorrect';
    }

    nextButton.style.display = 'block';
}

// Function to move to the next question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < lessons.length) {
        renderQuestion();
    } else {
        showFinalScreen();
    }
}

// Function to show the final screen
function showFinalScreen() {
    document.getElementById('app').style.display = 'none';
    document.getElementById('final-screen').style.display = 'block';
    document.getElementById('final-score').textContent = `You scored ${score} out of ${lessons.length}`;
}

// Function to restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('final-screen').style.display = 'none';
    startQuiz();
}
