import React, {useState} from "react";
import './ChatSlider.css';

export const ChatSlider = () => {
  let [isOpen, isClosed] = useState(false);
  return (
    <div className={`spa-slider-base ${isOpen ? 'isOpen' : ''}`} onClick={() => isClosed(!isOpen)}>
      {isOpen ? 'ON' : 'OFF'}
    </div>
  )
}