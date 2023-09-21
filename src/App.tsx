import React, {useEffect} from 'react';
import './App.scss';
import {cn} from "./utility/cn";
import Menu from "./Blocks/Menu/Menu";
import Dialogs from "./Blocks/Dialogs/Dialogs";
import Chat from "./Blocks/Chat/Chat";
import {observer} from "mobx-react-lite";
import DialogsStore from "./store/dialogs";


const App = observer(() =>{

    const {fakeMessageSend, fakeOnlineActivity} = DialogsStore;

    useEffect(()=>{
        setInterval(()=>{
            fakeMessageSend()
        }, 35000)
    }, [])

    useEffect(()=>{
        setInterval(()=>{
            fakeOnlineActivity()
        }, 10000)
    }, [])

    return (
        <div className={cn('App')()}>
            <Menu/>
            <Dialogs/>
            <Chat />
        </div>
    );
});

export default App;
