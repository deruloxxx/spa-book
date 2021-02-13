import React, {useState} from "react";

import {ChatSlider} from "../orgs/chatslider/ChatSlider";
import {ChatHeader} from "../orgs/chatheader/ChatHeader";
import {ChatFooter} from "../orgs/chatfooter/ChatFooter";
import './Chat.css';

export const Chat = () => {
    let [isOpen, isClosed] = useState(false);
    return (
        <div>
            <ChatHeader></ChatHeader>
            <ChatSlider></ChatSlider>
            <div className={`spa-slider-base ${isOpen ? 'isOpen' : ''}`} onClick={() => isClosed(!isOpen)}>
                {isOpen ? 'ON' : 'OFF'}
            </div>
            <ChatFooter></ChatFooter>
        </div>


    )
}