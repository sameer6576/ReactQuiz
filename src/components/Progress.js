function Progress({numOfQues,index,points,maxPoints,answer}) {
  return (
    <header className="progress">
      <progress max={numOfQues} value={index + Number(answer!==null)}></progress>
      <p>
        Question <strong>{index + 1}</strong>/{numOfQues}
      </p>
      <p>
        <strong>{points}</strong>/{maxPoints}
      </p>
    </header>
  );
}

export default Progress
