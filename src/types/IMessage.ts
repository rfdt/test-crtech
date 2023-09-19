export interface IMessage{
    message_id: string;
    message_from: string;
    message_to: string;
    message_content: string;
    message_read: boolean;
    message_send_time: string;
}