import React, {useState} from "react";

import {ChatHistory} from "../orgs/chathistory/ChatHistory";
import {ChatHeader} from "../orgs/chatheader/ChatHeader";
import {ChatSlider} from "../orgs/chatslider/ChatSlider";
import {ChatFooter} from "../orgs/chatfooter/ChatFooter";
import './Chat.css';

export const Chat = () => {
    return (
        <div>
            <ChatHeader></ChatHeader>
            <ChatHistory></ChatHistory>
            <ChatSlider></ChatSlider>
            <ChatFooter></ChatFooter>
        </div>
    )
}