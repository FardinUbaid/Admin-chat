import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ChatWindow from './components/ChatWindow/ChatWindow';
import QuickReplies from './components/QuickReplies/QuickReplies';
import FooterInput from './components/FooterInput/FooterInput';
import ChatQueue from './components/ChatQueue/ChatQueue';
import ProfileModal from './components/ProfileModal/ProfileModal';

function App() {
  return (
    <div className="app-container">
      <Header />
      <ChatQueue />
      <ChatWindow />
      <QuickReplies />
      <FooterInput />
      <ProfileModal />
    </div>
  );
}

export default App;
