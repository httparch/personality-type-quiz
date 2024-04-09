

var startPage = document.querySelector('.start-page');
var quizPage = document.querySelector('.quiz-page');
var quiz = document.querySelector('#quiz');
var result = document.querySelector(".result");

const questions = [
    {
        scenario: "You walk into the bustling lagoon of PUP, and the aroma of delicious food fills the air. You spot a food stall with a sign that reads \"FEWA: Virgin's Original.\" Do you:",
        image: "assets/cat.jpg",
        answer:[
            {text: "Excitedly head over to the stall to try FEWA for the first time?" ,value: 1},
            {text: "Hesitate momentarily, curious but unsure if you should try something new?",value: 2},
        ]
    },
    {
        scenario: "You walk into the bustling campus of PUP, and the aroma of delicious food fills the air. You spot a food stall with a sign that reads \"FEWA: The Ultimate Campus Delight.\" Do you:",
        image: "assets/cat.jpg",
        answer:[
            {text: "Excitedly head over to the stall to try FEWA for the first time?" ,value: 1},
            {text: "Hesitate momentarily, curious but unsure if you should try something new?",value: 2},
        ]
    },
    {
        scenario: "You walk into the bustling campus of PUP, and the aroma of delicious food fills the air. You spot a food stall with a sign that reads \"FEWA: The Ultimate Campus Delight.\" Do you:",
        image: "assets/cat.jpg",
        answer:[
            {text: "Excitedly head over to the stall to try FEWA for the first time?" ,value: 1},
            {text: "Hesitate momentarily, curious but unsure if you should try something new?",value: 2},
        ]
    },

]

let currentQuestionIndex = 0;
let score = 0;

function hideStart(){
    startPage.style.display = 'none';
    quizPage.style.display = 'block';
    quiz.style.display = 'block';
    currentQuestionIndex = 0;
    score = 0;
    showQuestions();
}

const elementQuestion = document.querySelector('.question');
const elementAnswer = document.querySelector('.answer-button');
const button_answer = document.querySelector('.choices');
// const imageQuestion = document.querySelector('.image-question');

function showQuestions(){
    
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    elementQuestion.innerHTML = "Q"+questionNo + ": " + currentQuestion.scenario;
    document.querySelector('.image-question').src = currentQuestion.image;
    button_answer.innerHTML = '';
    
    currentQuestion.answer.forEach(answer => {
        
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer-button");
        button_answer.appendChild(button);
        
        button.addEventListener("click", ()=>{
            
            score += answer.value;         
            currentQuestionIndex++; 
            console.log(score)          
            if(currentQuestionIndex < questions.length){                                            
                nextQuestion();             
            }else{
                quizPage.style.display = 'block';
                quiz.style.display = 'none';
                result.style.display = 'block';
            }
        })
    })
}

function nextQuestion(){  
    showQuestions();
}

