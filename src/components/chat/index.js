import React from 'react';
import { render } from 'react-dom';
import Chat from './Chat';
import styled from 'styled-components';

const ChatContainer = styled.div`
  font-family: 'Open sans', 'sans-serif';
  border: 1px solid #ccc;
  width: 80%;
  margin: 0 auto;
`;

const messages = [
  { text: 'Testing...', position: 'right', color: '#FFD54F'},
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante nulla, rhoncus eget cursus at, porttitor a lacus. Donec a euismod nisi, nec venenatis sapien. In interdum sagittis lectus laoreet fermentum. Aliquam ut scelerisque felis, dictum fringilla urna. Etiam vel vestibulum nibh. In vel lacus eget arcu molestie malesuada in sit amet dui. Nunc posuere molestie sapien, eu bibendum ipsum. Curabitur ullamcorper elit mauris. Cras vitae lectus sem.', position: 'left' },
  { text: 'Testing...', position: 'left' },
  { text: 'Testing...', position: 'left' },
  { text: 'Testing...', position: 'right', color: '#FFD54F'},
  { text: 'Testing...', position: 'left' },
  { text: 'Testing...', position: 'left' },
  { text: 'Testing...', position: 'right', color: '#FFD54F'},
  { text: 'Testing...', position: 'right', color: '#FFD54F' },
  { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante nulla, rhoncus eget cursus at, porttitor a lacus. Donec a euismod nisi, nec venenatis sapien. In interdum sagittis lectus laoreet fermentum. Aliquam ut scelerisque felis, dictum fringilla urna. Etiam vel vestibulum nibh. In vel lacus eget arcu molestie malesuada in sit amet dui. Nunc posuere molestie sapien, eu bibendum ipsum. Curabitur ullamcorper elit mauris. Cras vitae lectus sem.', position: 'right', color: '#FFD54F' }
];


const ChatApp = () => (
  <ChatContainer>
    <Chat messages={messages} />
  </ChatContainer>
);

// render(<ChatApp /> );

export default ChatApp