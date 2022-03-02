import React, { useState } from "react";
import Header from "../../Components/Header";
import Title from '../../Components/Title'
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { Content, ContainerDashboard } from './style'

function Dashboard() {
    const [chamados, setChamados] = useState([1])


    return (
        <div>
            <Header />
            <Content>
                <Title name={'Atendimento'}>
                    <FiMessageSquare size={25} />
                </Title>

                {chamados.length === 0 ? (
                    <ContainerDashboard>
                        <span>Nenhum chamado registrado</span>
                        <Link to={'/new'} >  <FiPlus size={25} />   Novo chamado</Link>

                    </ContainerDashboard>

                ) : (
                    <>
                        <Link to={'/new'} >  <FiPlus size={25} />   Novo chamado</Link>
                 
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Cliente</th>
                                <th scope="col">Assunto</th>
                                <th scope="col">Status</th>
                                <th scope="col">Cadastrado em</th>
                                <th scope="col">#</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label='Cliente'>Sujeito</td>
                                <td data-label='Assunto'>Suporte</td>
                                <td data-label='Status'>
                                    <span className="badge" style={{backgroundColor: '#5cb85c'}}  >Em aberto</span>
                                </td>
                                <td data-label={"Cadastrada"} >20/06/2001</td>
                                <td data-label={"#"} >
                                    <button  className="action" style={{backgroundColor: '#3583f6'}} >  <FiSearch color="#FFF" size={17}/> </button>
                                    <button  className="action" style={{backgroundColor: '#F6a935'}} >  <FiEdit2 color="#FFF" size={17}/> </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                 
                    </>
                )
                }


            </Content>
        </div>
    )
}


export default Dashboard