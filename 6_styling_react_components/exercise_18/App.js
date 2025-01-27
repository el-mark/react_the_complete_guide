import React from 'react';

function App() {
  const [buttonState, setButtonSate] = React.useState('');
  
  function hanldeOnClick(color) {
    setButtonSate(`highlight-${color}`);
  }
  
  return (
      <div id="app">
        <h1
          className={buttonState}
        >
          CSS is great!
        </h1>
        <menu>
          <li>
            <button onClick={() => hanldeOnClick('green')}>Yes</button>
          </li>
          <li>
            <button onClick={() => hanldeOnClick('red')}>No</button>
          </li>
        </menu>
      </div>
  );
}

export default App;
