

var body = document.body;
var infoEl = document.createElement("div");
var h1El = document.createElement("h1");

var questionsEl = document.createElement("h2");
var answersEl = document.createElement("ul");
var currentQuestion = 0;
var currentTime = 75;
var timerEl = document.createElement("p");
var timeInterval;
var highScoreScores = JSON.parse(localStorage.getItem("finalFinalScore"));
if (highScoreScores === null) {
    highScoreScores = [];
}
var scoreInput = document.querySelector("score");

var buttonOne = document.createElement("button");
var buttonTwo = document.createElement("button");
var buttonThree = document.createElement("button");
var buttonFour = document.createElement("button");
var introEl = document.createElement("p");

document.body.style.background = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fterrigen-cdn-dev.marvel.com%2Fcontent%2Fprod%2F1x%2Fa44.jpg&imgrefurl=https%3A%2F%2Fwww.marvel.com%2Farticles%2Fculture-lifestyle%2Fvideo-call-backgrounds&tbnid=PK4Z8A-Y_mTVoM&vet=12ahUKEwi84L6w49v3AhXJrnIEHaF5DTAQMygAegQIARBo..i&docid=tiWoq6aUJnafbM&w=1234&h=694&q=marvel%20background%20image%20for%20js&client=safari&ved=2ahUKEwi84L6w49v3AhXJrnIEHaF5DTAQMygAegQIARBo";







h1El.textContent = "Marvel Code Quiz!";
 "1. What is one right or freedom from the First Amendment?";
introEl.textContent =
    "Try to answer the following questions within the time limit. Keep in mind wrong answers will deduct scoretime by ten seconds.";
introEl.setAttribute("style", "text-align:center");
body.appendChild(h1El);
body.appendChild(introEl);
body.appendChild(infoEl);
h1El.setAttribute("style", "color:blue; text-align:center;");
timerEl.setAttribute("style", "height:50px");
questionsEl.setAttribute("style", "text-align:center");
answersEl.setAttribute("style", "text-align:center");

var startQuiz = function () {
    var titleRemove = document.querySelector("h1");
    titleRemove.remove();
    introEl.remove();
    btn.remove();
    body.appendChild(questionsEl);
    body.appendChild(answersEl);
    answersEl.appendChild(buttonOne);
    answersEl.appendChild(buttonTwo);
    answersEl.appendChild(buttonThree);
    answersEl.appendChild(buttonFour);
    nextQuestion(questionsArr[currentQuestion]);
    body.appendChild(timerEl);
    countdown();
};
 // Countdown
function countdown() {
    timerEl.textContent = currentTime + " seconds remaining";
    timeInterval = setInterval(function () {
        if (currentTime > 1) {
            timerEl.textContent = currentTime + " seconds remaining";
            currentTime--;
        } else if (currentTime === 1) {
            timerEl.textContent = currentTime + " second remaining";
            currentTime--;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
            finishQuiz();
        }
    }, 1000);
}
// Question Array

const questionOne = {
    title: "1. How Many Infinity Stones are there?",
    questions: ["7", "12", "6", "5"],
    correctAnswer: 3,
};

const questionTwo = {
    title: "2. Who rescued Tony Stark and Nebula from space ?",
    questions: ["The Hulk", "Captain Marvel", "Thor", "The Guardian Of The Galaxy"],
    correctAnswer: 2,
};

const questionThree = {
    title: "3.Who was able to pick up Thor hammer in Endgame?",
    questions: [ "Spider-Man", "Captain America", "Vision","The Scarlet Witch"
        
    ],
    correctAnswer: 3,
};

const questionFour = {
    title: "4. Captain Americas shield and Buckys arm are made of what?",
    questions: [
        "Solid Gold","Titanium","Cast Iron","Vibranium'"
    ],
    correctAnswer: 4,
};

const questionFive = {
    title: "5.What did Black Panther consume to enhance his superhuman abilities? ",
    questions: [
        "Heart Shaped Herb","Senzu bean","Super Soldier Serum","Pym Particles"
    ],
    correctAnswer: 1,
};

const questionsArr = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
    questionFive,
];

var nextQuestion = function (question) {
   
    questionsEl.textContent = question.title;
  
    var oldButtonsArray = document.querySelectorAll("button");
    oldButtonsArray.forEach(function (element, index) {
        element.remove();
    });
    // creating new btn
    var buttonOne = document.createElement("button");
    var buttonTwo = document.createElement("button");
    var buttonThree = document.createElement("button");
    var buttonFour = document.createElement("button");
    answersEl.appendChild(buttonOne);
    answersEl.appendChild(buttonTwo);
    answersEl.appendChild(buttonThree);
    answersEl.appendChild(buttonFour);
    var questionButtonsArray = document.querySelectorAll("button");
    questionButtonsArray.forEach(function (element, index) {
        element.setAttribute("style", "background-color: red");
    });
   

    // change buttons
    var buttonsArray = document.querySelectorAll("button");

    buttonsArray.forEach(function (element, index) {
        element.textContent = question.questions[index];
        element.addEventListener("click", function () {
            console.log("Button CLicKed");
            if (question.correctAnswer == index) {
                correctAnswer();
            } else {
                wrongAnswer();
            }
        });
    });
};

var finishQuiz = function () {
    var oldTitle = document.querySelector("h2");
    oldTitle.remove();
    var oldButtonsArray = document.querySelectorAll("button");
    oldButtonsArray.forEach(function (element, index) {
        element.remove();
    });
    clearInterval(timeInterval);
    var endScreen = document.createElement("h2");
    body.appendChild(endScreen);
    endScreen.textContent = "Done!";

    var input = document.createElement("input");
    input.type = "text";
    body.appendChild(input);

    var inputButton = document.createElement("button");
    inputButton.type = "button";
    inputButton.setAttribute("style", "background-color: Red;");
    body.appendChild(inputButton);
    inputButton.textContent = "Submit";
    inputButton.addEventListener("click", highScore);
};

var highScore = function () {
    var oldTitle = document.querySelector("h2");
    oldTitle.remove();
    var oldButton = document.querySelector("button");
    oldButton.remove();
    var finalInitials = document.querySelector("input").value;
    let finalScore = {
        initals: finalInitials,
        time: currentTime,
    };
    highScoreScores.push(finalScore);
    var oldInputBox = document.querySelector("input");
    oldInputBox.remove();
    var highScorePage = document.createElement("h2");
    body.appendChild(highScorePage);
    highScorePage.textContent = "Highscores";
    var highScoreS = document.createElement("ol");
    body.appendChild(highScoreS);
    var sortedHighScores = highScoreScores.sort((a, b) => b.time - a.time);
    sortedHighScores.forEach(function (element, index) {
        var finalScores = document.createElement("li");
        finalScores.textContent = element.initals + " - " + element.time;
        highScoreS.appendChild(finalScores);
    });
    localStorage.setItem("finalFinalScore", JSON.stringify(sortedHighScores));
};

var correctAnswer = function () {
    if (currentQuestion === 4) {
        finishQuiz();
    } else {
        console.log("Correct");
        currentQuestion++;
        nextQuestion(questionsArr[currentQuestion]);
    }
};

var wrongAnswer = function () {
    if (currentQuestion === 4) {
        finishQuiz();
    } else {
        console.log("Wrong");
        currentQuestion++;
        nextQuestion(questionsArr[currentQuestion]);
    }
    console.log((currentTime -= 10));
};

// start quiz button
let btn = document.createElement("button");
btn.innerHTML = "Start Quiz";
btn.type = "Start Quiz";
btn.name = "formBtn";
btn.setAttribute("style", "background-color: Red");
document.body.appendChild(btn);
btn.addEventListener("click", startQuiz);
