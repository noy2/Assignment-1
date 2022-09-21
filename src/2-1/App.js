import Counter from "./Counter"
import { useState } from "react";

export default function App() {

  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <Counter num={num} setNum={setNum}></Counter>
      <Counter num={num} setNum={setNum}></Counter>
    </div>
  );
}