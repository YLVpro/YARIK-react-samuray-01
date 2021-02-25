import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

let SomeComponent = () => <Navbar />

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          {/* <Route path='/news' component={Navbar} />
          <Route path='/music' component={Header} /> */}

          <Route path='/news' render={ SomeComponent }/>
          <Route path='/music' render={ () => <Header /> }/>
        </div>
      </div >
    </BrowserRouter>)
}

export default App;
