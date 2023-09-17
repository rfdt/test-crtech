import React from 'react';
import {cn} from "../../scripts/cn";
import './Chat.scss';

function Chat() {

    const chatBlock = cn('Chat')

    return (
        <div className={chatBlock()}>
            <div className={chatBlock('Header')}></div>
            <div className={chatBlock('Body')}></div>
            <div className={chatBlock('Input')}></div>
        </div>
    );
}

export default Chat;
