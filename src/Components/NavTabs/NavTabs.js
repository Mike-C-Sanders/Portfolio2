import React from 'react'

export default function NavTabs ({ currentPage, handlePageChange }) {
  return (
    <>
      <div className='nav-color'>
    <h1 className='main-title'>Mike Sanders | Full Stack Developer</h1>

        <ul className="nav nav-tabs justify-content-end" id='nav-text-color'>
          <li className="nav-item">
            <a
              href="#profile"
              onClick={() => handlePageChange('Profile')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
            >
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>
          
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              onClick={() => handlePageChange('Projects')}
              
              className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            >
              Projects
            </a>
          </li>
          {/* <li className="nav-item">
            <a
              href="#skills"
              onClick={() => handlePageChange('Skills')}
              
              className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
            >
              Skills
            </a>
          </li> */}
        </ul>
      </div>
      </>
    );
  }
  