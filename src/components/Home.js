import React from 'react';
import Projects from './Projects.js'
import DataProjects from '../Assets/name-projects'
import './Home.css'

class Home extends React.Component{
    
    render(){
        
        return(
            <main className='main'>
                <h1>Projetos Realizados</h1>
                <div className='all-projects'>

                {DataProjects.map(project=>(
                    <Projects projetos={project}/>
                ))}
                </div>
            </main>
        )
    }
}

export default Home;