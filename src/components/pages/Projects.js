import styles from './Projects.module.css'
import Message from '../layout/Message'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'

import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'

const Projects = () => {

  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)

  const location = useLocation()
    let message = ''

    if(location.state) {
        message = location.state.message
    }

    useEffect(() => {
      const url = "http://localhost:5000/projects"

      fetch(url, {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        },
      }).then(res => res.json())
      .then(data => {
        console.log(data)
        setProjects(data)
        setRemoveLoading(true)
      })
      .catch(err => console.log(err))
    }, [])

    const removeProject = (id) => {
      const url = `http://localhost:5000/projects/${id}`
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }).then(data => {
        setProjects(projects.filter((project) => project.id !== id))
      }).catch(err => console.log(err))
    }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus projetos</h1>
        <LinkButton to="/newProject" text="Criar projetos"/>
      </div>

      {message && <Message type="success" msg={message}/>}
      <Container customClass="start">
        {projects.length > 0 &&
        projects.map((project) => (
          <ProjectCard
          id={project.id} 
          name={project.name}
          budget={project.budget}
          category={project?.category?.name}
          key={project.id}
          handleRemove={removeProject} 
        />
        ))}

        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados!</p>
        )}
      </Container>
    </div>
  )
}

export default Projects