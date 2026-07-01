import './styles.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
// import UseRefComp from './ReactHooks/3-useRef/UseRefComp';
import UseMemoComp from './ReactHooks/4-useMemo/UseMemoComp';

const App = () => {
  return (
    <div>
      {/* <UseRefComp /> */}
      <UseMemoComp />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
