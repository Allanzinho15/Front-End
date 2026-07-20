import { useState } from "react"



function From(){
    const cadastrarUsuario = (e) =>{
        e.preventDefault()
        alert(name)
        alert("Cadastrou Usuário")
    }
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)}  placeholder="Digite o seu nome"/>
                </div>

                <div>
                <label htmlFor="password">Senha:</label>
                    <input type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite o sua Senha" />
                </div>

                <div>
                    <input type="submit" value="Cadastro"/>
                </div>
            </form>
        </div>
    )
}
export default From