// Login.js
import React, { useState } from 'react';
import './Login.css';

import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { Link } from '@mui/material';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail = () => {
        // Perform email validation, e.g., check for the presence of '@'
        if (email && !email.includes('@')) {
            alert('Please add @ symbol to your email address');
        }
    };

    const navigateToGmail = () => {
        const subject = encodeURIComponent('Password Reset Request');
        const body = encodeURIComponent('Please send me the email for password reset.');
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=weekwonders.app@gmail.com&su=${subject}&body=${body}`;
        window.location.href = gmailUrl;
    };


    const handleLogin = () => {
        if(!email) {
            alert('Please enter User Name');
            return
        }
        if(!password) {
            alert('Please enter Password');
            return
        }
        // Add logic for handling login
        console.log('Login Successfull for ' + email);
        window.location.href = "/purple.html";

    };

    return (
        <div className='container'>
            <div className='header'>
            <div className='text'>Login @ WeekWonders<br></br><img className='a' src="/calendar logo.png" height="100px" width="100px"></img></div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={email_icon} alt='email icon' />
                    <input
                        type='email'
                        placeholder='Email'
                        title='Please fill in your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={validateEmail}
                    />
                </div>
                <div className='input'>
                    <img src={password_icon} alt='password icon' />
                    <input
                        type='password'
                        placeholder='Password'
                        title='Please fill in your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className='forgot-password' onClick={navigateToGmail}>

                Forgot Password?<span> Click here!</span>
            </div>
            <div className='forgot-password' onClick={navigateToGmail}>

                <Link href="/" variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
            </div>


            <div className='submit-container'>
                <button class="button-85" role="button" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default LoginPage;
