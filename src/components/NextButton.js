function NextButton({ dispatch, answer, index, numOfQues }) {
  if (answer === null) return null;
  if (index === numOfQues - 1) return (
    <button className="btn" onClick={() => dispatch({ type: "finish" })}>
      Finished
    </button>
);
  return (
    <button className="btn" onClick={() => dispatch({ type: "nextQuestion" })}>
      Next
    </button>
  );
}

export default NextButton;
