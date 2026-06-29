import { useState, useEffect } from 'react';

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // 1. This will keep the counter updated every 2 seconds, indefinitely
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setCount((prevCount) => prevCount + 1);
  //     }, 2000);
  //   });

  // 2. This will run only once when the component mounts
  useEffect(() => {
    console.log('rendered');
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 2000);
  }, []);

  // 3. we can have the effect run when a specific dependency changes, it can be more than one
  useEffect(() => {
    console.log('count changed');
  }, [count, name]);

  return (
    <>
      <p>counter time: {count}</p>
    </>
  );
};

export default UseEffectHook;
