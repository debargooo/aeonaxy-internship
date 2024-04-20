import React, { useState } from 'react';
import './Navbar.css';
import myImg from './images1.jpg'; 

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [image, setMyImg] = useState(myImg); 


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = () => {
    console.log("Searching for: ", searchTerm);
  };

  const handleOnFocus = () => { 
    setIsFocused(true); 
  }; 

  const handleBlur = () => { 
    setIsFocused(false); 
  }; 

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);
    setMyImg(imageUrl); 
  };

  const handleClickUpload = () => {
    document.getElementById('input-file').click(); 
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className='logo-links'>
          <h1 className="navbar-logo" style={{ color: props.color }}>dribble</h1>
          <ul className={isOpen ? 'navbar-links active' : 'navbar-links'} style={{ display: props.display }}>
            <li className="navbar-item" >
              <a href="#" className="navbar-link">Inspiration</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Find Work</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Learn Design</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Go Pro</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">Hire Designers</a>
            </li>
           
          </ul>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='menu-icon' onClick={toggleNavbar} ><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
         
        </div>
       
        <div className='navbar-menu' style={{ display: props.display }}>
          <div className="search-container">
            <div className='search-logo'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{display: isFocused ? 'none' : 'inline'}}><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
              <span className='search' style={{display: isFocused ? 'none' : 'inline'}}>Search</span>
            </div>
        
            <input
              className='nav-input'
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              onFocus={handleOnFocus}
              onBlur={handleBlur}
              style={{
                width: isFocused ? '10rem' : '5rem',
              }}
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M176 56V96H336V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zM128 96V56c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56V96v32V480H128V128 96zM64 96H96V480H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM448 480H416V96h32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64z"/></svg>

            <img src={image} alt="Profile" className='profile-icon'/>
            <input className='upload-input' type="file" accept='image/png,image/jpeg' id='input-file' onChange={handleImageUpload} style={{ display: 'none' }} />
            <button className='nav-btn' onClick={handleClickUpload}>Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
