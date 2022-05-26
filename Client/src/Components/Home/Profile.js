import React from 'react'
//import the 
import {FaGithub} from 'react-icons/fa';

export default function Profile() {
    return(
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='my-colors'>
                        <a href='#'>
                            <i className='bi bi-github'></i>
                        </a>
                        <a href='#https://github.com/Mike-C-Sanders'>
                            <FaGithub/>
                        </a>
                        <a href='#'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}