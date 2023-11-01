import Options from "./Options";

function Question({ question,dispatch,answer }) {
  // const correctOption = question.correctOption;
  return (
    <div className="">
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
