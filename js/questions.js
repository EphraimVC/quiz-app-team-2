let currentQuestion = 0
let score = 0
let questions = {};

let scoreElement = document.getElementById('score');
let questionElement = document.getElementById('question')
let questionNumberElement = document.getElementById('questionNumberElement')
let answerContainer = document.getElementById('answerContainer')
let timeElement = document.getElementById('time')
let currentQuestionTitleElement = document.getElementById('currentQuestionTitleElement')

//audio
let soundSuccess = document.getElementById('soundSuccess')
let soundWrong = document.getElementById('soundWrong')


//fetch quiz and put response in questions variable
async function fetchQuizData() {
    const response = await fetch('../data/quizData.json')
    const data = await response.json();
    let category = localStorage.getItem('Kategori')
    //populate questions variable with data
    questions = data[category];
}


function answerQuestion(e, answer) {
    //check if chosen answer is correct
    let answerElements = document.querySelectorAll('.answer');


    stopTimer();
    
    if (answer === 'TIME RAN OUT') {
        answerElements.forEach((elem) => {
            if(elem.textContent === questions[currentQuestion].answer) {
                elem.classList.add('correct-answer-blinking')
            }
        })
    }
    else if (answer === questions[currentQuestion].answer) {
        e.srcElement.classList.add('correct-answer')
        //needs a check if sound is muted
        soundSuccess.play();
    } else {
        e.srcElement.classList.add('wrong-answer')
        soundWrong.play();

        answerElements.forEach((elem) => {
            if(elem.textContent === questions[currentQuestion].answer) {
                elem.classList.add('correct-answer-blinking')
            }
        })
    }

    setTimeout(() => {
        if (answer === questions[currentQuestion].answer) {
            //increment score
            score += 10;
            
            //increment current question
            if (currentQuestion === 9) {
                localStorage.setItem('finalScore', score)
                window.location.href = '/pages/result.html'
            } else {
                currentQuestion += 1
            }
            
            //rerender elements
            renderFunction();
            
            //reset timer
            resetTimer();
            
            //restart new timer
            questionTimer();
        } else {
            //increment current question
            if (currentQuestion === 9) {
                localStorage.setItem('finalScore', score)
                window.location.href = '/pages/result.html'
            } else {
                currentQuestion += 1
            }
    
            
            //decrement score because of wrong answer
            score -= 5;

            //rerender elements
            renderFunction();
            
            //reset the timer
            resetTimer();

            
            
            //restart new timer
            questionTimer();
        }
    }, 2000)
    
    
    
}

//invoke interval variable outside of function to make it globally accessible 
var timerInterval = undefined;

function questionTimer() {
    //set variables in seconds
    let time = 30;

    //create a interval that decrements time every 1000ms
    timerInterval = setInterval(() => {
        //if time isn't 0 decrement
        if (time != 0) {
            time -= 1;
            timeElement.textContent = time + 's';
        }

        //if time is 0, the timer has run out -- kill timer, declare time is out, go to next question
        if (time === 0) {
            clearInterval(timerInterval)
            answerQuestion('', 'TIME RAN OUT')
        }
    }, 1000)
}

function resetTimer() {
    //reset timer text
    timeElement.textContent = '30s'

    //clear timer interval
    clearInterval(timerInterval)
}

function stopTimer() {
    clearInterval(timerInterval);
}

async function renderFunction() {
    //wait for fetchQuizData to populate the questions variable before running
    await fetchQuizData();

    //clear answerContainer from content
    answerContainer.innerHTML = ''
    
    //render answers
    questionElement.textContent = questions[currentQuestion].question

    for (let i in questions[currentQuestion].options) {
        const div = document.createElement('div')

        div.classList.add('answer')
        div.textContent = questions[currentQuestion].options[i]
    
        div.addEventListener('click', function(e) {
            answerQuestion(e, questions[currentQuestion].options[i]);
        })
    
        answerContainer.appendChild(div)
    }

    //render score
    scoreElement.textContent = score;
    questionNumberElement.textContent = 'Fråga ' + (currentQuestion + 1) + ' av 10';
}


//init game function
renderFunction();

//init timer function
questionTimer(); //uncomment me for release