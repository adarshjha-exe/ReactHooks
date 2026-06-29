import React from 'react';
import { createRoot } from 'react-dom/client';
import UseState2 from './ReactHooks/1-useState/UseState2';

const App = () => {
  return (
    <div>
      <UseState2 />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
