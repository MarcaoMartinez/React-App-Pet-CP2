import React from 'react'

export default function FormCadastro(props) {
  return (
    <div>
        <form method="post" onSubmit={props.funcaoAddCadastro}>
            <div>
                <label>Nome</label>
                <input type="text" name="nome" placeholder='Nome' value={props.novoCadastro.nome} onChange={props.funcaoCaptura} />
            </div>
            <div>
                <label>Idade</label>
                <input type="number" name="idade" placeholder='Idade' value={props.novoCadastro.idade} onChange={props.funcaoCaptura} />
            </div>
            <div>
                <label>Raça</label>
                <input type="text" name="raca" placeholder='Raca' value={props.novoCadastro.raca} onChange={props.funcaoCaptura} />
            </div>
            <div>
                <label>Tamanho</label>
                <input type="number" name="tamanho" placeholder='Nome' value={props.novoCadastro.tamanho} onChange={props.funcaoCaptura} />
            </div>
            <div>
                <label>Dono</label>
                <input type="text" name="dono" placeholder='Dono' value={props.novoCadastro.dono} onChange={props.funcaoCaptura} />
            </div>
            <div>
                <label>Telefone Dono</label>
                <input type="number" name="tel" placeholder='Nome' value={props.novoCadastro.tel} onChange={props.funcaoCaptura} />
            </div>
            <div>
                <label>Foto do Pet</label>
                <input type="foto" name="pet" placeholder='Pet' value={props.novoCadastro.foto} onChange={props.funcaoCaptura} />
            </div>
            <div>
                <label>Observações</label>
                <textarea name="observações" cols="30" rows="10" placeholder='Observacoes' value={props.novoCadastro.observacoes} onChange={props.funcaoCaptura} />
            </div>
            <div>
                <button type="submit">Adicionar</button>
            </div>
        </form>
    </div>
  )
}