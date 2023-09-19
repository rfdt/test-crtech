import React from 'react';
import {chatBlock} from "../../Chat";
import './OutboxMessage.scss';

function OutboxMessage() {
    return (
        <div className={chatBlock('Message-To')}>
            <div className={chatBlock('Message-To-Content')}>
                Доброе утро!
            </div>
            <div className={chatBlock('Message-To-Time')}>
                10:27
            </div>
        </div>
    );
}

export default OutboxMessage;