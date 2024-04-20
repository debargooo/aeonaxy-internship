import React, { useState } from 'react';
import ProfileCSS from './Profile.module.css';
import myImg from './images.png'; // Import the default image
import { Link } from 'react-router-dom';

export default function Profile() {
  const [image, setImage] = useState(myImg); // Set initial state to default image

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);
    setImage(imageUrl); // Update the image state with the newly uploaded image
  };

  return (
    <div className={ProfileCSS.container}>
      <div>
        <h1>Welcome! Let's create your profile</h1>
        <span>Let others get to know you better! You can do these later</span>
      </div>
      <h3>Add an avatar</h3>
      <div className={ProfileCSS.image}>
        <div className="image-preview">
          <img src={image} alt="Profile" />
        </div>
        <div className={ProfileCSS.upload}>
          <label className={ProfileCSS.label} htmlFor='input-file'>Choose Image</label>
          <div>
            <input className={ProfileCSS.input} type="file" accept='image/png,image/jpeg' id='input-file' onChange={handleImageUpload} />
            <span>Or choose one of our defaults</span>
          </div>
        </div>
      </div>
      <div>
        <h3>Add your location</h3>
        <input type='text' className={ProfileCSS.location}></input>
      </div>
      <Link to='/Work'><button>Next</button></Link>
      <Link to='/Login'><p>or Press Return</p></Link>
    </div>
  );
}
