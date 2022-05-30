import React from 'react'
import myPhoto from '../../assets/Images/myphoto.jpg'

export default function About () {
    return (
        <>
            <h1>About Me</h1>
            
            <img src={myPhoto} alt="picture of mike"></img>

            <p>I'm a web developer with a background in project management and Saas software implementation.</p>
            <p>My favorite past times include spending time with my beautiful wife Tatiana and my adorable daughter Alice. I'm a passionate puzzle hunter and love a good puzzle game, escape room or riddle.</p>
        </>
    )
}