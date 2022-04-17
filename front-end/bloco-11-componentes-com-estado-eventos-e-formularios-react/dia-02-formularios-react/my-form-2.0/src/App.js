import React from "react";
import Form from './components/Form';
import FormSubmit from "./components/FormSubmit";

const initialState = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
  tipo: '',
  curriculo: '',
  cargo: '',
  descricaoCargo: '',
  submitted: false,
}

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  changeHandler = ({target}) => {
    let { name, value } = target;

    if (name === 'nome') value = value.toUpperCase();

    this.setState({
      [name]: value,
    });

  }

  sendForm = () => { this.setState({ submitted: true }) };

  reset= () => { this.setState(initialState) };

  render() {

    const { nome, email, cpf, endereco, cidade, estado, tipo, curriculo, cargo, descricaoCargo, submitted } = this.state;

    return (
      <main>
        <Form 
          nome={nome}
          email={email}
          cpf={cpf}
          endereco={endereco}
          cidade={cidade}
          estado={estado}
          tipo={tipo}
          curriculo={curriculo}
          cargo={cargo}
          descricaoCargo={descricaoCargo}
          changeHandler={ this.changeHandler }
          sendForm={ this.sendForm }
          reset={this.reset}
        />
        {
          submitted ? 
          <FormSubmit currentState={ this.state } /> : <p>preencha o formulario</p>
        }
        
      </main>
    );
  }
}

export default App;
