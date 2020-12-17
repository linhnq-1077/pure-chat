import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import './App.css';

import { useAuthState } from 'react-firebase-hooks/auth';

import SignIn from './SignIn';
import SignOut from './SignOut';
import ChatRoom from './ChatRoom';

firebase.initializeApp({
  apiKey: 'AIzaSyBuxogPEe0YNUQZuKfcRZNWr0-wcZZkp5o',
  authDomain: 'pure-chat-c3b0d.firebaseapp.com',
  projectId: 'pure-chat-c3b0d',
  storageBucket: 'pure-chat-c3b0d.appspot.com',
  messagingSenderId: '508440801798',
  appId: '1:508440801798:web:82cb044857222ac060c987',
  measurementId: 'G-R1DQMV7X83',
});

const App = () => {
  const [user] = useAuthState(firebase.auth());
  return (
    <div className="App">
      <header>
        <h1>Pure Chat 🔥</h1>
        <SignOut />
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
};

export default App;
