// script.js
const questions = [
    {
        question: "What is the capital of Tanzania?",
        options: ["Paris", "London", "Dodoma", "Madrid"],
        answer: "Dodoma"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "Who sang the Afrobeat song called 'RUSH'?",
        options: ["Davido", "Ayra Starr", "Diamond Platnumz", "Taylor Swift"],
        answer: "Ayra Starr"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "Which element has the chemical symbol 'Na'?",
        options: ["Sodium", "Potassium", "Calcium", "Magnesium"],
        answer: "Sodium"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Brain", "Liver", "Skin"],
        answer: "Skin"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "George Orwell"],
        answer: "William Shakespeare"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Vietnam"],
        answer: "Japan"
    },
    {
        question: "What pair is XAUUSD?",
        options: ["GOLD/USD", "XAUMIUM/USD", "SILVER/USD", "BITCOIN"],
        answer: "GOLD/USD"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars"
    }
];

let currentQuestion = 0;
let score = 0;

const navbar = document.getElementById("navbar");
const homeLink = document.getElementById("home-link");
const shareLink = document.getElementById("share-link");
const shareSection = document.getElementById("share-section");
const shareButton = document.getElementById("share-button");

function loadQuestion() {
    const questionText = document.getElementById("question");
    const options = document.querySelectorAll('input[type="radio"]');
    const labels = document.querySelectorAll('label');

    if (currentQuestion < questions.length) {
        questionText.innerText = questions[currentQuestion].question;

        for (let i = 0; i < options.length; i++) {
            options[i].value = questions[currentQuestion].options[i];
            labels[i].innerText = questions[currentQuestion].options[i];
        }

        // Hide share link on questions other than the first and results page
        shareLink.style.display = currentQuestion === 0 || currentQuestion === questions.length ? "block" : "none";
    } else {
        // Display the final score
        questionText.innerText = `Quiz completed! Your score: ${score} out of ${questions.length}`;
        document.getElementById("options").style.display = "none";
        document.getElementById("next-button").style.display = "none";
        shareLink.style.display = "block";
        shareSection.style.display = "block";
    }
}

loadQuestion();

document.getElementById("next-button").addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="choice"]:checked');

    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;
        loadQuestion();
        clearSelection();
    } else {
        alert("Please select an option before proceeding.");
    }
});

homeLink.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    clearSelection();
    
    // Show options and next button
    const optionsDiv = document.getElementById("options");
    const nextButton = document.getElementById("next-button");
    optionsDiv.style.display = "block";
    nextButton.style.display = "block";
});


shareLink.addEventListener("click", () => {
    // Replace this URL with your quiz URL
    const quizURL = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: "Trivia Quiz",
            text: "Try this fun trivia quiz!",
            url: quizURL
        })
        .then(() => {
            console.log("Shared successfully");
        })
        .catch((error) => {
            console.error("Share failed:", error);
        });
    } else {
        alert("Sharing is not supported on your device.");
    }
});

shareButton.addEventListener("click", () => {
    // Replace this URL with your quiz URL
    const quizURL = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: "Trivia Quiz",
            text: "Try this fun trivia quiz!",
            url: quizURL
        })
        .then(() => {
            console.log("Shared successfully");
        })
        .catch((error) => {
            console.error("Share failed:", error);
        });
    } else {
        alert("Sharing is not supported on your device.");
    }
});

function clearSelection() {
    const options = document.querySelectorAll('input[name="choice"]');
    options.forEach((option) => {
        option.checked = false;
    });
}
