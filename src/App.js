import React from 'react';
// import Alphabets from './components/Alphabets';
import HangeulConsonants from './components/HangeulConsonants';
import HangeulVowels from './components/HangeulVowels';
import ConsonantTiles from './components/ConsonantTiles';

function App() {
  return (
    <div className="App">
      <header className="App-header">Hanna's Hangeul</header>
      <div className="container">
        <HangeulConsonants />
        <HangeulVowels />
        <ConsonantTiles />
      </div>
    </div>
  );
}

export default App;
