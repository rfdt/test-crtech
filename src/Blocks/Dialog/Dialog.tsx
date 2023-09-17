import React, {useState} from 'react';
import {cn} from "../../scripts/cn";
import './Dialog.scss';

function Dialog() {

    const dialogBlock = cn('Dialog')
    const [currentPicked, setIsCurrentPicked] = useState(false);
    const [unreaded, setIsUnreaded] = useState(true);
    const [isTyping, setIsTyping] = useState(true)

    return (
        <div className={dialogBlock({current: currentPicked})}>
            <div className={dialogBlock('Avatar')}>
                <img className={dialogBlock('Avatar-IMG')} src='http://mainfun.ru/images/11/genetic/Portraits_08.jpg'
                     alt='Avatar'
                />
                <div className={dialogBlock('Avatar-Online-Badge', {current: currentPicked})}></div>
            </div>
            <div className={dialogBlock('Companion')}>
                <div className={dialogBlock('Companion-Name', {current: currentPicked})}>
                    Дмитрий Анатольевич
                </div>
                {isTyping ?
                    <div className={dialogBlock('Companion-Writing')}>
                        <span className={dialogBlock('Companion-Writing-Dot', {current: currentPicked})}></span>
                        <span className={dialogBlock('Companion-Writing-Dot', {current: currentPicked})}></span>
                        <span className={dialogBlock('Companion-Writing-Dot', {current: currentPicked})}></span>
                        <span
                            className={dialogBlock('Companion-Writing-Title', {current: currentPicked})}>Печатает</span>
                    </div>
                    :
                    <div className={dialogBlock('Companion-Text', {current: currentPicked})}>
                        Документы будут готовы к следюущем отчетному 2023 году 21 века.
                    </div>
                }
            </div>
            <div className={dialogBlock('Info')}>
                <div className={dialogBlock('Info-Time', {current: currentPicked})}>
                    10:43
                </div>
                {
                    unreaded && <div className={dialogBlock('Info-Unreaded-Count')}>
                        1151
                    </div>
                }
            </div>
        </div>
    );
}

export default Dialog;
