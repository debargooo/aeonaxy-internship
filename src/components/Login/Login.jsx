import React from 'react'
import LoginCSS from './Login.module.css';
import myImg from './9701636.png'
import { Link } from 'react-router-dom';


export default function Login() {
  return (
    <>
    
    <div className={LoginCSS.container}>
   <nav>
   <h2 id={LoginCSS.logo}>dribble</h2>
   <h6>Already a member?Sign In</h6>
   </nav>
   <main><div className={LoginCSS.sidebarleft}>
   
        
   <p className={LoginCSS.text}>Discover the world's top</p>
   <p className={LoginCSS.text}>Designers & Creatives</p>
  <img src={myImg} className={LoginCSS.image}/>
  <div className={LoginCSS.credits}>
  <span className={LoginCSS.privacy}>Art by </span>
  <a href='/'>Peter Tasks</a>
 
 
   </div>
   
</div>
<div className={LoginCSS.sidebarright}>

<h1 className={LoginCSS.loginheader}>Sign Up to Dribble</h1>

<form>
 <div className={LoginCSS.inputArea}>
  <div className={LoginCSS.info}>
  <label>Name</label>
  <input type='text' required id={LoginCSS.name}></input>
  </div>
  <div className={LoginCSS.info}>
  <label>Username</label>
  <input type='text' required id={LoginCSS.username}></input></div>
  </div>
  
  
  <label>Email</label>
  <input type='email' required id={LoginCSS.email}></input>
  <label>Password</label>
  <input type='password' required id={LoginCSS.password}></input>
  <div className={LoginCSS.termsConditions}> 
  <input type='checkbox' required></input>
  <div className={LoginCSS.privacyContainer}>
  <span className={LoginCSS.privacy}>Creating an account means you're ok with our </span>
  <a>Terms of Services. Privicy Policy</a>
  <span className={LoginCSS.privacy}>,and our default </span>
  <a>Notification Settings</a>
  </div>
 
  </div>
 <Link to='/Profile'><button type='submit' className='account-btn'>Create Account</button></Link>
 
</form>
<div className={LoginCSS.protection}>
<span>The site is protected by reCAPTCHA and the Google </span>
<a>Privicy Policy </a>
<span>and </span>
<a>Terms of Services </a>
<span>apply</span>
</div>


</div>

</main>
      
     
    </div>
    </>
   
  )
}
