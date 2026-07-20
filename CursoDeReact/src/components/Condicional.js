import { useState } from "react"

export const Condicional = () =>{

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    const enviarEmail = (e) =>{
        e.preventDefault()
        setUserEmail(email)
    }
    const limparEmail = (e) =>{
        e.preventDefault()
        setUserEmail('')
    }
    return(
        <div>
        <h2>Cadastre o seu E-mail</h2>
        <form action="">
            <input type="email" name="inEmail" id="inEmail" placeholder="Digite o seu E-mail...." onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={enviarEmail}>Enviar email</button>
            {userEmail && (
                <div>
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
            )}
        </form>
        
    </div>

    )
    
}