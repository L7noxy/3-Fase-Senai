import { useState } from 'react'
import BoasVindas from './BoasVindas'
import './Header.css'

function Header() {

    const [usuario, setUsuario] = useState('MJ')
    const [mensagem, setMensagem] = useState(":)")

    function fazerLogin(){
        var nome =  prompt("Digite seu nome de usuário")
    }
    return (

        <div className="Container-Header">
            <p>
                LOGO
            </p>

            <p>Link1:</p>
            <p>Link2:</p>
            <p>Link3:</p>

            {/* {usuario && <BoasVindas nome={usuario} mensagem={mensagem}/>} */}

            {usuario ? <BoasVindas nome={usuario} mensagem={mensagem}/> : <button onClick={fazerLogin}>Login</button>}



        </div>

    )
}

export default Header