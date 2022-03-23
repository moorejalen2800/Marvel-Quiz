var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var timerEl = document.getElementById('timer')
var question = [
    {
        question: ' How Many Infinity Stones are there? ',
        answer: [
            { text: '6', correct: true },
            { text: '22', correct: false },
            { text: '7', correct: false },
            { text: '5', correct: false },
        ]


    },
    {
        question: 'Who rescued Tony Stark and Nebula from space? ',
        answer: [
            { text: 'The Hulk', correct: false },
            { text: 'Iron Man', correct: false },
            { text: 'Captain Marvel', correct: true },
            { text: 'The Guardian of the Galaxy', correct: false },
        ]



    },
    {
        question: 'Who was able to pick up Thor hammer in Endgame',
        answer: [
            { text: 'Spider_Man', correct: false },
            { text: 'Captian America', correct: false },
            { text: ' The Vision', correct: false },
            { text: 'The Scarlet Witch', correct: false },



        ]

    },
    {
        question: 'Captain Americas shield and Buckys arm are made of what?',
        answer: [
            { text: 'Solid Gold', correct: false },
            { text: 'Titanium', correct: false },
            { text: 'Cast Iron', correct: false },
            { text: ' Vibranium', correct: true }

        ]

    },
    {
        question: 'What did Black Panther consume to enhance his superhuman abilities?',
        answer: [
            { text: 'Heart Shaped Herb', correct: true },
            { text: 'Senzu bean', correct: false },
            { text: 'Super Soldier Serum ', correct: false },
            { text: 'Pym Particles ', correct: false },







        ]
    }]

var question, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})




function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(question[currentQuestionIndex])
}

function showQuestion(question) {
    console.log(question)
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct

        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
    }
}







function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}
if (question.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
} else {
    startButton.innerText = 'Start'
    startButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}



