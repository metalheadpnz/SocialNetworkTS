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
import {dialogType, messageDataType, postType} from "./redux/state";

type propsType = {
    state: {
        profilePage: {
            postsData: postType[],
            textAreaValue: string
        }
        dialogsPage: {
            dialogsData: dialogType[]
            messagesData: messageDataType
        }
    },
    addPost: () => void,
    changeTextAreaValue: (value: string) => void
}

function App(props: propsType) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

            <div className='app-content-wrap'>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                    <Route path={'/profile'} element={<Profile changeTextAreaValue={props.changeTextAreaValue}
                                                               addPost={props.addPost}
                                                               profilePage={props.state.profilePage}/>}/>
                    <Route path={'/dialogs/*'} element={<Dialogs dialogsPage={props.state.dialogsPage}/>}/>
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
