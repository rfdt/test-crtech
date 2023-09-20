import React, {FC} from 'react';
import {chatBlock} from "../../Chat";
import './InputMessage.scss';
import {IMessage} from "../../../../types/IMessage";
import {toLocaleHourString} from "../../../../scripts/toLocaleHourString";

interface InputMessageProps{
    order: string;
    message: IMessage;
}
const InputMessage:FC<InputMessageProps> = ({order, message}) => {
    return (
        <div className={chatBlock('Message-From',  {'second-message': order === 'second', 'first-message': order ==='first'})}
             data-message-readed={message.message_read}
             data-message-id={message.message_id}
        >
            <div className={chatBlock('Message-From-Content')}>
                {message.message_content}
            </div>
            <div className={chatBlock('Message-From-Time')}>
                {toLocaleHourString(message.message_send_time)}
            </div>
        </div>
    );
}

export default InputMessage;
