import { useState } from 'react';

const MultipleSetFunc4 = () => {
  const [counter, setCounter] = useState(0);

  const increaseCount = () => {
    setCounter((prev) => {
      return prev + 1;
    });
    setCounter((prev) => {
      return prev + 1;
    });
    setCounter((prev) => {
      return prev + 1;
    });
    setCounter((prev) => {
      return prev + 1;
    });
    setCounter((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <p> Counter : {counter}</p>
      <button onClick={increaseCount}>Inc count</button>
    </div>
  );
};

export default MultipleSetFunc4;
