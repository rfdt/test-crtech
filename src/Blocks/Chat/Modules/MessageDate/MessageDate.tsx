import React from 'react';
import {chatBlock} from "../../Chat";
import './MessageDate.scss';

function MessageDate() {
    return (
        <div className={chatBlock('Message-Date')}>
            18 Сентября 2023 г.
        </div>
    );
}

export default MessageDate;