import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import {dialogBlock} from "../../Dialog";
import DialogsStore from "../../../../store/dialogs";
import {IDialog} from "../../../../types/IDialog";

interface DialogCompanion{
    dialog: IDialog;
}
export const DialogCompanion: FC<DialogCompanion> = observer(({dialog}) =>{

    const {thisCurrentChat, getFirstUnreadedMessageInChat} = DialogsStore;

 return (
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
                 {getFirstUnreadedMessageInChat(dialog.user_id)?.message_content || ""}
             </div>
         }
     </div>
 );

});

export default DialogCompanion;
