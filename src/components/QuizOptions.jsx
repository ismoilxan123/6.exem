import { useState } from "react";

const QuizOptions = ({ quiz, select, setSelect }) => {
  const [answer, setAnswer] = useState(null);
  function quizClick(i) {
    setSelect(i);
    if (i == quiz.correct_answer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  }
  return (
    <>
      {quiz.answers.map((answer, i) => (
        <div
          onClick={() => quizClick(i)}
          key={i}
          className={select == i ? "quiz--btn select--answer" : "quiz--btn"}
        >
          <div className=" quiz--answer ">
            <h2>
              {i == 0 ? "A" : i == 1 ? "B" : i == 2 ? "C" : i == 3 ? "D" : i}
            </h2>
          </div>
          <h1>{answer}</h1>
        </div>
      ))}
    </>
  );
};

export default QuizOptions;
