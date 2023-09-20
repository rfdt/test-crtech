import React from 'react';
import SimpleBar from 'simplebar-react';
import {cn} from "../../utility/cn";
import './Dialogs.scss';
import Dialog from "../Dialog/Dialog";
import {observer} from "mobx-react-lite";
import DialogsStore from '../../store/dialogs'
import DialogsSearch from "./Modules/DialogsSearch/DialogsSearch";
export const dialogsBlock = cn('Dialogs');
export const Dialogs = observer(() =>{

    const {filteredDialogs,searchString, setSearchString} = DialogsStore;

    return (
        <div className={dialogsBlock()}>
            <DialogsSearch searchString={searchString} setSearchString={setSearchString} />
            <SimpleBar className={dialogsBlock('List')} scrollbarMaxSize={70} classNames={{
                scrollbar: dialogsBlock('List-Scroll'),
            }}>
                {filteredDialogs.map(dialog =>(
                    <Dialog dialog={dialog} key={dialog.user_id}/>
                ))}
            </SimpleBar>
        </div>
    );
});

export default Dialogs;
