import React from 'react';
import {formDataType, LoginReduxForm} from "./LoginForm";


const Login = () => {
    const onSubmit = (formData: formDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    );
};

export default Login;