import { useNavigate } from 'react-router-dom'
import styles from './NewProject.module.css'
import { ProjectForm } from '../project/ProjectForm'
export const NewProject = () =>{
    const history = useNavigate()

    function createPost(project){
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects',{
            method: 'POST',
            headers:{'Content-Type': 'aplication/json',},})
            .then((resp) => resp.json())
            .then((data) => {console.log(data)})
            history.push("/projects", {message: 'Projeto criado com secesso!'})
            .catch((err) => console.log(err))
    }
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu Projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}