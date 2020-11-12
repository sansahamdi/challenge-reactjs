import React from 'react'
import DataItem from './DataItem'

function Projects(props){


    return (
        <div>
            <h2 className="text-important text-center">Projects</h2>
            <div className="projects-container">
                {DataItem.map((el,i)=> <div className="project-card">
                <img src={el.image} alt='' />
                <p>{el.description}</p>
                <p>Github <a href={el.link}>{el.name}</a></p>
                </div> )}                
            </div>
        </div>
    )
}

export default Projects