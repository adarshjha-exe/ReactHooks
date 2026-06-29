import './styles.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import UseEffectHook from './ReactHooks/2-useEffect/UseEffectHook';

const App = () => {
  return (
    <div>
      <UseEffectHook />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
