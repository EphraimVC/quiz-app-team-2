let currentQuestion = 0
let score = 0
let questions = {};

let scoreElement = document.getElementById('score');
let questionElement = document.getElementById('question')
let questionNumberElement = document.getElementById('question-number')
let answerContainer = document.getElementById('answer-container')

//get button
let button = document.getElementById('test');

//fetch quiz and put response in questions variable
await fetch('../data/quizData.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        questions = data.html
    })


function renderFunction() {
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
    } else {
        console.log('WRONG')

        //increment current question
        currentQuestion += 1;

        //dont increment score, as it was wrong
        //rerender elements
        renderFunction();
    }
    
}

renderFunction();