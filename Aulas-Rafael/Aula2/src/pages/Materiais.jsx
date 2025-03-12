import React, { useEffect, useState } from 'react'
import './Materiais.css'
import CardMaterias from '../components/CardMaterias';


export default function Materiais() {
  const [materiais, setMateriais] = useState([])

  const [inputNome, setInputNome] = useState('');
  const [inputQuantidade, setQuantidade] = useState('');
  const [inputUnidade, setUnidade] = useState('');

  function CadastrarMateriais() {
    const m = {
      id: Date.now(),
      nome: inputNome,
      quantidade: Number(inputQuantidade),
      unidade: inputUnidade,
    }
    setMateriais([...materiais, m])
    console.log(materiais)
  }

  useEffect(() =>
    console.log(materiais)
    , [materiais]
  )


  return (

    <>

      <div className='container-materiais'>
        <h1>
          Materias
        </h1>
        <div className="formMateriais">

          <div className="input-container">
            <label htmlFor="">Nome</label>

            <input type="text"
              value={inputNome}
              onChange={() => setInputNome(event.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="">Quantidade</label>

            <input type="number"
              value={inputQuantidade}
              onChange={() => setQuantidade(event.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Unidade</label>
            <input type="text"
              value={inputUnidade}
              onChange={() => setUnidade(event.target.value)}
            />
          </div>
          <button onClick={CadastrarMateriais} className='button'>Cadastrar</button>          
          <h2>estoque</h2>
        </div>
        <div className="card-materiais">

          <div className="cardMateriais">
            {materiais.map((m) => (
              <CardMaterias key={m.id} material={m} />
            ))}
          </div>

        </div>
      </div>
    </>
  )
}