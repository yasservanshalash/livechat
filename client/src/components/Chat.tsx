import { useState } from 'react';
import io from 'socket.io-client';
import { Message } from '../types/types';

const Chat = () => {
  const [messages, setMessages] = useState<any>([]);
  const [message, setMessage] = useState<any>('');

  // Connect to the server using the socket.io client
  const socket = io('http://localhost:8000');

  // Listen for incoming messages
  socket.on('message', (message: any) => {
    setMessages([...messages, message]);
  });

  const sendMessage = (e: any) => {
    e.preventDefault();
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <div>
      <h1>Chat App</h1>
      <ul>
        {messages.map((message: string, index: any) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={sendMessage}>
        <input value={message} onChange={e => setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
