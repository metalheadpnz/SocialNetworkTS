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
import {actionsTypes, stateType, storeType} from "./redux/store";

type propsType = {
    state: stateType
    dispatch: (action: actionsTypes) => void
    store: storeType
}

function App(props: propsType) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className='app-content-wrap'>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                    <Route path={'/profile'}
                           element={<Profile dispatch={props.dispatch.bind(props.store)}
                                             profilePage={props.state.profilePage}/>}/>
                    <Route path={'/dialogs/*'}
                           element={<Dialogs dispatch={props.dispatch.bind(props.store)}
                                             dialogsPage={props.state.dialogsPage}/>}/>
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
