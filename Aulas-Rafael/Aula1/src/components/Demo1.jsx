import './Demo1.css'
import { useState } from 'react';

function Demo1() {

    const [estado, setEstado] = useEstate = 0;

    let cornometro = 0;

    function incrementarEstado(){
        estado++
    }

    function maiszinho() {
        cornometro++
        console.log(cornometro);
    }

    function alertarUsuario() {
        alert('voçê foi alertado!')
    }

    return (
        <div className="container-demo1">

            <h2>
                Demo
            </h2>

            <button onClick={alertarUsuario}>Clica em mim</button>
            <button onClick={() => { alert("Executei uma arrow function") }}>Ex de arrow funtion</button>

            <div>
                cornometro: {cornometro}            
                <button onClick={maiszinho}>+</button>
            </div>
            <div>
                estado: {estado}
                <button onClick={incrementarEstado}>+</button>
            </div>



        </div>
    )
}

export default Demo1