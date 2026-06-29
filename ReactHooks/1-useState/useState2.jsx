import { useState } from 'react';

const UseState2 = () => {
  const [color, setColor] = useState('red');
  const changeColor = () => {
    setColor('blue');
  };

  return (
    <>
      <p>The color of this page is {color}</p>
      <button onClick={changeColor}>Change Blue</button>
    </>
  );
};

export default UseState2;

/*

under the hood useState :
  const color = useState('red')[0]; // returns arrays
  const colorFunc = useState('red')[1];
  console.log(color);
  console.log(colorFunc);

  */
