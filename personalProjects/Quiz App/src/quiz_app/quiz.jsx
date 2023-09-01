import './quiz.css'
import { useState } from 'react'

const Quiz = ()=>{
    const questions =[
        {text:'What is the capital of Lagos ?', 
        options:[
            {answerText:'lagos' , isCorrect: true},
            {answerText:'laos' , isCorrect: false},
            {answerText:'los Angeles' , isCorrect: false},
            {answerText:'lome' , isCorrect: false}
        ]},
        {text:'Who is the president of Nigeria ?', 
            options:[
            {answerText:'Buhari' , isCorrect: false},
            {answerText:'Wike' , isCorrect: false},
            {answerText:'Osinbajo' , isCorrect: false},
            {answerText:'Tinubu' , isCorrect: true}
            ]},
        {text:'How many states are there in Nigeria?', 
        options:[
            {answerText:15 , isCorrect: false},
            {answerText:36 , isCorrect: true},
            {answerText:42 , isCorrect: false},
            {answerText:20 , isCorrect: false}
        ]},
        {text:'Which of these is a Nigerian brand?', 
            options:[
            {answerText:'Airtel' , isCorrect: false},
            {answerText:'MTN' , isCorrect: false},
            {answerText:'Glo' , isCorrect: true},
            {answerText:'Etisalat' , isCorrect: false}
            ]},

    ]
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)

    const handleNextQuestion = (isCorrect)=>{
        if(isCorrect == true){
            setScore(score +1)
        }

        const nextQuestion =currentQuestion + 1;
        
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion)
        }
        else{
            setShowScore(true)
        }
        
    }
    return(
        <>
        <div className="container">
        {showScore ? (
            <div className='scoreFrame'>You scored {score} out of {questions.length}</div>
        ):(
            <div className='quizFrame'>
                <div className="question">
                    <div className="questionCount">
                        <span>Question {currentQuestion +1} </span>/{questions.length}
                    </div>
                    <div className="questionText">
                        {questions[currentQuestion].text}
                    </div>
                </div>
                <div className="answer">
                    {questions[currentQuestion].options.map((option)=>
                        <button className='next' onClick={()=> handleNextQuestion(option.isCorrect)}>{option.answerText}</button>
                    )}
                </div>

            </div>
        )}

        </div>
        
        </>
    )
}

export default Quiz