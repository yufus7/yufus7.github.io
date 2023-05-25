import React from 'react';
import './about.css';

import Profile from '../../assets/profile.svg';
import Skills from '../skills/Skills';

function About() {
  return (
    <section id='about' className='page'>
      <div className='container'>
        <div className='about-container'>
          <h1>Hakkımda</h1>
          <div className='about-details'>
            <div className='about-pic'>
              <img src={Profile} alt='' />
            </div>
            <article className='about-box'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                repellat fugiat ea deleniti in quo eum molestiae praesentium
                voluptatem, dolorum laborum officia nulla dolorem! Beatae, natus
                ea. Similique facilis autem ab enim fugit, delectus ipsa.
                Possimus quis vitae minima repudiandae dolorem. Enim consectetur
                temporibus perspiciatis, harum officiis facere eos perferendis?
              </p>
              <div>
                <button className='button'>Özgeçmiş İndir</button>
              </div>
            </article>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
}

export default About;
