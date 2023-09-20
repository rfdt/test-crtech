import React, {useEffect} from 'react';
import './App.scss';
import {cn} from "./scripts/cn";
import Menu from "./Blocks/Menu/Menu";
import Dialogs from "./Blocks/Dialogs/Dialogs";
import Chat from "./Blocks/Chat/Chat";
import {observer} from "mobx-react-lite";
import DialogsStore from "./store/dialogs";
function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

const App = observer(() =>{

    const {setOnline} = DialogsStore;

    useEffect(()=>{
        const idx = getRandomArbitrary(0,3)
        setOnline(idx);
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
