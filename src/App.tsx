import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Routes, Route, Navigate} from 'react-router-dom';
import NotFound from "./components/common/NotFound";
import Music from "./components/Music";
import Settings from "./components/Settings";
import News from './components/News';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/UsersAPIContainer";


function App() {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className='app-content-wrap'>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                    <Route path={'/profile'}
                           element={<Profile/>}/>
                    <Route path={'/dialogs/*'}
                           element={<DialogsContainer/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/users'} element={<Users/>}/>
                    <Route path={'/*'} element={<NotFound/>}/>
                </Routes>
            </div>


        </div>
    );
}

export default App;
