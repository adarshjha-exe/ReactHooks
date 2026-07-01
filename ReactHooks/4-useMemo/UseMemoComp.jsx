import React from 'react';

const UseMemoComp = () => {
  const [text, setText] = React.useState(0);

  console.log('rendering the component every time input text changes.....');
  return (
    <div>
      <h1>useMemo</h1>
      <input
        type='number'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default UseMemoComp;
