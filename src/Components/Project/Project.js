//Project component is for an individual project
import React from "react";


export default function Project({project}) {
    return (
      <>
      <div class="col-sm-4 ">

        <div className="card h-100"  >
              <h5 className="card-title">{project.title}</h5>
            <img className= "card-img-top" src={project.image} alt={project.key}></img>
            <div className="card-body text-center">
              <a href= {project.github}  className="card-link">Github Repo</a>
              <a href= {project.site} className="card-link ">Deployed Link</a>
            </div>
        </div>
      </div>
      </>
  );
}
// {project.github}{project.site}
      // <div class="col-sm-4 ">

      //   <div className="card h-100"  >
      //         <h5 className="card-title">{project.title}</h5>
      //       <img className= "card-img-top" src={project.image}></img>
      //       <div className="card-body text-center">
      //         <a href= {project.github}  className="card-link">Github Repo</a>
      //         <a href= {project.site} className="card-link ">Deployed Link</a>
      //       </div>
      //   </div>
      // </div>