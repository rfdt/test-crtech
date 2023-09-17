import React from 'react';
import SimpleBar from 'simplebar-react';
import {cn} from "../../scripts/cn";
import './Dialogs.scss';
import Dialog from "../Dialog/Dialog";

function Dialogs() {

    const dialogsBlock = cn('Dialogs');

    return (
        <div className={dialogsBlock()}>
            <div className={dialogsBlock('Search')}>
                <input type='text' placeholder={'Поиск'} className={dialogsBlock('Search-Input')}></input>
            </div>
            <SimpleBar className={dialogsBlock('List')} scrollbarMaxSize={70} classNames={{
                scrollbar: dialogsBlock('List-Scroll'),
            }}>
                <Dialog />
                <Dialog />
                <Dialog />
                <Dialog />
                <Dialog />
                <Dialog />
                <Dialog />
                <Dialog />
                <Dialog />
                <Dialog />
                <Dialog />
                <Dialog />
                <Dialog />
                <Dialog />
                <Dialog />
                <Dialog />
                <Dialog />
                <Dialog />
                <Dialog />
            </SimpleBar>
        </div>
    );
}

export default Dialogs;
