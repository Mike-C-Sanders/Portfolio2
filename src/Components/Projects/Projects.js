import React from 'react'
import myPhoto from '../../assets/Images/myphoto.jpg'
import noteTaker from '../../assets/Images/Projects/NoteTaker.png'
import Project from '../Project/Project'
export default function Projects () {
    //project object array, which will be looped through
    const myProjects = [
        {
            title: "Event Planner",
            image: myPhoto,
            github: "githublink",
            site: "live site link"
        },
        {
            title: "Movie Tracker",
            image: myPhoto,
            github: "githublink",
            site: "live site link"
        },
        {
            title: "Text Editor",
            image: myPhoto,
            github: "githublink",
            site: "live site link"
        },
        {
            //GIF....
            title: "Employee Tracker",
            image: myPhoto,
            github: "https://github.com/Mike-C-Sanders/EmployeeTracker",
            site: "live site link"
        },
        {
            title: "Note Taker",
            image: noteTaker,
            github: "https://github.com/Mike-C-Sanders/NoteTaker",
            site: "https://git.heroku.com/boiling-hollows-65517.git"
        },
        {
            title: "Code Quiz",
            image: myPhoto,
            github: "githublink",
            site: "live site link"
        }
    ];

    return (
        <div>
            <h2>My Projects</h2>
            {
                myProjects.map( project => (
                    <Project project={project}/>
                ))
                
            }
        </div>
    )
}