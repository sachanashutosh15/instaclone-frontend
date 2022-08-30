import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='landingPage-container'>
      <div className='landingPage-leftContainer'>
        <img src='./images/landingPage.jpeg' className='landingPage-image' alt='' />
      </div>
      <div className='landingPage-rightContainer'>
        <h1>10x Team 04</h1>
        <Link to='/posts'><button id='landingPage-button'>Enter</button></Link>
      </div>
    </div>
  );
}

export default LandingPage;
