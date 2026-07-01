import React from 'react';
import { findNthPrime } from './nthPrime.js';

const UseMemoComp = () => {
  const [text, setText] = React.useState(0);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  console.log('rendering the component every time input text changes.....');

  // Heavy operation - After 6 digit UI freeze
  const prime = () => {
    console.log('Prime Number rendering...');
    return findNthPrime(text);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <h1>useMemo</h1>
      <input
        type='number'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h1>Prime Num : {prime()}</h1>
    </div>
  );
};

export default UseMemoComp;

/**
 * Everytime we are changing the theme,  prime number calculation is happening again and again, is it really necessary?
 * No, it is not necessary.
 */
