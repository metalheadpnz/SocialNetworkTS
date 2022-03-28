import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route, Navigate} from 'react-router-dom';
import NotFound from "./components/common/NotFound";
import Music from "./components/Music";
import Settings from "./components/Settings";
import News from './components/News';

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className='app-content-wrap'>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/dialogs'} element={<Dialogs/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/*'} element={<NotFound/>}/>
                </Routes>
            </div>

        </div>
    );
}

export default App;
