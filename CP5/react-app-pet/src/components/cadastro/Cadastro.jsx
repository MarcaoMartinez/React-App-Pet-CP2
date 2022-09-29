import React from 'react';
import { DivCadastro } from '../../style/styled'

export default function Cadastro(props) {
  return (
    <DivCadastro>
      <p>{props.nome}</p>
      <p>{props.idade}</p>
      <p>{props.raca}</p>
      <p>{props.tamanho}</p>
      <p>{props.dono}</p>
      <p>{props.tel}</p>
      <p>{props.foto}</p>
      <p>{props.observacoes}</p>
    </DivCadastro>
  );
}