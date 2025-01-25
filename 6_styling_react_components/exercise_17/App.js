import React from 'react';

function App() {
    const [buttonState, setButtonSate] = React.useSate('white');
    
    function hanldeOnClick() {
        console.log('hola');
    }
    
    return (
    <div id="app">
      <h1
        style={{ color: buttonState }}
      >CSS is great!</h1>
      <menu>
        <li>
          <button onClick={hanldeOnClick}>Yes</button>
        </li>
        <li>
          <button>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
