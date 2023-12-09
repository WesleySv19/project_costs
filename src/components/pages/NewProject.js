import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

const NewProject = () => {
    return (
        <div className={styles.newProject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm />
        </div>
    )
}

export default NewProject