import React from 'react';

const Message = ({ message }) => {
    return (
        <div className="message">
            <p>{message.text}</p>
            <small>{message.timestamp}</small>
        </div>
    );
};

export default Message;
