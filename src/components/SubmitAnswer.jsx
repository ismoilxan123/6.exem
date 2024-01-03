const SubmitAnswer = ({
  select,
  correctAnswer,
  quizzes,
  setSelect,
  currentQuestion,
  setCurrentQuestion,
  setShowResult,
  setNatija,
}) => {
  function submitClick() {
    setSelect(null);
    {
      select == correctAnswer ? setNatija((prev) => prev + 1) : "";
    }

    if (currentQuestion !== quizzes.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  }
  return (
    <div>
      <div className="submit--answer">
        <button onClick={submitClick} disabled={select === null}>
          {currentQuestion === quizzes.length - 1
            ? "End of the quiz"
            : "Next Question"}
        </button>
      </div>
    </div>
  );
};

export default SubmitAnswer;
