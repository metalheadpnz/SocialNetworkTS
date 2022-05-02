import React, {ComponentType} from 'react';
import {Navigate} from 'react-router-dom';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";

type mstp = { isAuth: boolean }
const mapStateToProps = (state: AppStateType): mstp => ({isAuth: state.auth.resultCode === 0})

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: mstp) {
        const {isAuth, ...restProps} = props

        if (!isAuth) {
            return <Navigate to={'/login'}/>
        }
        return <Component {...restProps as T}/>
    }


    return connect(mapStateToProps)(RedirectComponent)
}
