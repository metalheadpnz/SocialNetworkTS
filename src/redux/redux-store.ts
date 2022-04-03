import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";

const reducers = combineReducers({
    dialogsReducer,
    profileReducer
})

const store = createStore(reducers)