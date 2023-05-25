import React from 'react';
import './skills.css';

import { AiOutlinePlus } from 'react-icons/ai';

function Skills() {
  const skillsData = ['CSS', 'HTML', 'JAVASCRIPT', 'REACT JS'];

  return (
    <div className='skills-container'>
      <h1>Yeteneklerim</h1>
      <div className='skills-content'>
        {skillsData.map((skill) => (
          <div className='skill-box'>
            <AiOutlinePlus />
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
