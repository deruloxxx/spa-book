import React, {useState} from "react";
import './ChatSlider.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {ChatBaloon} from "../../mols/ChatBaloon";

export const ChatSlider = () => {
    let [isOpen, isClosed] = useState(false);
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact children={<ChatBaloon />} />
            </Switch>
        </BrowserRouter>
        // <div className={`spa-slider-base ${isOpen ? 'isOpen' : ''}`} onClick={() => isClosed(!isOpen)}>
        //     {isOpen ? 'ON' : 'OFF'}
        // </div>
    )
}