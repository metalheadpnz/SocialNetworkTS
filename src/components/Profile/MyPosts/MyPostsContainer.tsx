import React from 'react';
import {storeType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {addPostAC, changeTextAreaValueAC} from "../../../redux/profile-reducer";
import StoreContext from '../../../StoreContext';

// type propsType = {
//     store: storeType
// }

const MyPostsContainer: React.FC = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState()
                const dispatch = store.dispatch.bind(store)

                const addPostButtonHandler = () => {
                    dispatch(addPostAC())
                }

                const onTextAreaChange = (newtextAreaValue: string) => {
                    // changeTextAreaValue(e.currentTarget.value)
                    // props.dispatch({type: 'CHANGE-TEXT-AREA-VALUE', payload: {value: e.currentTarget.value}})
                    dispatch(changeTextAreaValueAC(newtextAreaValue))
                }

                return (
                    <MyPosts postsData={state.profilePage.postsData}
                             textAreaValue={state.profilePage.textAreaValue}
                             addPostButtonHandler={addPostButtonHandler}
                             onTextAreaChange={onTextAreaChange}/>
                )
            }
            }

        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;