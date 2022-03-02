import React from "react";
import Header from "../../Components/Header";
import Title from "../../Components/Title";
import { Content, Status } from './style'
import { FiPlus } from 'react-icons//fi'

function New() {

    function handleRegister(e){
        e.preventDefault();
        alert('teste')

    }

    return (
        <div>
            <Header />

            <Content>
                <Title name='Novo chamado'>
                    <FiPlus size={25} />
                </Title>

                <div>
                    <form  onSubmit={handleRegister} >
                        <label>Clientes:</label>
                        <select>
                            <option key={1} value={1} >Sujeito Programador</option>
                        </select>

                        <label>Assuntos:</label>
                        <select>
                            <option value={'Suporte'} >Suporte</option>
                            <option value={'Visita Técnica'} >Visita Técnica</option>
                            <option value={'Financeiro'} >Financeiro</option>
                        </select>

                        <Status>
                            <input type={'radio'} name={"radio"} value={'Aberto'} />
                            <span>Em Aberto</span>

                            <input type={'radio'} name={"radio"} value={'Progresso'} />
                            <span>Progresso</span>

                            <input type={'radio'} name={"radio"} value={'Atendido'} />
                            <span>Atendido</span>
                        </Status>

                        <label>Complemento</label>
                        <textarea type={'text'} placeholder={"Descreva seu porblema"} />


                        <button type="submit" >Salvar</button>
                    </form>

                </div>

            </Content>

        </div>

    )

}


export default New