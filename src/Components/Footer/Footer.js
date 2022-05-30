//Footer.js is used for the footer of the webpage
import React from 'react'
//import the react icon library the 
import {FaGithub, FaEnvelope, FaLinkedin} from 'react-icons/fa';

export default function About () {
    return (
        <>
        <div className="align-bottom">
            <p>Mike Sanders  2022</p>
            <div className='my-links'>
                        
                <a href='https://www.linkedin.com/in/miksanders/'>
                    <FaLinkedin />
                </a>
                <a href='https://github.com/Mike-C-Sanders'>
                    <FaGithub />
                </a>
                {/* envelope  */}
                <a href='mike@mikecsanders.com'>
                    <FaEnvelope />
                </a>
                        
                </div>
        </div>
        </>
    )
}