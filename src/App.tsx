import React from 'react';
import './App.scss';
import {cn} from "./scripts/cn";
import Menu from "./Blocks/Menu/Menu";
import Dialogs from "./Blocks/Dialogs/Dialogs";
import Chat from "./Blocks/Chat/Chat";

function App() {

    return (
        <div className={cn('App')()}>
            <Menu/>
            <Dialogs/>
            <Chat />
        </div>
    );
}

export default App;
