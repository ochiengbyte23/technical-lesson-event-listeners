import React from "react";
function Question() {
  return (
    <>
      <h1> QUESTION HERE </h1>
      <button onClick={() => console.log("Click")}> Answer 1</button>
      <button onClick={() => console.log("Click")}> Answer 2</button>
      <button onClick={() => console.log("Click")}> Answer 3</button>
      <button onClick={() => console.log("Click")}> Answer 4</button>
    </>
  );
}
export default Question;