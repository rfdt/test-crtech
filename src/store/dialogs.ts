import fake_data from '../fake_data.json';
import {IDialog} from "../types/IDialog";
import {makeAutoObservable} from "mobx";

class DialogsStore {
    currentChat: null | string = null;
    isLoadingDialogs = false;
    isLoadingChat = false;
    error: null | string = null;
    dialogs: IDialog[] = fake_data;
    searchString = '';

    constructor() {
        makeAutoObservable(this);
    }

    get filteredDialogs(){
        return this.dialogs.filter(value => value.user_name.includes(this.searchString))
    }

    get unreadedDialogsCount(){
        return this.dialogs.reduce((sum, dialog)=>{
            return dialog.dialog_messages.filter((dialog)=> dialog.message_from !== 'me' && !dialog.message_read).length > 0 ? sum + 1 : sum;
        }, 0)
    }

    setSearchString = (string: string) =>{
        this.searchString = string
    }

    thisCurrentChat = (dialog_id: string) =>{
        return this.currentChat ?  this.currentChat === dialog_id : false;
    }

    getDialogPositionInArray = (dialog_id: string) =>{
        let pos = -1;
        this.dialogs.forEach((value, index)=>{
            if (value.user_id === dialog_id) {
                pos = index;
                return pos
            }
        })
        return pos;
    }

    getFirstUnreadedMessageInChat = (dialog_id: string) =>{
        let dialogPos = this.getDialogPositionInArray(dialog_id)
        if (dialogPos > -1){
            let messages = this.dialogs[dialogPos].dialog_messages;
            messages.forEach((message, index) => {
                if(!message.message_read && message.message_from !== 'me'){
                    return message;
                }
            })
            return messages[messages.length - 1];
        }
    }

    getUnreadedCount = (dialog_id: string) =>{
        let dialogPos = this.getDialogPositionInArray(dialog_id)
        if (dialogPos > -1){
           return this.dialogs[dialogPos].dialog_messages.reduce((partialSum, message) => {
               return !message.message_read ? partialSum + 1 : partialSum
           }, 0)
        }
    }

    getCurrentDialog = () =>{
        let dialogPos = this.getDialogPositionInArray(this.currentChat  || "")
        if (dialogPos > -1){
            return this.dialogs[dialogPos];
        }
    }

    getCurrentDialogMessages = () =>{
        return this.getCurrentDialog()?.dialog_messages || [];
    }

    isCurrentExist = () =>{
       if (this.currentChat && this.getCurrentDialog()){
           return true
       }
       return false;
    }

    setDialog = (dialog_id: string) => {
        this.currentChat = dialog_id;
    }



}

export default new DialogsStore(); //single-tone