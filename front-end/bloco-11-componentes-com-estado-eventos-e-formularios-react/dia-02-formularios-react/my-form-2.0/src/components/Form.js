import React from 'react';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class Form extends React.Component {
  render() {
    const { nome, email, cpf, endereco, cidade, curriculo, cargo, descricaoCargo, changeHandler ,sendForm, reset } = this.props;
    
    return (
      <>
      <form>
        <fieldset>
          <legend>Dados pessoais</legend>
            Nome: 
            <input 
              type="text" 
              name="nome" 
              value={ nome } 
              maxLength='40' 
              required
              onChange={changeHandler}
            />
            Email: 
            <input 
              type="email" 
              name="email" 
              value={ email } 
              maxLength='50'
              required
              onChange={changeHandler}
            />
            CPF: 
            <input 
              type="text" 
              name="cpf" 
              value={ cpf } 
              maxLength='11'
              required
              onChange={changeHandler}
            />
            Endereço: 
            <input 
              type="text" 
              name="endereco" 
              value={ endereco } 
              maxLength='200'
              required
              onChange={changeHandler}
            />
            Cidade: 
            <input 
              type="text" 
              name="cidade" 
              value={ cidade } 
              maxLength='28'
              required
              onChange={changeHandler}
            />
            Estado: 
            <select
              name='estado'
              required
              onChange={changeHandler}
              defaultValue=''
            >
              <option value=''>Selecione</option>
                {
                  states.map((value, key) => (
                      <option key={key} value={ value }>{ value }</option>
                  ))
                }
            </select>
            <div>
              <input 
                type="radio" 
                name="tipo" 
                value="Casa" 
                onChange={changeHandler}
              /> Casa
              <input 
                type="radio" 
                name="tipo" 
                value="Apartamento" 
                onChange={changeHandler}
              /> Apartamento
            </div>
        </fieldset>

        <fieldset>
          <legend>Dados Profissionais</legend>
            Resumo Curriculo:
            <textarea
              type="textarea" 
              name="curriculo" 
              maxLength='1000'
              required
              value={ curriculo } 
              onChange={changeHandler}
            />
            Cargo: 
            <input 
              type="email" 
              name="cargo" 
              maxLength='40'
              required
              value={ cargo }
              onChange={changeHandler}
              
            />
            Descrição do cargo: 
            <textarea
              type="textarea" 
              name="descricaoCargo" 
              maxLength='500'
              value={ descricaoCargo } 
              onChange={changeHandler}
            />
        
        </fieldset>
        <button
          type='button'
          onClick={ sendForm }
        >Enviar</button>
        <button
          type='button'
          onClick={ reset }
        >Limpar</button>
        
      </form>
    </>
    )
  }
}

export default Form;
