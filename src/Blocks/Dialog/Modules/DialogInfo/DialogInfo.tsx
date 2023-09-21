import {observer} from "mobx-react-lite";
import {toLocaleHourString} from "../../../../utility/toLocaleHourString";
import React, {FC} from "react";
import {dialogBlock} from "../../Dialog";
import DialogsStore from "../../../../store/dialogs";
import {IDialog} from "../../../../types/IDialog";
import './DialogInfo.scss';

interface DialogInfoProps{
    dialog: IDialog;
}
export const DialogInfo: FC<DialogInfoProps> = observer(({dialog})=>{

    const {thisCurrentChat, getFirstUnreadedMessageInChat, getUnreadedCount} = DialogsStore;

    return(
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
    )
})
