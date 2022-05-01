import React from 'react';
import {Navigate} from 'react-router-dom';

export const WithAuthRedirect = (Component: any) => {

    function RedirectComponent(props: any) {
        if (!props.isAuth) {
            return <Navigate to='/login'/>
        }

        return <Component {...props}/>
    }
};
