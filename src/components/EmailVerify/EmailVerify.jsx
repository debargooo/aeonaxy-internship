import React from 'react'
import './EmailVerify.css';
import myImg from './email.jpg'

function EmailVerify() {
  return (
    <div className='Email-container'>
        <h1>Please verify your email...</h1>
        <img src={myImg} className='Email-image'/>
        <div><span>Please verify your email address. We've sent a confirmation email to</span>
        <h4>account@refero.design</h4>
        <span>Click the confirmation link in that email to begin using Dribble</span></div>
        <span>Didn't receive the email?Check your Spam folder, it may have been caught by a filter. If</span>
        <span>you still dont't see it, you can <p>resend the confirmation email</p></span>
        <span>Wrong email address?<p>Change it</p></span>
    </div>
  )
}

export default EmailVerify