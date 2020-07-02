import React from 'react';
import logo from './logo.svg';
import './App.css';
import useKey from './useKey';

function App() {

  let keyu = useKey('ArrowUp');
  let keyd = useKey('ArrowDown');
  let keyl = useKey('ArrowLeft');
  let keyr = useKey('ArrowRight');
  const values = [keyu, keyd, keyl, keyr].map((k) => (k ? 'true' : 'false')).toString()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{values}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
