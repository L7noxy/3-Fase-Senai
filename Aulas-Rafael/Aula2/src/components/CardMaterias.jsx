import './CardMaterias.css'
function CardMaterias(props) {
    const {nome, quantidade, unidade} = props.material
    return (
        <div className='container-card'>
            <h3>Nome: {nome}</h3>
            <p>Qtd: {quantidade}{unidade}</p>
        </div>
    )
}

export default CardMaterias