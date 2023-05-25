import React from 'react';
import './sidebar.css';

import Logo from '../../assets/logo.png';
import { AiOutlineHome, AiOutlineFolder, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { RiComputerLine } from 'react-icons/ri';

function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt='' className='logo' />
      <nav>
        <div className='nav-menu'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <a href='/#'>
                <AiOutlineHome className='nav-icon' />
              </a>
            </li>
            <li className='nav-item'>
              <a href='#about'>
                <BsPerson className='nav-icon' />
              </a>
            </li>
            <li className='nav-item'>
              <a href='/#'>
                <RiComputerLine className='nav-icon' />
              </a>
            </li>
            <li className='nav-item'>
              <a href='/#'>
                <AiOutlineFolder className='nav-icon' />
              </a>
            </li>
            <li className='nav-item'>
              <a href='/#'>
                <AiOutlineMail className='nav-icon' />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='footer'>
        <span>2023 &copy;</span>
      </div>
    </aside>
  );
}

export default Sidebar;
