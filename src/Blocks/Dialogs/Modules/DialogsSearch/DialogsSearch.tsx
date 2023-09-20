import React, {FC} from 'react';
import {dialogsBlock} from "../../Dialogs";
import './DialogsSearch.scss';

interface DialogsSearchProps{
    searchString: string;
    setSearchString: (str: string) => void
}

const  DialogsSearch:FC<DialogsSearchProps> = ({setSearchString, searchString}) =>{
    return (
        <div className={dialogsBlock('Search')}>
            <input type='text' placeholder={'Поиск'} className={dialogsBlock('Search-Input')}
                   value={searchString} onChange={(e)=>setSearchString(e.target.value)}/>
        </div>
    );
}

export default DialogsSearch;