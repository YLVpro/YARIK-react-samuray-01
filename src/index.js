import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 23 },
   { id: 2, message: 'All is well', likesCount: 16 }
  ]

  let dialogs = [
    { id: 1, name: 'Vasya' },
    { id: 2, name: 'Petya' },
    { id: 3, name: 'Kolya' },
    { id: 4, name: 'Sanya' },
    { id: 5, name: 'Vetal' }
]

let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'It-man' },
    { id: 3, message: 'USA' },
    { id: 4, message: 'USA' },
    { id: 5, message: 'USA' }
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
