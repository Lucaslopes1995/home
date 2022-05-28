import React from 'react';
import video from '../Videos/Project-TrybeTunes.mp4'
// import video1 from '../Videos/Project-FrontEnd-Online-Store.mp4'
import './Projects.css'




function Projects ({projetos:{name,project,url}}){



        console.log(video)

        return(
            <div className='projects' onClick={()=> window.location.href = url}>
                <a href={url}><p>{name}</p></a>
                <video autoplay width="200" height="400" src={project} controls>



                </video>
            </div>
        )
    }


export default Projects;