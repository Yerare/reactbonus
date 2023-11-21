import React, { useState } from 'react';
import Message from './Message';

const Messenger = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [chats, setChats] = useState([
        { id: 1, name: 'Chat 1' },
        { id: 2, name: 'Chat 2' },
        { id: 3, name: 'Chat 3' },
    ]);
    const [selectedChat, setSelectedChat] = useState(null);

    const handleMessageSend = () => {
        if (inputText.trim() !== '') {
            const newMessage = {
                text: inputText,
                timestamp: new Date().toLocaleTimeString(),
            };
            setMessages([...messages, newMessage]);
            setInputText('');
        }
    };

    const handleChatSelect = (chatId) => {
        setSelectedChat(chatId);
        setMessages([]);
    };

    return (
        <div className="messenger-container">
            <div className="chat-list">
                <h2>Contacts</h2>
                <ul>
                    {chats.map((chat) => (
                        <li key={chat.id} onClick={() => handleChatSelect(chat.id)}>
                            {chat.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="message-container">
                <div className="message-list">
                    {messages.map((message, index) => (
                        <Message key={index} message={message} />
                    ))}
                </div>
                <div className="message-input">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <button onClick={handleMessageSend}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Messenger;
