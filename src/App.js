import Cards from './Cards';
import { useState } from 'react';
import './App.css';

function App() {
  const [colors, setColors] = useState([
    'black',
    'gray',
    'maroon',
    'red',
    'purple',
    'fuchsia',
    'green',
    'lime',
    'olive',
    'yellow',
    'navy',
    'blue',
    'teal',
    'aqua',
  ]);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [chosenColors, setChosenColors] = useState([]);

  const handleClick = (e) => {
    if (chosenColors.includes(e.target.className)) {
      if (score > highScore) setHighScore(score);
      setScore(0);
      setChosenColors([]);
    } else {
      setScore(score + 1);
      setChosenColors(chosenColors.concat(e.target.className));
    }
  };

  return (
    <div>
      <div className="header">
        <div>score: {score}</div>
        <div>highscore: {highScore}</div>
      </div>
      <Cards colors={colors} handleClick={handleClick} />
    </div>
  );
}

export default App;
