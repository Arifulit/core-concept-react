import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Counter from './Counter';
import Team from './Team';
import Friends from './Friends';

function App() {

  const handleClick = () => {
    alert('Button clicked!');
  }

  const handleClick2 = () => {
    alert('Button 2 clicked!');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter /> {/* Self-closing tag for the Counter component */}
      
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {
        alert('Button 3 clicked!');
      }}>Third</button>

      <button onClick={() => addToFive(3)}>Four</button>
    </>
  );
}

export default App;
