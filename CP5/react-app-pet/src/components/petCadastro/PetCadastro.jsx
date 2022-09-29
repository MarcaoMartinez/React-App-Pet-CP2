import React, { useState } from 'react'
import Cadastro from '../cadastro/Cadastro'
import { DivLista } from '../../style/styled'
import FormCadastro from '../formCadastro/FormCadastro'

export default function PetCadastro() {
  const [cadastro, setCadastro] = useState([

  ]);

  const addCadastro = (e) => {
    e.preventDefault();
    setNovoCadastro({nome:"", idade:"", raca:"", tamanho:"", dono:"", tel:"", foto:"", observacoes:""})
    setCadastro([...cadastro, novoCadastro]);
  }

  const [novoCadastro, setNovoCadastro] = useState({nome:"", idade:"", raca:"", tamanho:"", dono:"", tel:"", foto:"", observacoes:""});

  const captura = (e) => {
    const {name, value} = e.target;

    if(name == "nome") {
      setNovoCadastro({...novoCadastro, nome: value});
    } else if(name == "idade") {
      setNovoCadastro({...novoCadastro, idade: value});
    } else if(name == "raca") {
      setNovoCadastro({...novoCadastro, raca: value});
    } else if(name == "tamanho") {
      setNovoCadastro({...novoCadastro, tamanho: value});
    } else if(name == "dono") {
      setNovoCadastro({...novoCadastro, dono: value});
    } else if(name == "tel") {
      setNovoCadastro({...novoCadastro, tel: value});
    } else if(name == "foto") {
      setNovoCadastro({...novoCadastro, foto: value});
    } else if(name == "observacoes") {
      setNovoCadastro({...novoCadastro, observacoes: value});
    }
  }

  return (
    <DivLista>
      <FormCadastro 
        funcaoAddCadastro={addCadastro}
        novoCadastro={novoCadastro}
        funcaoCaptura={captura}
      />
      {cadastro.map((cad, i) => (
        <Cadastro
          key={i}
          nome = {cad.nome}
          idade = {cad.idade}
          raca = {cad.raca}
          tamanho = {cad.tamanho}
          dono = {cad.dono}
          tel = {cad.tel}
          foto = {cad.foto}
          observacoes = {cad.observacoes}
        />
      ))}
    </DivLista>
  );
}

