import React, {MutableRefObject, useEffect, useRef} from 'react';
import {Observer, observer} from "mobx-react-lite";
import {chatBlock} from "../../Chat";
import DialogsStore from "../../../../store/dialogs";
import InputMessage from "../InputMessage/InputMessage";
import OutboxMessage from "../OutboxMessage/OutboxMessage";
// import MessageDate from "../MessageDate/MessageDate";

const Messages = observer(() => {

    const {currentDialogMessages, readCurrentChatMessage} = DialogsStore;

    const customOrder = useRef(1);
    const customInputMsgOrder = useRef(1);

    const observer = useRef<IntersectionObserver>(null) as MutableRefObject<IntersectionObserver>;
    const parent = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let options = {
            root: parent.current,
            threshold: 1,
            rootMargin: '20px'
        }

        let callback = function (entries: IntersectionObserverEntry[] , observer: IntersectionObserver) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target instanceof HTMLElement){
                        //Вот тут асинхронно "читаем сообщение", сейчас синхронно
                        entry.target && readCurrentChatMessage(entry.target.dataset['messageId'] || "");
                        observer.unobserve(entry.target)
                    }
                }
            })
        }

        parent.current && parent.current.scrollTo({top: 0})

        observer.current = new IntersectionObserver(callback, options)
        document.querySelectorAll(`div[data-message-readed='false']`).forEach(div => {
            observer.current.observe(div)
        })

        let firstUnreaded = parent.current?.querySelector(`div[data-message-readed='false']`);
        if (firstUnreaded) {
            if(parent.current && parent.current.firstChild !== firstUnreaded) firstUnreaded.scrollIntoView({behavior: 'smooth'});
        } else {
            if(parent.current) parent.current.scrollTop = parent.current.scrollHeight;
        }

        return ()=>{
            document.querySelectorAll(`div[data-message-readed='false']`).forEach(div => observer.current.unobserve(div))
        }

    }, [currentDialogMessages])

    //TODO- Дописать логику здесь, прочитанных собщений, обзёрвер и т.д. Дописать функцию для прочтения сообщения в store.

    return (
        <div className={chatBlock('Body')} ref={parent}>
            {currentDialogMessages.map((message, idx, messages) => {
                if (message.message_from === 'me') {
                    let copyOrder = customInputMsgOrder.current
                    customInputMsgOrder.current++;
                    return (
                        <OutboxMessage message={message} key={message.message_id} first={copyOrder === 1} />
                    )
                } else {
                    customInputMsgOrder.current = 1;
                    let order = messages[idx].message_from === message.message_from && customOrder.current === 2 ? 'second' : 'first';
                    if (idx === 0 || messages[idx-1].message_from === 'me') {
                        order = 'first'
                    }
                    if (order === 'second') {
                        customOrder.current = 1
                    } else {
                        customOrder.current = 2
                    }
                    return (
                        <InputMessage message={message} key={message.message_id} order={order}/>
                    )
                }
            })}
        </div>
    );
});

export default Messages;
