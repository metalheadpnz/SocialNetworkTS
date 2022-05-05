import React from 'react';
import {reduxForm, Field, InjectedFormProps} from "redux-form";

export type formDataType = {
    login: string
    pass: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<formDataType>> = (props) => {
    // console.log('form')
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                {/*<input type="text" placeholder={'Login'}/>*/}
                <Field component={'input'} name={'login'} placeholder={'Login'}/>
            </div>

            <div>
                <Field component={'input'} name={'pass'} placeholder={'Password'}/>
                {/*<input type="text" placeholder={'Password'}/>*/}
            </div>

            <div>
                {/*<input type="checkbox"/> Remember me*/}
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> Remember Me
            </div>

            <div>
                <button>login</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<formDataType>({
    form: 'login'
})(LoginForm)
