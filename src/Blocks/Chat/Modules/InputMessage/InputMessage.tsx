import React from 'react';
import {chatBlock} from "../../Chat";
import './InputMessage.scss';

function InputMessage() {
    return (
        <div className={chatBlock('Message-From')}>
            <div className={chatBlock('Message-From-Content')}>
                Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на
                название, не имеет
                никакого отношения к обитателям водоемов. Используется он веб- дизайнерами для
                вставки на
                интернет-страницы.
            </div>
            <div className={chatBlock('Message-From-Time')}>
                10:27
            </div>
        </div>
    );
}

export default InputMessage;