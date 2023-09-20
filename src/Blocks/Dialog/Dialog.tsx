import React, {FunctionComponent, useState} from 'react';
import {cn} from "../../scripts/cn";
import './Dialog.scss';
import {IDialog} from "../../types/IDialog";
import {observer} from "mobx-react-lite";
import DialogsStore from '../../store/dialogs';
import {toLocaleHourString} from "../../scripts/toLocaleHourString";

interface DialogsProps {
    dialog: IDialog;
}

export const  Dialog : FunctionComponent<DialogsProps> = observer(({dialog})=> {

    const {thisCurrentChat, getFirstUnreadedMessageInChat, getUnreadedCount, setDialog} = DialogsStore;

    const dialogBlock = cn('Dialog')
    const [unreaded, setIsUnreaded] = useState(true);
    const [isTyping, setIsTyping] = useState(false)

    return (
        <div className={dialogBlock({current: thisCurrentChat(dialog.user_id)})} onClick={()=>setDialog(dialog.user_id)}>
            <div className={dialogBlock('Avatar')}>
                <img className={dialogBlock('Avatar-IMG')} src={dialog.user_avatar}
                     alt='Avatar'
                />
                {dialog.user_online_status ?
                    <div className={dialogBlock('Avatar-Online-Badge', {current: thisCurrentChat(dialog.user_id)})}></div>
                    : null
                }
            </div>
            <div className={dialogBlock('Companion')}>
                <div className={dialogBlock('Companion-Name', {current: thisCurrentChat(dialog.user_id)})}>
                    {dialog.user_name}
                </div>
                {dialog.user_isTyping ?
                    <div className={dialogBlock('Companion-Writing')}>
                        <span className={dialogBlock('Companion-Writing-Dot', {current: thisCurrentChat(dialog.user_id)})}></span>
                        <span className={dialogBlock('Companion-Writing-Dot', {current: thisCurrentChat(dialog.user_id)})}></span>
                        <span className={dialogBlock('Companion-Writing-Dot', {current: thisCurrentChat(dialog.user_id)})}></span>
                        <span
                            className={dialogBlock('Companion-Writing-Title', {current: thisCurrentChat(dialog.user_id)})}>Печатает</span>
                    </div>
                    :
                    <div className={dialogBlock('Companion-Text', {current: thisCurrentChat(dialog.user_id)})}>
                        {/* Получаем первое непрочитанное или последнее сообщение в чате */}
                        {getFirstUnreadedMessageInChat(dialog.user_id)?.message_content || ""}
                    </div>
                }
            </div>
            <div className={dialogBlock('Info')}>
                <div className={dialogBlock('Info-Time', {current: thisCurrentChat(dialog.user_id)})}>
                    {toLocaleHourString(getFirstUnreadedMessageInChat(dialog.user_id)?.message_send_time)}
                </div>
                {
                    getUnreadedCount(dialog.user_id) || 0 > 0 ? <div className={dialogBlock('Info-Unreaded-Count', {current: thisCurrentChat(dialog.user_id)})}>
                        {getUnreadedCount(dialog.user_id)}
                    </div> : null
                }
            </div>
        </div>
    );
});

export default Dialog;
