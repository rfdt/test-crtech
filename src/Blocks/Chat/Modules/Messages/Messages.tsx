import React from 'react';
import {observer} from "mobx-react-lite";
import {chatBlock} from "../../Chat";
import DialogsStore from "../../../../store/dialogs";
import InputMessage from "../InputMessage/InputMessage";
import OutboxMessage from "../OutboxMessage/OutboxMessage";
// import MessageDate from "../MessageDate/MessageDate";

const Messages = observer(()=> {

    const {getCurrentDialogMessages} = DialogsStore;

    //TODO- Дописать логику здесь, прочитанных собщений, обзёрвер и т.д. Дописать функцию для прочтения сообщения в store.

    return (
        <div className={chatBlock('Body')}>
            {getCurrentDialogMessages().map(message=>{
                if(message.message_from === 'me') {
                    return (
                        <OutboxMessage />
                    )
                }else {
                    return <InputMessage />
                }
            })}
        </div>
    );
});

export default Messages;