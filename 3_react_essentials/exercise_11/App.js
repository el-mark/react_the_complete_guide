import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [ activeStyle, setActiveStyle ] = React.useState(false);
    
    function handleClick() {
        setActiveStyle(!activeStyle);
    }
    
    return (
        <div>
            <p
                className={activeStyle ? 'active' : ''}
            >
                Style me!
            </p>
            <button
                onClick={handleClick}
            >
                Toggle style
            </button>
        </div>
    );
}
