import React from 'react'

const Tabela = ({vetor, selecionar}) => {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Hitbox</th>
                <th>Raridade</th>
                <th>Selecionar</th>
            </tr>
        </thead>

        <tbody>
            {
                vetor.map((obj, indice) =>(
                    <tr key={indice}>
                        <td>{indice+1}</td>
                        <td>{obj.nome}</td>
                        <td>{obj.hitbox}</td>
                        <td>{obj.raridade}</td>
                        <td><button onClick={() =>{selecionar(indice)}} className='btn btn-success selecionar-button'>Selecionar</button></td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default Tabela