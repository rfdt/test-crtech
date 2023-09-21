import {observer} from "mobx-react-lite";
import './DialogAvatar.scss';
import React, {FC} from "react";
import {dialogBlock} from "../../Dialog";
import {IDialog} from "../../../../types/IDialog";
import DialogsStore from "../../../../store/dialogs";

interface IDialogAvatarProps{
    dialog: IDialog
}
export const DialogAvatar: FC<IDialogAvatarProps> = observer(({dialog}) =>{

    const {thisCurrentChat} = DialogsStore;

    return(
        <div className={dialogBlock('Avatar')}>
            <img className={dialogBlock('Avatar-IMG')} src={dialog.user_avatar}
                 alt='Avatar'
            />
            {dialog.user_online_status ?
                <div className={dialogBlock('Avatar-Online-Badge', {current: thisCurrentChat(dialog.user_id)})}></div>
                : null
            }
        </div>
    )
});
