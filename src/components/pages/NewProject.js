import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
import { useNavigate } from 'react-router-dom'

const NewProject = () => {

    const navigate = useNavigate

    const createPost = (project) => {
        const url = "http://localhost:5000/projects"
        project.cost = 0
        project.services = []

        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(project)
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
            }).catch(err => console.log(err))
    }

    return (
        <div className={styles.newProject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
        </div>
    )
}

export default NewProject