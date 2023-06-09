import React from 'react'

const Fomulario = ({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}) => {
  return (
    <form>
        <input type="text" placeholder='Nome' className='form-control' name='nome' value={obj.nome} onChange={eventoTeclado}/>
        <input type="text" placeholder='Hitbox' className='form-control' name='hitbox' value={obj.hitbox} onChange={eventoTeclado}/>
        <input type="text" placeholder='Raridade' className='form-control' name='raridade' value={obj.raridade} onChange={eventoTeclado}/>

        {
          botao
          ?
          <input type="button" value="Cadastrar" className='btn btn-primary' onClick={cadastrar}/>
          :
          <div>
            
            <input type="button" value="Alterar" onClick={alterar} className='btn btn-warning'/>
            <input type="button" value="Remover" onClick={remover} className='btn btn-danger'/>
            <input type="button" value="Cancelar" onClick={cancelar} className='btn btn-secondary'/>
            
          </div>
        }

        
        
    </form>
  )
}

export default Fomulario;