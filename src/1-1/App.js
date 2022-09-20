import { useState } from "react";

export default function App() {
  const [num, setNum] = useState("");
  // console.log(num);
  const toKm = num / 1000;
  const toCm = num * 100;
  const handleChange = (event) => {
    setNum(event.target.value);
  };

  return (
    <div className="App">
      <input onChange={handleChange} type="number" value={num} />
      <p>{`${num}m는 ${toKm}Km입니다.`}</p>
      <p>{`${num}m는 ${toCm}cm입니다.`}</p>
    </div>
  );
}
