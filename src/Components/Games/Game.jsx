import React, { useState, useEffect } from "react";
import questions from "./questions";
import "./game.css";
import TransitionWrapper from "../TransitionWrapper";
import bg from "../imgs/v.jpg"
function shuffle(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function Game() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questionText, setQuestionText] = useState("");
  const [choices, setChoices] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowNextButton(false);
    showQuestion(0);
  };

  const showQuestion = (index) => {
    resetState();
    let currentQuestion = questions[index];
    let questionNumber = index + 1;
    setQuestionText(`${questionNumber}. ${currentQuestion.question}`);
    const shuffledChoices = shuffle(currentQuestion.choices);
    setChoices(shuffledChoices);
    setCorrectAnswer(currentQuestion.choices.findIndex((choice) => choice.answer === true));
  };  

  const resetState = () => {
    setChoices([]);
    setCorrectAnswer(null);
    setSelectedAnswer(null);
  };

  const selectChoice = (isCorrect, index) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    setSelectedAnswer(index);
    setShowNextButton(true);
  };

  const handleNextButton = () => {
    setShowNextButton(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    if (currentQuestionIndex < questions.length - 1) {
      showQuestion(currentQuestionIndex + 1);
    } else {
      // If it's the last question, show the score
      showScore();
    }
  };

  const showScore = () => {
    resetState();
    setQuestionText(`You scored ${score} out of ${questions.length}!`);
  };

  useEffect(() => {
    startQuiz();
  }, []);
  const alphabet=["A","B","C","D"]
  return (
    <TransitionWrapper>
    <div className="gamesec">
        <div className="game_sec_land">
            <img src={bg} alt="" />
            <div>
            <h1>Challenge your knowledge, boost your skills!</h1>
            <button><a href="#quiz">Take the quiz now!</a></button>
            </div>
        </div>
    <div className="game_section">
      <h1 id="quiz">Quiz</h1>
      <div className="quiz">
        <h2 id="question">{questionText}</h2>
        <div id="answer-buttons">
          {choices.map((choice, index) => (
            <button
              key={index}
              className={`choice ${selectedAnswer === index ? (choice.answer ? "correct" : "incorrect") : ""}`}
              onClick={() => selectChoice(choice.answer, index)}
              aria-label={choice.text}
              disabled={selectedAnswer !== null}
            >
                <h2>{alphabet[index]}</h2>
              {choice.text}
              
            </button>
          ))}
        </div>
        {/* { showNextButton && (
          <button id="next-button" onClick={handleNextButton}>
            Next
          </button>
        )} */}
        
          <button className={showNextButton?"show_next":null} id="next-button" onClick={handleNextButton}>
            Next
          </button>
      </div>
    </div>
    </div>
    </TransitionWrapper>
  );
}