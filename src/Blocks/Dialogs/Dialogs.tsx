import React from 'react';
import SimpleBar from 'simplebar-react';
import {cn} from "../../scripts/cn";
import './Dialogs.scss';
import Dialog from "../Dialog/Dialog";
import {observer} from "mobx-react-lite";
import DialogsStore from '../../store/dialogs'

export const Dialogs = observer(() =>{

    const dialogsBlock = cn('Dialogs');

    const {filteredDialogs,searchString, setSearchString} = DialogsStore;


    return (
        <div className={dialogsBlock()}>
            <div className={dialogsBlock('Search')}>
                <input type='text' placeholder={'Поиск'} className={dialogsBlock('Search-Input')}
                       value={searchString} onChange={(e)=>setSearchString(e.target.value)}/>
            </div>
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
