import React from 'react';
// import Alphabets from './components/Alphabets';
// import HangeulConsonants from './components/HangeulConsonants';
import HangeulVowels from './components/HangeulVowels';

function App() {
  return (
    <div className="App">
      <header className="App-header">Hanna's Hangeul</header>
      <div class="container">
        {/* <HangeulConsonants /> */}
        <HangeulVowels />
      </div>
    </div>
  );
}

export default App;
