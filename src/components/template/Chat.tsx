import React, {useState} from "react";
import './chat.css';

export const Chat = () => {
    let [isOpen, isClosed] = useState(false);
    return (
        <div className={`spa-slider-base ${isOpen ? 'isOpen' : ''}`} onClick={() => isClosed(!isOpen)}>
            {isOpen ? 'ON' : 'OFF'}
        </div>
    )
}