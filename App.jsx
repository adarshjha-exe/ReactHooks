import React from 'react';
import { createRoot } from 'react-dom/client';
import WhyUseState from './ReactHooks/1-useState/WhyUseState';

const App = () => {
  return (
    <div>
      <WhyUseState />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
