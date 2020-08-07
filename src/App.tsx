import React from 'react';

import useInputBuffer from './hooks/useInputBuffer'

function App() {
  let [up,down,left,right] = useInputBuffer().map(x=>x?1:0)

  return (
    <div >
      <header >
        <p>{up}</p>
        <p>{down}</p>
        <p>{left}</p>
        <p>{right}</p>
      </header>
    </div>
  );
}

export default App;
