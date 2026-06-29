import React from 'react';
import { createRoot } from 'react-dom/client';
import WhyUseState1 from './ReactHooks/1-useState/WhyUseState1';

const App = () => {
  return (
    <div>
      <WhyUseState1 />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
