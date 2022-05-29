import React from 'react'
import Typical from 'react-typical'

export default function Profile() {
    return(
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Mike</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Puzzle Enthusiast 🧩",
                                    1000,
                                        "Full Stack Developer 💻",
                                    1000,
                                        "MERN Stack Developer 😎",
                                    1000,
                                        "React Developer 📱",
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className ='profile-role-tagline'>
                                Full stack developer with leadership experience and technical know-how.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Contact Me {" "}
                        </button>
                        <a href='Mike Sanders Resume - 2022_.pdf' download='Mike Sanders Resume - 2022_.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>

        </div>
    )
}