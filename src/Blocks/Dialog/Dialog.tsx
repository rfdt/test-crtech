import React, {FunctionComponent} from 'react';
import {cn} from "../../utility/cn";
import './Dialog.scss';
import {IDialog} from "../../types/IDialog";
import {observer} from "mobx-react-lite";
import DialogsStore from '../../store/dialogs';
import {toLocaleHourString} from "../../utility/toLocaleHourString";
import {DialogAvatar} from "./Modules/DialogAvatar/DialogAvatar";
import DialogCompanion from "./Modules/DialogCompanion/DialogCompanion";
import {DialogInfo} from "./Modules/DialogInfo/DialogInfo";

interface DialogsProps {
    dialog: IDialog;
}
export const dialogBlock = cn('Dialog');
export const  Dialog : FunctionComponent<DialogsProps> = observer(({dialog})=> {

    const {thisCurrentChat, setDialog} = DialogsStore;

    return (
        <div className={dialogBlock({current: thisCurrentChat(dialog.user_id)})} onClick={()=>setDialog(dialog.user_id)}>
            <DialogAvatar dialog={dialog} />
            <DialogCompanion dialog={dialog} />
            <DialogInfo dialog={dialog} />
        </div>
    );
});

export default Dialog;
