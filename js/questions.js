let currentQuestion = 0
let score = 0
let questions = {};

let scoreElement = document.getElementById('score');
let questionElement = document.getElementById('question')
let questionNumberElement = document.getElementById('question-number')
let answerContainer = document.getElementById('answer-container')
let timeElement = document.getElementById('time')

//fetch quiz and put response in questions variable
async function fetchQuizData() {
    const response = await fetch('../data/quizData.json')
    const data = await response.json();
    
    //populate questions variable with data
    questions = data.html;
}


function answerQuestion(answer) {
    //check if chosen answer is correct
    
    if (answer === questions[currentQuestion].answer) {
        console.log('CORRECT')
        
        //increment current question
        currentQuestion += 1
        
        //increment score
        score += 1;
    
        //rerender elements
        renderFunction();
        
        //reset timer
        stopTimer();
        
        //restart new timer
        questionTimer();
    } else {
        console.log('WRONG')

        //increment current question
        currentQuestion += 1;

        //dont increment score, as it was wrong
        //rerender elements
        renderFunction();

        //reset timer
        stopTimer();
        
        //restart new timer
        questionTimer();
    }
    
}

//invoke interval variable outside of function to make it globally accessible 
var timerInterval = undefined;

function questionTimer() {
    //set variables in seconds
    let time = 60;

    //create a interval that decrements time every 1000ms
    timerInterval = setInterval(() => {
        //if time isn't 0 decrement
        if (time != 0) {
            time -= 1;
            timeElement.textContent = '00:' + time;
        }

        //if time is 0, the timer has run out -- kill timer, declare time is out, go to next question
        if (time === 0) {
            clearInterval(timerInterval)
            console.log('TIME IS OUT')
            answerQuestion('time is out')
        }
    }, 1000)
}

function stopTimer() {
    //reset timer text
    timeElement.textContent = '01:00'

    //clear timer interval
    clearInterval(timerInterval)
}

async function renderFunction() {
    //wait for fetchQuizData to populate the questions variable before running
    await fetchQuizData();

    //clear answerContainer from content
    answerContainer.innerHTML = ''
    
    //render answers
    questionElement.textContent = questions[currentQuestion].question

    for (let i in questions[currentQuestion].options) {
        const p = document.createElement('p')

        p.textContent = questions[currentQuestion].options[i]
    
        p.addEventListener('click', function(e) {
            answerQuestion(questions[currentQuestion].options[i]);
        })
    
        answerContainer.appendChild(p)
    }

    //render score
    scoreElement.textContent = 'score: ' +score;
    questionNumberElement.textContent = 'question: ' + (currentQuestion + 1);
}


//start game functions
renderFunction();
//questionTimer();