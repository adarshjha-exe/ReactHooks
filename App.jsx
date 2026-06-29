import './styles.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import UseStateWithObject3 from './ReactHooks/1-useState/UseStateWithObject3';

const App = () => {
  return (
    <div>
      <UseStateWithObject3 />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
