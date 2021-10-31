var titleEl = document.querySelector(".title");
var choiceEl = document.querySelectorAll(".choice-box");
var score = 100


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



function startGame() {
    var box1 = document.querySelector("#box1")
    var box2 = document.querySelector("#box2")
    var box3 = document.querySelector("#box3")
    var box4 = document.querySelector("#box4")

    
    document.getElementById("displayScore").innerHTML = score

    titleEl.innerHTML = questions[0].question;
    document.getElementById("choice-one").innerHTML = questions[0].choices[0];
    document.getElementById("choice-two").innerHTML = questions[0].choices[1];
    document.getElementById("choice-three").innerHTML = questions[0].choices[2];
    document.getElementById("choice-four").innerHTML = questions[0].choices[3];


    
    
    box1.addEventListener("click", function box1Listener() {
        score = score - 15;
        document.getElementById("displayScore").innerHTML = score;
        box1.removeEventListener("click", box1Listener)
        questionTwo();
    });
    box2.addEventListener("click", function box2Listener() {
        score = score - 15;
        document.getElementById("displayScore").innerHTML = score;
        box2.removeEventListener("click", box2Listener);
        questionTwo();
    });
    box3.addEventListener("click", function box3Listener() {
        alert("Correct");
        box3.removeEventListener("click", box3Listener)
        questionTwo();

    });
    box4.addEventListener("click", function box4Listener() {
        score = score - 15;
        document.getElementById("displayScore").innerHTML = score;
        box4.removeEventListener("click", box4Listener)
        questionTwo();
    });

}

function prepareQuestion() {
    titleEl.innerHTML = questions[1].question;
    document.getElementById("choice-one").innerHTML = questions[1].choices[0];
    document.getElementById("choice-two").innerHTML = questions[1].choices[1];
    document.getElementById("choice-three").innerHTML = questions[1].choices[2];
    document.getElementById("choice-four").innerHTML = questions[1].choices[3];
    
    box1.addEventListener("click", function box1Listener() {
        score = score - 15;
        document.getElementById("displayScore").innerHTML = score;
        box1.removeEventListener("click", box1Listener);
        box2.removeEventListener("click", box1Listener);
        box3.removeEventListener("click", box1Listener);
        box4.removeEventListener("click", box1Listener);
        questionThree();
    });
    box2.addEventListener("click", function box2Listener() {
        score = score - 15;
        document.getElementById("displayScore").innerHTML = score;
        box1.removeEventListener("click", box2Listener);
        box2.removeEventListener("click", box2Listener);
        box3.removeEventListener("click", box2Listener);
        box4.removeEventListener("click", box2Listener);
        questionThree();
    });
    box3.addEventListener("click", function box3Listener() {
        alert("Correct");
        box1.removeEventListener("click", box3Listener);
        box2.removeEventListener("click", box3Listener);
        box3.removeEventListener("click", box3Listener);
        box4.removeEventListener("click", box3Listener);
        questionThree();

    });
    box4.addEventListener("click", function box4Listener() {
        score = score - 15;
        document.getElementById("displayScore").innerHTML = score;
        box1.removeEventListener("click", box4Listener);
        box2.removeEventListener("click", box4Listener);
        box3.removeEventListener("click", box4Listener);
        box4.removeEventListener("click", box4Listener);
        questionThree();
    });
}

function questionTwo() {
    titleEl.innerHTML = questions[1].question;
    document.getElementById("choice-one").innerHTML = questions[1].choices[0];
    document.getElementById("choice-two").innerHTML = questions[1].choices[1];
    document.getElementById("choice-three").innerHTML = questions[1].choices[2];
    document.getElementById("choice-four").innerHTML = questions[1].choices[3];
    
    box1.addEventListener("click", function box1Listener() {
        score = score - 15;
        document.getElementById("displayScore").innerHTML = score;
        box1.removeEventListener("click", box1Listener);
        questionThree();
    });
    box2.addEventListener("click", function box2Listener() {
        score = score - 15;
        document.getElementById("displayScore").innerHTML = score;
        box2.removeEventListener("click", box2Listener);
        questionThree();
    });
    box3.addEventListener("click", function box3Listener() {
        alert("Correct");
        box3.removeEventListener("click", box3Listener);
        questionThree();

    });
    box4.addEventListener("click", function box4Listener() {
        score = score - 15;
        document.getElementById("displayScore").innerHTML = score;
        box4.removeEventListener("click", box4Listener);
        questionThree();
    });
}

function questionThree() {
    titleEl.innerHTML = questions[2].question;
    document.getElementById("choice-one").innerHTML = questions[2].choices[0];
    document.getElementById("choice-two").innerHTML = questions[2].choices[1];
    document.getElementById("choice-three").innerHTML = questions[2].choices[2];
    document.getElementById("choice-four").innerHTML = questions[2].choices[3];
    
    box1.addEventListener("click", function box1Listener() {
        score = score - 15;
        document.getElementById("displayScore").innerHTML = score;
        box1.removeEventListener("click", box1Listener);
        questionFour();
    });
    box2.addEventListener("click", function box2Listener() {
        score = score - 15;
        document.getElementById("displayScore").innerHTML = score;
        box2.removeEventListener("click", box2Listener);
        questionFour();
    });
    box3.addEventListener("click", function box3Listener() {
        score = score - 15;
        document.getElementById("displayScore").innerHTML = score;
        box3.removeEventListener("click", box3Listener);
        questionFour();
    });
    box4.addEventListener("click", function box4Listener() {
        alert("Correct");
        box4.removeEventListener("click", box4Listener);
        questionFour();
    });
}

function questionFour() {
    titleEl.innerHTML = questions[3].question;
    document.getElementById("choice-one").innerHTML = questions[3].choices[0];
    document.getElementById("choice-two").innerHTML = questions[3].choices[1];
    document.getElementById("choice-three").innerHTML = questions[3].choices[2];
    document.getElementById("choice-four").innerHTML = questions[3].choices[3];
    
    box1.addEventListener("click", function box1Listener() {
        score = score - 15;
        document.getElementById("displayScore").innerHTML = score;
        box1.removeEventListener("click", box1Listener);
        questionFive();
    });
    box2.addEventListener("click", function box2Listener() {
        score = score - 15;
        document.getElementById("displayScore").innerHTML = score;
        box2.removeEventListener("click", box2Listener);
        questionFive();
    });
    box3.addEventListener("click", function box3Listener() {
        alert("Correct");
        box3.removeEventListener("click", box3Listener);
        questionFive();
    });
    box4.addEventListener("click", function box4Listener() {
        score = score - 15;
        document.getElementById("displayScore").innerHTML = score;
        box4.removeEventListener("click", box4Listener);
        questionFive();
    });
}

function questionFive() {
    titleEl.innerHTML = questions[4].question;
    document.getElementById("choice-one").innerHTML = questions[4].choices[0];
    document.getElementById("choice-two").innerHTML = questions[4].choices[1];
    document.getElementById("choice-three").innerHTML = questions[4].choices[2];
    document.getElementById("choice-four").innerHTML = questions[4].choices[3];
    
    box1.addEventListener("click", function box1Listener() {
        score = score - 15;
        document.getElementById("displayScore").innerHTML = score;
        box1.removeEventListener("click", box1Listener);
    });
    box2.addEventListener("click", function box2Listener() {
        score = score - 15;
        document.getElementById("displayScore").innerHTML = score;
        box1.removeEventListener("click", box2Listener);
    });
    box3.addEventListener("click", function box3Listener() {
        score = score - 15;
        document.getElementById("displayScore").innerHTML = score;
        box1.removeEventListener("click", box3Listener);
    });
    box4.addEventListener("click", function box4Listener() {
        alert("Correct");
        box1.removeEventListener("click", box4Listener);
    });
}


startGame();

