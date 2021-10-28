const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')


const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', ()=>{
    currentQuestionIndex++
    setNextQuestion()
})


function startGame(){
    console.log('Started')
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(()=> Math.random() - .5);
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer=> {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    } else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    
    {
        question: 'O termo CSS significa:',
        answers: [
            { text: 'Card Style Space', correct: false},
            { text: 'Change Style Source', correct: false},
            { text: 'Cascading Style Sheet', correct: true},
            { text: 'Command Space Style', correct: false}
        ]
    },
    {
        question: 'Qual desses operadores matemáticos adiciona valor na variável?',
        answers: [
            { text: 'x += 5', correct: true},
            { text: 'x + 5', correct: false},
            { text: 'x =+ 5', correct: false},
            { text: 'x ++ 5', correct: false}
        ]
    },
    {
        question: 'Como são declaradas variáveis com arrays no JavaScript?',
        answers: [
            { text: 'const myArray = {1, 2, 3}', correct: false},
            { text: 'const myArray = (1, 2, 3)', correct: false},
            { text: 'const myArray = <1, 2, 3>', correct: false},
            { text: 'const myArray = [1, 2, 3]', correct: true}
        ]
    },
    {
        question: 'É possível comentar código no JavaScript usando /* */?',
        answers: [
            { text: 'Não', correct: false},
            { text: 'Sim', correct: true},
        ]
    },
    {
        question: 'Quais são as palavras usadas para se declarar variáveis no JavaScript?',
        answers: [
            { text: 'variable, let e const', correct: false},
            { text: 'div, span e global', correct: false},
            { text: 'var, let e const', correct: true},
            { text: 'declareVar, attach e loop', correct: false}
        ]
    },
 
   
    {
        question: 'Como uma função é chamada no JavaScript?',
        answers: [
            { text: 'function{}', correct: false},
            { text: 'function()', correct: true},
            { text: '(function => ())', correct: false},
            { text: 'function.log', correct: false}
        ]
    },
]

