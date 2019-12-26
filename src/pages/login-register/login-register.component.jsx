import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './login-register.styles.scss';


const LoginRegisterPage = () => (
    <div className="sign-in-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default LoginRegisterPage;