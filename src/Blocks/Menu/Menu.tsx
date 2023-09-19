import React, {useState} from 'react';
import {cn} from "../../scripts/cn";
import './Menu.scss';
import {ReactComponent as DialogsSvg} from '../../assets/svg/dialogs.svg';
import {ReactComponent as SettingsSvg} from "../../assets/svg/settings.svg";
import {ReactComponent as OpenSvg} from "../../assets/svg/open.svg";
import {observer} from "mobx-react-lite";
import DialogsStore from "../../store/dialogs";

const Menu = observer(() =>{

    const {unreadedDialogsCount} = DialogsStore;

    const menuBlock = cn('Menu') // блок
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currentMenu, setCurrentMenu] = useState('dialogs');

    return (
        <div className={menuBlock({opened: isOpen})}>
            <ul className={menuBlock('Top')}>
                <li className={menuBlock('User', {'open-mode': isOpen})}>
                    <div className={menuBlock('User-Avatar', {'open-mode': isOpen})}>
                        <img src={'https://sun1-55.userapi.com/s/v1/ig2/6IQIXwibJ3-jY5BXloek0ueUmafXivUMcBRxfhzRamu63briQHxAG9lqGl4CDSIeDpWLMeIDXUqLtEe7A8LA1fr4.jpg?size=400x400&quality=96&crop=0,95,759,759&ava=1'}
                             alt="User" className={menuBlock('User-Avatar-IMG')}/>
                    </div>
                    {isOpen && <div className={menuBlock('User-Name')}>Иван Иванов</div>}
                    {isOpen && <div className={menuBlock('User-Status')}>Online</div>}
                </li>
                <li className={menuBlock('Dialogs', {current: currentMenu === 'dialogs', 'open-mode': isOpen})}>
                    <DialogsSvg className={menuBlock('Dialogs-SVG', {'picked': currentMenu === 'dialogs'})}/>
                    {isOpen && <div className={menuBlock('Dialogs-Title', {'picked': currentMenu === 'dialogs'})}>ДИАЛОГИ</div>}
                    <div className={menuBlock('Dialogs-Badge', {'size-big': isOpen})}>
                        {unreadedDialogsCount}
                    </div>
                </li>
                <li className={menuBlock('Settings', {current: currentMenu === 'settings', 'open-mode': isOpen})}>
                    <SettingsSvg className={menuBlock('Settings-SVG', {'picked': currentMenu === 'settings'})}/>
                    {isOpen && <div className={menuBlock('Settings-Title', {'picked': currentMenu === 'settings'})}>НАСТРОЙКИ</div>}
                </li>
            </ul>
            <ul className={menuBlock('Bottom')}>
                <li className={menuBlock('Collapse')}>
                   <button className={menuBlock('Collapse-BTN')} onClick={()=>setIsOpen(!isOpen)}>
                       <OpenSvg className={menuBlock('Collapse-SVG', {close: isOpen})}/>
                   </button>
                </li>
            </ul>
        </div>
    );
});

export default Menu;
