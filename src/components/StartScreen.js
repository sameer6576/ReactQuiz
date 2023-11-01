function StartScreen({ numOfQues, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3>{numOfQues} question to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets Start{" "}
      </button>
    </div>
  );
}

export default StartScreen;
