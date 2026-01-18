import React from "react";
function Question() {
  function handleClick() {
    console.log("clicked")
  }
  return (
    <>
      <h1> QUESTION HERE </h1>
      <button onClick={() => handleClick()}> Answer 1</button>
      <button onClick={handleClick}> Answer 2</button>
      <button onClick={handleClick}> Answer 3</button>
      <button onClick={handleClick}> Answer 4</button>
    </>
  );
}
export default Question;