import {Button} from "./evento/button"

function Evento(){
    function meuEvento(){
        alert('Fui ativado')
    }
    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button butao={meuEvento} text="Primeiro Evento"/> 
        </div>
    )
}
export default Evento