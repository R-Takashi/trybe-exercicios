import React from "react";

class FormSubmit extends React.Component {
    render() {
        const {
            currentState: {
                nome, email, cpf, endereco, cidade, estado, tipo, curriculo, cargo, descricaoCargo
            } 
        } = this.props

        return (
            <div>
                <h2>Dados enviados </h2>
                <h3>Pessoal</h3>
                <div> Name: {nome} </div>
                <div> Email: {email} </div>
                <div> CPF: {cpf} </div>
                <div> Endereço: {endereco} </div>
                <div> Cidade: {cidade} </div>
                <div> Estado: {estado} </div>
                <div> Tipo de residencia: {tipo} </div>
                <h3>Profissional</h3>
                <div> Curriculo: {curriculo}</div>
                <div>Cargo: {cargo}</div>
                <div>Descrição do cargo: {descricaoCargo}</div>
            </div>
        )
    }
}

export default FormSubmit;
