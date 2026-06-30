import './styles.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import UseRefComp from './ReactHooks/3-useRef/UseRefComp';

const App = () => {
  return (
    <div>
      <UseRefComp />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
