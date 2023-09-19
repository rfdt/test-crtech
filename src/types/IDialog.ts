import {IMessage} from "./IMessage";

export interface IDialog{
    user_id: string;
    user_name: string;
    user_avatar: string;
    user_online_status: boolean;
    user_isTyping: boolean;
    dialog_messages: IMessage[];
}