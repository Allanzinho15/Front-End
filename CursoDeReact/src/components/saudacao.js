export const Saudacao = ({nome}) =>{
    const gerarSaudacao = (GerarNome) =>{
        return `Olá,  ${GerarNome}, tudo bem?`
    }
    return(
        <div>
            {nome && <p>{gerarSaudacao(nome)}</p>}
        </div>
    )
} 