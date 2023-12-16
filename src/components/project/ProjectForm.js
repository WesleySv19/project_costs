import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import { useState, useEffect } from 'react'

const ProjectForm = ({ btnText, handleSubmit, projectData }) => {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})
    const url = 'http://localhost:5000/categories'

    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch(err => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    const handleChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    const handleCategory = (e) => {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            }
        })
        console.log(project)
    }
    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type='text'
                text='Nome do projeto'
                name='name'
                placeholder='Insira o nome do projeto'
                handleOnchange={handleChange} 
                value={project.name ? project.name : ''}/>

            <Input type='number'
                text='Orçamento do projeto'
                name='budget'
                placeholder='Insira o orçamento total'
                handleOnchange={handleChange} 
                value={project.budget ? project.budget : ''}/>

            <Select name='category_id'
                text='Selecione a categoria'
                options={categories} handleOnchange={handleCategory} 
                value={project.category ? project.category.id : ''}/>

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm