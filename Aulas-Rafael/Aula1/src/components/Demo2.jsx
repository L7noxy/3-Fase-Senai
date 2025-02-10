import React from 'react'
import './Demo2.css'
import { GiEvilBat } from "react-icons/gi";

function Demo2() {
    return (
        <div>
            <img src="./img/demo.png" alt="img" className='img-demo' />
            <GiEvilBat className='bat'/>
            <img src="./img/fone-de-ouvido.png" alt="img de fone" className="img-fone" />
        </div>

    )
}

export default Demo2