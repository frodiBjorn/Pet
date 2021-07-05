import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 4 },
  { id: 2, message: "It is my first post", likesCount: 12 },
  { id: 3, message: "My name is Ivan", likesCount: 2 },
]
let dialogs = [
  { id: 1, name: "Ivan" },
  { id: 2, name: "Maskim" },
  { id: 3, name: "Ivan" },
  { id: 4, name: "Svyatoslav" },
  { id: 5, name: "Valeria" },
  { id: 6, name: "John" },
]
let messages = [
  { id: 1, message: "Hi" },
  { id: 1, message: "How are you?" },
  { id: 1, message: "What is your name?" },

]
ReactDOM.render(

  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
