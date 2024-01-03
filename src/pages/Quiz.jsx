import { useState } from "react";
import QuizOptions from "../components/QuizOptions";
import SubmitAnswer from "../components/SubmitAnswer";
import OptionName from "../components/OptionName";
import PlayAgain from "../components/PlayAgain";

const Quiz = ({ quizzes, newId, subjects }) => {
  const [select, setSelect] = useState(null);
  const [currect, setCurrect] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [natija, setNatija] = useState(0);

  return (
    <>
      {!showResult ? (
        <div key={quizzes[currentQuestion].id} className="quiz--hero">
          <div className="quiz--question">
            <i>
              Question {currentQuestion + 1} of {quizzes.length}
            </i>
            <h2 className="quiz--h2">{quizzes[currentQuestion].question}</h2>
            <img src="../images/line.png" alt="line" />
          </div>
          <div className="quiz--answers">
            <QuizOptions
              quiz={quizzes[currentQuestion]}
              select={select}
              setSelect={setSelect}
              currect={currect}
            />
            <SubmitAnswer
              select={select}
              correctAnswer={quizzes[currentQuestion].correct_answer}
              setCurrect={setCurrect}
              setSelect={setSelect}
              quizzes={quizzes}
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              setShowResult={setShowResult}
              setNatija={setNatija}
            />
          </div>
        </div>
      ) : (
        <div className="result--hero">
          <div className="result--text">
            <h1>Quiz completed</h1>
            <h2>You scored...</h2>
          </div>
          <div className="result--score">
            <div className="result--correct">
              <OptionName subjects={subjects} newId={newId} />
              <h1>{natija}</h1>
              <h4>out of {quizzes.length}</h4>
            </div>
            <div className="play--again">
              <PlayAgain />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
