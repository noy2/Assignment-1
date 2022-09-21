export default function Counter(props) {

  return (
    <div>
      <p>{props.num}</p>
      <button onClick={() => props.setNum(props.num+1)}>+1</button>
      <button onClick={() => props.setNum(props.num-1)}>-1</button>
    </div>
  );
}