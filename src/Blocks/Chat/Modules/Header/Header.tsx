import React from 'react';
import './Header.scss';
import {observer} from "mobx-react-lite";
import {chatBlock} from "../../Chat";
import DialogsStore from "../../../../store/dialogs";

const Header = observer(() =>{

    const {getCurrentDialog, isCurrentExist} = DialogsStore;

    return (
        <div className={chatBlock('Header')}>
            {
                isCurrentExist() ?
                    <>
                        <div className={chatBlock('Header-Сompanion-Title')}>
                            {getCurrentDialog()?.user_name}
                        </div>
                        {getCurrentDialog()?.user_isTyping ?
                            <div className={chatBlock('Header-Companion-Writing')}>
                                <span className={chatBlock('Header-Companion-Writing-Dot')}></span>
                                <span className={chatBlock('Header-Companion-Writing-Dot')}></span>
                                <span className={chatBlock('Header-Companion-Writing-Dot')}></span>
                                <span
                                    className={chatBlock('Header-Companion-Writing-Title')}>Печатает</span>
                            </div> : null}
                        {getCurrentDialog()?.user_online_status && !getCurrentDialog()?.user_isTyping ?
                            <div className={chatBlock('Header-Companion-Online')}>
                                Online
                            </div> : null}
                        {!getCurrentDialog()?.user_online_status && !getCurrentDialog()?.user_isTyping ?
                            <div className={chatBlock('Header-Companion-Offline')}>
                                Offline
                            </div> : null}
                    </>
                    : null
            }
        </div>
    );
});

export default Header;