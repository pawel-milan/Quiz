(function(){
    const questionContainer = document.querySelector('.question');
    const answerContainer = document.querySelector('.answers-container');
    const feedback = document.querySelector('.feedback');
    const result = document.querySelector('.result')
    const button = document.querySelector('.btn')

    // Put your questions, answers and number of correct answer in the array
    const questions = [
        {
            question: 'Spain',
            choices: ['Barcelona', 'Madrid', 'Sevilla', 'Bilbao'],
            correctAnswer: 1
        },
        {
            question: 'Brasil',
            choices: ['Rio de Janerio', 'Sao Paulo', 'Brasilia', 'Buenos Aires'],
            correctAnswer: 2
        },
        {
            question: 'Canada',
            choices: ['Montreal', 'Toronto', 'Vancouver', 'Ottawa'],
            correctAnswer: 3
        },
        {
            question: 'Australia',
            choices: ['Canberra', 'Sydney', 'Melbourne', 'Wellington'],
            correctAnswer: 0
        },
        {
            question: 'Turkey',
            choices: ['Istanbul', 'Alanya', 'Ankara', 'Side'],
            correctAnswer: 2
        }
    ];

    // set first question and answers
    let currentQuestion = 0
    let correctAnswers = 0 
    let quizOver = false

    function displayCurrentQuestion(){
        questionContainer.innerHTML = questions[currentQuestion].question

        answerContainer.innerHTML = '';

        let numChoices = questions[currentQuestion].choices.length
        for(var i = 0; i < numChoices; i++){
            let choice = questions[currentQuestion].choices[i]
            let li = document.createElement('li')
            li.innerHTML = `<input type="radio" name="quiz" value="${i}">${choice}`;
            answerContainer.appendChild(li)
        }
    }

    function displayResult(){
        result.style.display = 'block'
        result.innerHTML = `Your score: ${correctAnswers} of ${questions.length}`
    }

    function hideResult(){
        result.style.display = 'none'
    }

    function resetQuiz(){
        currentQuestion = 0
        correctAnswers = 0 
    }

    displayCurrentQuestion()

    button.addEventListener('click',function(){
        
        if (!quizOver) {
            const btnChecked = document.querySelector('input[type=radio]:checked');
            if (btnChecked === null) {
                feedback.style.display = 'block'
            }
            else{
                feedback.style.display = 'none'
                if (Number(btnChecked.value) === questions[currentQuestion].correctAnswer) {
                    correctAnswers++
                }
                currentQuestion++
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion()
                }
                else{
                    displayResult()
                    button.innerHTML = 'Wanna play again?'
                    quizOver = true
                }
            }
        }
        else{
            quizOver = false
            button.innerHTML = 'Next question'
            resetQuiz()
            displayCurrentQuestion()
            hideResult()
        }
    })
})()