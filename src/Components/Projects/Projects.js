import React from 'react'
//Project images/gifs
import eventPlanner from '../../assets/Images/Projects/EventPlanner.JPG'
import movieTracker from '../../assets/Images/Projects/MovieTracker.png'
import textEditor from '../../assets/Images/Projects/TextEditor.JPG'
import employeeTracker from '../../assets/Images/Projects/EmployeeTracker.gif'
import noteTaker from '../../assets/Images/Projects/NoteTaker.png'
import codeQuiz from '../../assets/Images/Projects/CodeQuiz.png'

//individual project component
import Project from '../Project/Project'
export default function Projects () {
    //project object array, which will be looped through
    const myProjects = [
        {
            title: "Event Planner",
            image: eventPlanner,
            github: "https://github.com/Morganbb104/Event_Planner_project2",
            site: "https://obscure-chamber-98928.herokuapp.com/"
        },
        {
            title: "Movie Tracker",
            image: movieTracker,
            github: "https://github.com/Mike-C-Sanders/Movie-Tracker",
            site: "https://mike-c-sanders.github.io/Movie-Tracker/"
        },
        {
            title: "Text Editor",
            image: textEditor,
            github: "https://github.com/Mike-C-Sanders/TextEditor",
            site: "https://mikes-text-editor.herokuapp.com/"
        },
        {
            //GIF....
            title: "Employee Tracker",
            image: employeeTracker,
            github: "https://github.com/Mike-C-Sanders/EmployeeTracker",
            site: "https://youtu.be/rREtaYCCvx0"
        },
        {
            title: "Note Taker",
            image: noteTaker,
            github: "https://github.com/Mike-C-Sanders/NoteTaker",
            site: "https://git.heroku.com/boiling-hollows-65517.git"
        },
        {
            title: "Code Quiz",
            image: codeQuiz,
            github: "https://github.com/Mike-C-Sanders/CodeQuiz",
            site: "https://mike-c-sanders.github.io/CodeQuiz/"
        }
    ];

    return (
        <div>
            <h2>My Projects</h2>
            <div class="row">
                
            {
                myProjects.map( project => (
                    <Project project={project}/>
                ))
                
            }
            </div>
        </div>
    )
}