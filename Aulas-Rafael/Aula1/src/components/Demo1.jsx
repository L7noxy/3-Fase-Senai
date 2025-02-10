import './Demo1.css';
import { useState } from 'react';

function Demo1() {
    const [estado, setEstado] = useState(0);
    const [cornometro, setCornometro] = useState(0);

    function incrementarEstado() {
        setEstado(estado + 1);
    }

    function maiszinho() {
        setCornometro(cornometro + 2);
        console.log(cornometro);
    }

    function alertarUsuario() {
        alert('Você foi alertado!');
    }

    return (
        <div className="container-demo1">
            <h2>Demo</h2>

            <button onClick={alertarUsuario}>Clica em mim</button>
            <button onClick={() => { alert("Executei uma arrow function"); }}>Ex de arrow function</button>

            <div>
                cornometro: {cornometro}
                <button onClick={maiszinho}>+</button>
            </div>
            <div>
                estado: {estado}
                <button onClick={incrementarEstado}>+</button>
            </div>
        </div>
    );
}

export default Demo1;