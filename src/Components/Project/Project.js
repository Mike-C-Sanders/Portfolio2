//Project component is for an individual project
import React from "react";

//TODO Create a project card for each project
export default function Project({project}) {
    return (
    <div>
        <p>{project.title}</p>
        <img src={project.image}></img>
    </div>
  );
}
