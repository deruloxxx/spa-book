import React, {useState} from "react";

import {ChatHistory} from "../orgs/chathistory/ChatHistory";
import {ChatHeader} from "../orgs/chatheader/ChatHeader";
import {ChatSlider} from "../orgs/chatslider/ChatSlider";
import {ChatFooter} from "../orgs/chatfooter/ChatFooter";
import './Chat.css';
import {UserModal} from "../abstracts/modal/UserModal";

export const Chat = () => {
    let [isOpen, isClosed] = useState(false);
    return (
        <div>
            <ChatHeader></ChatHeader>
            <ChatHistory></ChatHistory>
            <ChatSlider></ChatSlider>
            <ChatFooter></ChatFooter>
            <UserModal></UserModal>
        </div>
    )
}