import React from 'react';
import firebase from 'firebase/app';

const ChatMessage = props => {
  const { text, uid, photoURL } = props.message;
  const messageClass =
    uid === firebase.auth().currentUser.uid ? 'sent' : 'received';
  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'
          }
        />
        <p>{text}</p>
      </div>
    </>
  );
};

export default ChatMessage;
