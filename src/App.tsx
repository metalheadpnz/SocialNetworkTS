import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route, Navigate} from 'react-router-dom';
import NotFound from "./components/common/NotFound";
import Music from "./components/Music";
import Settings from "./components/Settings";
import News from './components/News';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersAPIContainer from "./components/Users/UsersAPIContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";

function App() {
    // console.log('APP')
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className='app-content-wrap'>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/login'}/>}/>
                    <Route path={'/profile/:userID'}
                           element={<ProfileContainer/>}/>
                    <Route path={'/profile'}
                           element={<ProfileContainer/>}/>
                    <Route path={'/dialogs/*'}
                           element={<DialogsContainer/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/users'} element={<UsersAPIContainer/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/*'} element={<NotFound/>}/>
                </Routes>
            </div>


        </div>
    );
}

export default App;
