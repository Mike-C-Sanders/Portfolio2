import React from 'react'
import myPhoto from '../../assets/Images/myphoto.jpg'
import Skills from '../Skills/Skills'
export default function About () {
    return (
        <>
            <h1>About Me</h1>
            <div className="text-center">
            <img className="img-fluid my-photo" src={myPhoto} alt="picture of mike"></img>

            </div>

            <p>I'm a web developer with a background in project management and Saas software implementation.</p>
            <p>My favorite past times include spending time with my beautiful wife Tatiana and my adorable daughter Alice. I'm a passionate puzzle hunter and love a good puzzle game, escape room or riddle.</p>
            
        </>
    )
}