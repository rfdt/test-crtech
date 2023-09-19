import React, {useState} from 'react';
import {cn} from "../../scripts/cn";
import './Chat.scss';

function Chat() {

    const chatBlock = cn('Chat')

    const [isTyping, setIsTyping] = useState(true);
    const [isLoadingMessages, setIsLoadingMessages] = useState(true);

    return (
        <div className={chatBlock()}>
            <div className={chatBlock('Header')}>
                <div className={chatBlock('Header-Сompanion-Title')}>
                    Анастасия Александровна
                </div>
                {isTyping ?
                    <div className={chatBlock('Header-Companion-Writing')}>
                        <span className={chatBlock('Header-Companion-Writing-Dot')}></span>
                        <span className={chatBlock('Header-Companion-Writing-Dot')}></span>
                        <span className={chatBlock('Header-Companion-Writing-Dot')}></span>
                        <span
                            className={chatBlock('Header-Companion-Writing-Title')}>Печатает</span>
                    </div>
                    :
                    <div className={chatBlock('Header-Companion-Online')}>
                        Online
                    </div>
                }
            </div>
            {/*<div className={chatBlock('Body')}>*/}
            {/*    <div className={chatBlock('Message-From')}>*/}
            {/*        <div className={chatBlock('Message-From-Content')}>*/}
            {/*            Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет*/}
            {/*            никакого отношения к обитателям водоемов. Используется он веб- дизайнерами для вставки на*/}
            {/*            интернет-страницы.*/}
            {/*        </div>*/}
            {/*        <div className={chatBlock('Message-From-Time')}>*/}
            {/*            10:27*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={chatBlock('Message-From')}>*/}
            {/*        <div className={chatBlock('Message-From-Content')}>*/}
            {/*            Доброе утро!*/}
            {/*        </div>*/}
            {/*        <div className={chatBlock('Message-From-Time')}>*/}
            {/*            10:27*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={chatBlock('Message-To')}>*/}
            {/*        <div className={chatBlock('Message-To-Content')}>*/}
            {/*            Привет! Ты что - ебанулся там совсем?*/}
            {/*        </div>*/}
            {/*        <div className={chatBlock('Message-To-Time')}>*/}
            {/*            10:28*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={chatBlock('Message-To')}>*/}
            {/*        <div className={chatBlock('Message-To-Content')}>*/}
            {/*            Иди ка ты нахуй долбаёб ебанный.*/}
            {/*        </div>*/}
            {/*        <div className={chatBlock('Message-To-Time')}>*/}
            {/*            10:28*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={chatBlock('Message-To')}>*/}
            {/*        <div className={chatBlock('Message-To-Content')}>*/}
            {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate distinctio,*/}
            {/*            dolore dolorum ducimus ea eos ipsam iste labore natus necessitatibus officia officiis optio*/}
            {/*            perspiciatis possimus quaerat, quia ullam vero!*/}
            {/*        </div>*/}
            {/*        <div className={chatBlock('Message-To-Time')}>*/}
            {/*            10:28*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={chatBlock('Message-From')}>*/}
            {/*        <div className={chatBlock('Message-From-Content')}>*/}
            {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cupiditate dolores explicabo*/}
            {/*            fugit magni numquam omnis quibusdam reiciendis reprehenderit, sapiente vel veniam. Eius eveniet,*/}
            {/*            ipsam laudantium nesciunt nobis perferendis repellendus.*/}
            {/*        </div>*/}
            {/*        <div className={chatBlock('Message-From-Time')}>*/}
            {/*            10:27*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={chatBlock('Message-Date')}>*/}
            {/*        18 Сентября 2023 г.*/}
            {/*    </div>*/}
            {/*    <div className={chatBlock('Message-To')}>*/}
            {/*        <div className={chatBlock('Message-To-Content')}>*/}
            {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate distinctio,*/}
            {/*            dolore dolorum ducimus ea eos ipsam iste labore natus necessitatibus officia officiis optio*/}
            {/*            perspiciatis possimus quaerat, quia ullam vero!*/}
            {/*        </div>*/}
            {/*        <div className={chatBlock('Message-To-Time')}>*/}
            {/*            10:28*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={chatBlock('Message-From')}>*/}
            {/*        <div className={chatBlock('Message-From-Content')}>*/}
            {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cupiditate dolores explicabo*/}
            {/*            fugit magni numquam omnis quibusdam reiciendis reprehenderit, sapiente vel veniam. Eius eveniet,*/}
            {/*            ipsam laudantium nesciunt nobis perferendis repellendus.*/}
            {/*        </div>*/}
            {/*        <div className={chatBlock('Message-From-Time')}>*/}
            {/*            10:27*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={chatBlock('Message-To')}>*/}
            {/*        <div className={chatBlock('Message-To-Content')}>*/}
            {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate distinctio,*/}
            {/*            dolore dolorum ducimus ea eos ipsam iste labore natus necessitatibus officia officiis optio*/}
            {/*            perspiciatis possimus quaerat, quia ullam vero!*/}
            {/*        </div>*/}
            {/*        <div className={chatBlock('Message-To-Time')}>*/}
            {/*            10:28*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={chatBlock('Message-To')}>*/}
            {/*        <div className={chatBlock('Message-To-Content')}>*/}
            {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate distinctio,*/}
            {/*            dolore dolorum ducimus ea eos ipsam iste labore natus necessitatibus officia officiis optio*/}
            {/*            perspiciatis possimus quaerat, quia ullam vero!*/}
            {/*        </div>*/}
            {/*        <div className={chatBlock('Message-To-Time')}>*/}
            {/*            10:28*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={chatBlock('Message-From')}>*/}
            {/*        <div className={chatBlock('Message-From-Content')}>*/}
            {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cupiditate dolores explicabo*/}
            {/*            fugit magni numquam omnis quibusdam reiciendis reprehenderit, sapiente vel veniam. Eius eveniet,*/}
            {/*            ipsam laudantium nesciunt nobis perferendis repellendus.*/}
            {/*        </div>*/}
            {/*        <div className={chatBlock('Message-From-Time')}>*/}
            {/*            10:27*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {
                isLoadingMessages ?
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
                    : null
            }
            <div className={chatBlock('Write')}>
                <input type="text" placeholder={'Написать сообщение...'} className={chatBlock('Write-Input')}/>
            </div>
        </div>
    );
}

export default Chat;
