import React from "react";
import './Write.scss';
import {chatBlock} from "../../Chat";

export const Write = () => {
    return (
        <div className={chatBlock('Write')}>
            <input type="text" placeholder={'Написать сообщение...'} className={chatBlock('Write-Input')}/>
        </div>
    );
};