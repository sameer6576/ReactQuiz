function Restart({ dispatch }) {
  return (
    <button className="btn" onClick={() => dispatch({ type: "restart" })}>
      Restart
    </button>
  );
}

export default Restart;
