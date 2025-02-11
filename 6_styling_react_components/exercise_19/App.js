import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [toggleStatus, setToggleStatus] = React.useState('white');
    
    function handleClick() {
        if (toggleStatus === 'white') {
            setToggleStatus('red');
        } else {
            setToggleStatus('white');
        }
    }
    
    
    return (
        <div>
            <p style={{color: toggleStatus}}>Style me!</p>
            <button onClick={handleClick}>Toggle style</button>
        </div>
    );
}
