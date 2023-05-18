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

  return (
    <div>
      <Cards colors={colors} />
    </div>
  );
}

export default App;
