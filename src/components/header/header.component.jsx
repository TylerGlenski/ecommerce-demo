import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/logo.svg'

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="nav">
            <Link className="nav-item" to='/shop'>
                SHOP
            </Link>
            <Link className="nav-item" to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='nav-item' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='nav-item' to='/login'>SIGN IN</Link>
            }
        </div>
    </div>
);

export default Header;