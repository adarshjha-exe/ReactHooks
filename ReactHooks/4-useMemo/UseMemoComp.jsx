import React from 'react';
import { findNthPrime } from './nthPrime.js';

const UseMemoComp = () => {
  const [text, setText] = React.useState(0);

  console.log('rendering the component every time input text changes.....');

  // Heavy operation - After 6 digit UI freeze
  const prime = findNthPrime(text);

  return (
    <div>
      <h1>useMemo</h1>
      <input
        type='number'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h1>Prime Num : {prime}</h1>
    </div>
  );
};

export default UseMemoComp;
