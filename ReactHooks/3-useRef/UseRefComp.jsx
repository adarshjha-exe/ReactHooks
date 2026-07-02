import { useEffect, useState, useRef } from 'react';

const UseRefComp = () => {
  // 1. Normal variable
  let x = 0;

  // 2. state variable
  const [stateVar, setStateVar] = useState(0);

  // 3. useRef
  const refVal = useRef(0);

  return (
    <>
      {/* 1. Normal variable */}
      <div className='normal-var'>
        <p>Value of x (normal variable): {x}</p>
        <button
          onClick={() => {
            x = x + 1;
            console.log('Normal variable button clicked');
            console.log('value of Normal variable x :', x);
          }}
        >
          Increase x
        </button>
      </div>

      {/* 2. State variable */}
      <div className='state-var'>
        <p>Value of stateVar (state variable): {stateVar}</p>
        <button
          onClick={() => {
            setStateVar(stateVar + 1);
            console.log('state variable button clicked');
            console.log('value of State variable stateVar :', stateVar);
          }}
        >
          Increase x
        </button>
      </div>

      {/* 3. useRef variable */}
      <div className='ref-var'>
        <p>Value of useRef variable: {refVal.current}</p>
        <button
          onClick={() => {
            refVal.current = refVal.current + 1;
            console.log('useRef variable button clicked');
            console.log('value of useRef variable: ', refVal.current);
          }}
        >
          Increase x
        </button>
      </div>
    </>
  );
};

export default UseRefComp;
