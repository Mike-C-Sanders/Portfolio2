//Project component is for an individual project
import React from "react";


export default function Project({project}) {
    return (
    <div>
        <p>{project.title}</p>
        <img src={project.image}></img>
    </div>
  );
}
