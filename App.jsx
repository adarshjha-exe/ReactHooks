import './styles.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import MultipleSetFunc4 from './ReactHooks/1-useState/MultipleSetFunc4';

const App = () => {
  return (
    <div>
      <MultipleSetFunc4 />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
