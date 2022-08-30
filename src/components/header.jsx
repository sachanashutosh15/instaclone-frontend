import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div style={{display: 'flex', alignItems: 'center', marginLeft: '1em'}}>
        <img className='header--logo' src='./images/instaIcon.png' alt='' />
        <h1 className='header--heading'>Instaclone</h1>
      </div>
      <Link to='/newPost'><i className="bi bi-camera"></i></Link>
    </div>
  );
}

export default Header;
