var titleEl = document.querySelector(".title");
var choiceEl = document.querySelector(".choice-box");

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "Strings",
        choice2: "Booleans",
        choice3: "Alerts",
        choice4: "Numbers",
        answer: 3
    },
    {
        question: "The condition in an if/else statement is enclosed with ___________.",
        choice1: "Quotes",
        choice2: "Curly Brackets",
        choice3: "Parenthesis",
        choice4: "Square Brackets",
        answer: 2
    },
    {
        question: "Arrays in Javascript can be used to store __________.",
        choice1: "Numbers and strings",
        choice2: "Other arrays",
        choice3: "Booleans",
        choice4: "All of the above",
        answer: 4
    },
    {
        question: "String values must be enclosed within __________ when being assigned to variables.",
        choice1: "Commas",
        choice2: "Curly brackets",
        choice3: "Quotes",
        choice4: "Parenthesis",
        answer: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "Javascript",
        choice2: "Terminal/bash",
        choice3: "For loops",
        choice4: "Console.log",
        answer: 4
    }
]

var test = test;

function startGame() {
    titleEl.innerHTML = questions[0].question;
    document.getElementById("choice-one").innerHTML = questions[0].choice1;
    document.getElementById("choice-two").innerHTML = questions[0].choice2;
    document.getElementById("choice-three").innerHTML = questions[0].choice3;
    document.getElementById("choice-four").innerHTML = questions[0].choice4;
    
    console.log(questions);
}

startGame();

