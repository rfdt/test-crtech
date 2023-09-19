import React from 'react';
import {chatBlock} from "../../Chat";
import './Preload.scss';
function Preload() {
    return (
        <div className={chatBlock('Body')}>
            <div className={chatBlock('Loading-Message-From')}><div className={chatBlock('Loading-Message-Flare')}></div></div>
            <div className={chatBlock('Loading-Message-To')}><div className={chatBlock('Loading-Message-Flare')}></div></div>
            <div className={chatBlock('Loading-Message-From')}><div className={chatBlock('Loading-Message-Flare')}></div></div>
            <div className={chatBlock('Loading-Message-To')}><div className={chatBlock('Loading-Message-Flare')}></div></div>
            <div className={chatBlock('Loading-Message-From')}><div className={chatBlock('Loading-Message-Flare')}></div></div>
            <div className={chatBlock('Loading-Message-To')}><div className={chatBlock('Loading-Message-Flare')}></div></div>
            <div className={chatBlock('Loading-Message-From')}><div className={chatBlock('Loading-Message-Flare')}></div></div>
            <div className={chatBlock('Loading-Message-To')}><div className={chatBlock('Loading-Message-Flare')}></div></div>
            <div className={chatBlock('Loading-Message-From')}><div className={chatBlock('Loading-Message-Flare')}></div></div>
            <div className={chatBlock('Loading-Message-To')}><div className={chatBlock('Loading-Message-Flare')}></div></div>
        </div>
    );
}

export default Preload;