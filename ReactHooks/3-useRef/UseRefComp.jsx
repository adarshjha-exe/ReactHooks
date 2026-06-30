import { useEffect, useState, useRef } from 'react';

const UseRefComp = () => {
  const [count, setCount] = useState(0);

  // useRef usecase
  const data = useRef(0);
  console.log(data); // {current: 0}
  console.log(data.current); // 0

  // useEffect will render infinitely on state changes
  //   useEffect(() => {
  //     setRenderVal((prev) => prev + 1);
  //   });

  return (
    <>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Render Value : {renderVal}</p>
    </>
  );
};

export default UseRefComp;
