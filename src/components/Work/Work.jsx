import React from 'react';
import './Work.css';
import myImg from './images.png'
import myImg2 from './5234318.png'
import myImg3 from './1804352.png'
import { Link } from 'react-router-dom';

function Work() {
  return (
    <div className='Work-container'>
      <h1>What brings you to Dribble?</h1>
      <span className='Work-span'>Select the options that best describe you. Don't worry, you can explore other options later</span>
      <div className='cards'>
        <div className='card'>
        <img src={myImg} className='Work-image'/>
          <h4>I'm a designe looking to share my work</h4>
        </div>
        <div className='card'>
        <img src={myImg2} className='Work-image'/>
          <h4>I'm a designe looking to hire a designer</h4>
        </div>
        <div className='card'>
        <img src={myImg3} className='Work-image'/>
          <h4>I'm looking for design <br></br>inspiration</h4>
        </div>
      </div>
      <h4>Anything else? You can select multiple</h4>
      <Link to='/EmailVerify'><button>Finish</button></Link>
      <Link to='/Profile'><span className='return'>or Press Return</span></Link>
    </div>
  );
}

export default Work;
