import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);

  const handleChange = (event) => {
    // console.log(event.target.className);
    event.target.className === "plus" ? setNum(num+1) : setNum(num-1);
  }
  return (
    <div>
      <p>{num}</p>
      <button className="plus" onClick={handleChange}>+1</button>
      <button className="minus" onClick={handleChange}>-1</button>
    </div>
  );
}