var titleEl = document.querySelector(".title");
var choiceEl = document.querySelectorAll(".choice-box");
var scores = []
var localStorageString = localStorage.getItem("scores")
if (localStorageString != null) {
    scores = JSON.parse(localStorageString);
}

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: 2
    },
    {
        question: "The condition in an if/else statement is enclosed with ___________.",
        choices: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
        answer: 2
    },
    {
        question: "Arrays in Javascript can be used to store __________.",
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        answer: 4
    },
    {
        question: "String values must be enclosed within __________ when being assigned to variables.",
        choices: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
        answer: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "Terminal/bash", "For loops", "Console.log"],
        answer: 4
    }
]

var score = 100
var countdown = function() {
    score--;
        if(score <= 0) {
            clearInterval(startCountdown);
        };
        document.getElementById("displayScore").innerHTML = score;
};
document.getElementById("displayScore").innerHTML = score;

var startCountdown= setInterval(countdown, 1000);

function startGame() {
    var box1 = document.querySelector("#box1")
    var box2 = document.querySelector("#box2")
    var box3 = document.querySelector("#box3")
    var box4 = document.querySelector("#box4")
    var box5 = document.querySelector("#box5")
    var box6 = document.querySelector("#box6")
    var box7 = document.querySelector("#box7")
    var box8 = document.querySelector("#box8")
    var box9 = document.querySelector("#box9")
    var box10 = document.querySelector("#box10")
    var box11 = document.querySelector("#box11")
    var box12 = document.querySelector("#box12")
    var box13 = document.querySelector("#box13")
    var box14 = document.querySelector("#box14")
    var box15 = document.querySelector("#box15")
    var box16 = document.querySelector("#box16")
    var box17 = document.querySelector("#box17")
    var box18 = document.querySelector("#box18")
    var box19 = document.querySelector("#box19")
    var box20 = document.querySelector("#box20")

    


    box1.addEventListener("click", function () {
        score = score - 15;
        alert("Incorrect.  You've lost 15 points.");
        document.getElementById("displayScore").innerHTML = score;
        document.getElementById("question2").style.display = "block";
        document.getElementById("question1").style.display = "none";
    });
    box2.addEventListener("click", function () {
        score = score - 15;
        alert("Incorrect.  You've lost 15 points.");
        document.getElementById("displayScore").innerHTML = score;
        document.getElementById("question2").style.display = "block";
        document.getElementById("question1").style.display = "none";
    });
    box3.addEventListener("click", function () {
        alert("Correct");
        document.getElementById("question2").style.display = "block";
        document.getElementById("question1").style.display = "none";
    });
    box4.addEventListener("click", function () {
        score = score - 15;
        alert("Incorrect.  You've lost 15 points.");
        document.getElementById("displayScore").innerHTML = score;
        document.getElementById("question2").style.display = "block";
        document.getElementById("question1").style.display = "none";
    });    
    box5.addEventListener("click", function () {
        score = score - 15;
        alert("Incorrect.  You've lost 15 points.");
        document.getElementById("displayScore").innerHTML = score;
        document.getElementById("question3").style.display = "block";
        document.getElementById("question2").style.display = "none";
    });
    box6.addEventListener("click", function () {
        score = score - 15;
        alert("Incorrect.  You've lost 15 points.");
        document.getElementById("displayScore").innerHTML = score;
        document.getElementById("question3").style.display = "block";
        document.getElementById("question2").style.display = "none";
    });
    box7.addEventListener("click", function () {
        alert("Correct");
        document.getElementById("question3").style.display = "block";
        document.getElementById("question2").style.display = "none";
    });
    box8.addEventListener("click", function () {
        score = score - 15;
        alert("Incorrect.  You've lost 15 points.");
        document.getElementById("displayScore").innerHTML = score;
        document.getElementById("question3").style.display = "block";
        document.getElementById("question2").style.display = "none";
    });    
    box9.addEventListener("click", function () {
        score = score - 15;
        alert("Incorrect.  You've lost 15 points.");
        document.getElementById("displayScore").innerHTML = score;
        document.getElementById("question4").style.display = "block";
        document.getElementById("question3").style.display = "none";
    });
    box10.addEventListener("click", function () {
        score = score - 15;
        alert("Incorrect.  You've lost 15 points.");
        document.getElementById("displayScore").innerHTML = score;
        document.getElementById("question4").style.display = "block";
        document.getElementById("question3").style.display = "none";
    });
    box11.addEventListener("click", function () {
        score = score - 15;
        alert("Incorrect.  You've lost 15 points.");
        document.getElementById("displayScore").innerHTML = score;
        document.getElementById("question4").style.display = "block";
        document.getElementById("question3").style.display = "none";
    });
    box12.addEventListener("click", function () {
        alert("Correct");
        document.getElementById("question4").style.display = "block";
        document.getElementById("question3").style.display = "none";
    });    
    box13.addEventListener("click", function () {
        score = score - 15;
        alert("Incorrect.  You've lost 15 points.");
        document.getElementById("displayScore").innerHTML = score;
        document.getElementById("question5").style.display = "block";
        document.getElementById("question4").style.display = "none";
    });
    box14.addEventListener("click", function () {
        score = score - 15;
        alert("Incorrect.  You've lost 15 points.");
        document.getElementById("displayScore").innerHTML = score;
        document.getElementById("question5").style.display = "block";
        document.getElementById("question4").style.display = "none";
    });
    box15.addEventListener("click", function () {
        alert("Correct");
        document.getElementById("question5").style.display = "block";
        document.getElementById("question4").style.display = "none";
    });
    box16.addEventListener("click", function () {
        score = score - 15;
        alert("Incorrect.  You've lost 15 points.");
        document.getElementById("displayScore").innerHTML = score;
        document.getElementById("question5").style.display = "block";
        document.getElementById("question4").style.display = "none";
    });    
    box17.addEventListener("click", function () {
        score = score - 15;
        alert("Incorrect.  You've lost 15 points.");
        document.getElementById("displayScore").innerHTML = score;
        document.getElementById("endgame").style.display = "block";
        document.getElementById("question5").style.display = "none";
        endGame();
    });
    box18.addEventListener("click", function () {
        score = score - 15;
        alert("Incorrect.  You've lost 15 points.");
        document.getElementById("displayScore").innerHTML = score;
        document.getElementById("endgame").style.display = "block";
        document.getElementById("question5").style.display = "none";
        endGame();
    });
    box19.addEventListener("click", function () {
        score = score - 15;
        alert("Incorrect.  You've lost 15 points.");
        document.getElementById("displayScore").innerHTML = score;
        document.getElementById("endgame").style.display = "block";
        document.getElementById("question5").style.display = "none";
        endGame();
    });
    box20.addEventListener("click", function () {
        alert("Correct");
        document.getElementById("endgame").style.display = "block";
        document.getElementById("question5").style.display = "none";
        endGame();

    });
}

function endGame() {
    clearInterval(startCountdown);
    scores.push(score);
    localStorage.setItem("scores", JSON.stringify(scores));
    console.log(score);
    document.getElementById("finalscore").innerHTML = score;}




startGame();

