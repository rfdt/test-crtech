import React, {useState} from 'react';
import {cn} from "../../scripts/cn";
import './Chat.scss';
import {observer} from "mobx-react-lite";
import DialogsStore from "../../store/dialogs";
import Header from "./Modules/Header/Header";
import Preload from "./Modules/Preload/Preload";
import {EmptyChat} from "./Modules/EmptyChat/EmptyChat";
import {Write} from "./Modules/Write/Write";
import Messages from "./Modules/Messages/Messages";

export const chatBlock = cn('Chat');

export const Chat = observer(() => {

    const {getCurrentDialog, isCurrentExist, isLoadingChat, currentChat} = DialogsStore;

    return (
        <div className={chatBlock()}>
            <Header/>
            {
                currentChat && getCurrentDialog() ?
                    <>
                        {
                            isLoadingChat ? <Preload/> : <Messages />
                        }
                    </>
                    : <EmptyChat/>
            }
            <Write/>
        </div>
    );
});

export default Chat;
