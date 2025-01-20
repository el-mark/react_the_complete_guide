import { useState } from 'react';

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(editButton) {
        setIsEditing(editButton);
        console.log(editButton);
      }

    return <li>
        <span className="player">
            {!isEditing ? (
                <span className="player-name">{name}</span>
            ) : (
                <input type="name" />
            )}

            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={() => handleEditClick('true')}>Edit</button>
    </li>;
}