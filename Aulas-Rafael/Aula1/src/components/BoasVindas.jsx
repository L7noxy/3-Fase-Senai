import React from 'react'

function BoasVindas({nome, mensagem}) {
    return (

        <div className='container-boasvindas'>
            Olá {nome}!
            {mensagem}
            <button onClick={() => console.log(props)}>Clique nesse button</button>
        </div> 

    )
}

export default BoasVindas