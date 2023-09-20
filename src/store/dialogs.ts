import fake_data from '../fake_data.json';
import {IDialog} from "../types/IDialog";
import {makeAutoObservable, observable, runInAction} from "mobx";
import messages from "../Blocks/Chat/Modules/Messages/Messages";
import dialog from "../Blocks/Dialog/Dialog";
import {getRandomArbitrary} from "../utility/getRandomNumber";
import {fakeMessageString} from "../utility/fakeMessageString";
import {log} from "node:util";

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

    get filteredDialogs() {
        return this.dialogs.filter(value => value.user_name.includes(this.searchString))
    }

    get unreadedDialogsCount() {
        return this.dialogs.reduce((sum, dialog) => {
            return dialog.dialog_messages.filter((dialog) => dialog.message_from !== 'me' && !dialog.message_read).length > 0 ? sum + 1 : sum;
        }, 0)
    }

    setSearchString = (string: string) => {
        this.searchString = string
    }

    thisCurrentChat = (dialog_id: string) => {
        return this.currentChat ? this.currentChat === dialog_id : false;
    }

    getDialogPositionInArray = (dialog_id: string) => {
        let pos = -1;
        this.dialogs.forEach((value, index) => {
            if (value.user_id === dialog_id) {
                pos = index;
                return pos
            }
        })
        return pos;
    }

    getFirstUnreadedMessageInChat = (dialog_id: string) => {
        let dialogPos = this.getDialogPositionInArray(dialog_id)
        if (dialogPos > -1) {
            let messages = this.dialogs[dialogPos].dialog_messages;
            messages.forEach((message, index) => {
                if (!message.message_read && message.message_from !== 'me') {
                    return message;
                }
            })
            return messages[messages.length - 1];
        }
    }

    getUnreadedCount = (dialog_id: string) => {
        let dialogPos = this.getDialogPositionInArray(dialog_id)
        if (dialogPos > -1) {
            return this.dialogs[dialogPos].dialog_messages.reduce((partialSum, message) => {
                return !message.message_read ? partialSum + 1 : partialSum
            }, 0)
        }
    }

    getCurrentDialog = () => {
        let dialogPos = this.getDialogPositionInArray(this.currentChat || "")
        if (dialogPos > -1) {
            return this.dialogs[dialogPos];
        }
    }

    get currentDialogMessages() {
        return this.getCurrentDialog()?.dialog_messages || [];
    }

    isCurrentExist = () => {
        return !!(this.currentChat && this.getCurrentDialog());
    }

    isDialogExistByIdx = (idx: number) => {
        return !!this.dialogs[idx];
    }

    setDialog = (dialog_id: string) => {
        const time = getRandomArbitrary(400, 1600)
        runInAction(() => {
            this.isLoadingChat = true;
            this.currentChat = dialog_id;
            setTimeout(() => {
                this.isLoadingChat = false;
            }, time)
        });
    }

    getMessageIdxCurrentChatById = (message_id: string) => {
        let idx = -1;
        this.currentDialogMessages.forEach((message, forIdx) => {
            if (message.message_id === message_id) {
                idx = forIdx
            }
        })
        return idx;
    }


    readCurrentChatMessage = (message_id: string) => {
        const messageIDX = this.getMessageIdxCurrentChatById(message_id);
        this.dialogs[this.getDialogPositionInArray(this.currentChat as string) || 0].dialog_messages[messageIDX]
            = {
            ...this.dialogs[this.getDialogPositionInArray(this.currentChat as string) || 0].dialog_messages[messageIDX],
            message_read: true
        };
    }

    setOnline = (idx: number) => {
       this.isDialogExistByIdx(idx) ? this.dialogs[idx].user_online_status = true : console.log('Some Bug');
    }

    setOffline = (idx: number) => {
        this.isDialogExistByIdx(idx) ? this.dialogs[idx].user_online_status = false : console.log('SomeBug');
    }

    setUserTyping = (idx: number) => {
        this.isDialogExistByIdx(idx) ? this.dialogs[idx].user_isTyping = true : console.log('SomeBug');
    }

    setUserNoneTyping = (idx: number) => {
        this.isDialogExistByIdx(idx) ? this.dialogs[idx].user_isTyping = false : console.log('SomeBug');
    }

    addMessageToChat = (idx: number) => {
        this.dialogs[idx].dialog_messages.push({
            message_from: this.dialogs[idx].user_id,
            message_read: false,
            message_id: new Date().toISOString(),
            message_content: fakeMessageString,
            message_send_time: new Date().toISOString(),
            message_to: 'me'
        });
    }

    fakeOnlineActivity = () => {
        const fakeIdxUser = getRandomArbitrary(0, this.dialogs.length);
        const fakeOnlineTime = getRandomArbitrary(6000, 29000);
        this.setOnline(fakeIdxUser);
        setTimeout(() => {
            this.setOffline(fakeIdxUser)
        }, fakeOnlineTime)
    }

    fakeMessageSend = () => {
        const fakeIdxUser = getRandomArbitrary(0, this.dialogs.length);
        const fakeOnlineTime = getRandomArbitrary(15000, 35000);
        this.setOnline(fakeIdxUser);
        this.setUserTyping(fakeIdxUser);
        setTimeout(() => {
            this.addMessageToChat(fakeIdxUser);
            this.setUserNoneTyping(fakeIdxUser);
        }, fakeOnlineTime)
    }
}

export default new DialogsStore(); //single-tone
