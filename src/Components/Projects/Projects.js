import React from 'react'
import myPhoto from '../../assets/Home/myphoto.jpg'
import Project from '../Project/Project'
export default function Projects () {
    const myProjects = [
        {
            title: "project 1",
            image: myPhoto,
            github: "githublink",
            site: "live site link"
        }
    ];

    return (
        <div>
            <h1>My Projects</h1>
            {
                myProjects.map( project => (
                    <Project project={project}/>
                ))
                
            }
        </div>
    )
}