import React, {FC} from 'react';
import {chatBlock} from "../../Chat";
import './OutboxMessage.scss';
import {IMessage} from "../../../../types/IMessage";
import {toLocaleHourString} from "../../../../utility/toLocaleHourString";

interface OutboxMessageProps {
    message: IMessage;
    first: boolean
}
const  OutboxMessage:FC<OutboxMessageProps> = ({message,first}) =>{
    return (
        <div className={chatBlock('Message-To', {first: first})}>
            <div className={chatBlock('Message-To-Content')}>
                {message.message_content}
            </div>
            <div className={chatBlock('Message-To-Time')}>
                {toLocaleHourString(message.message_send_time)}
            </div>
        </div>
    );
}

export default OutboxMessage;
