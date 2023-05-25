import React from 'react';
import './home.css';

import Profile from '../../assets/profile.svg';

import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

function Home() {
  return (
    <div className='page'>
      <div className='container home-container'>
        <img src={Profile} alt='' className='home-profile-pic' />
        <h1>Yusuf Ayaz</h1>
        <h4>Frontend Developer</h4>
        <div className='home-social-media'>
          <AiFillGithub className='social-media-icon' />
          <AiFillLinkedin className='social-media-icon' />
          <AiFillInstagram className='social-media-icon' />
        </div>
        <button className='button'>Hakkımda</button>
      </div>
    </div>
  );
}

export default Home;
