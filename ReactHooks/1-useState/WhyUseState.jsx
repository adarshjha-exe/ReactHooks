const WhyUseState = () => {
  let color = 'red';

  const changeColor = () => {
    color = 'blue';
    console.log(color);
  };

  return (
    <>
      <p>The color of this page is {color}</p>
      <button onClick={changeColor}>Change Blue</button>
    </>
  );
};

export default WhyUseState;

/**
 * On button click, the color variable changes from 'red' to 'blue', and console.log() confirms the value has changed.
 * However, the UI doesn't update because changing a normal variable does not trigger a React re-render; that's why we need useState.
 */
