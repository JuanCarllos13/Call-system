import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Title from '../../Components/Title'
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { Content, ContainerDashboard, Button } from './style'
import { format } from 'date-fns'
import firebase from "../../services/firebaseConnection";
import Modal from "../../Components/Modal";

const listRef = firebase.firestore().collection('chamados').orderBy('created', 'desc')  // chamada do banco

function Dashboard() {
    const [chamados, setChamados] = useState([])  // Onde aparece todos os chamados
    const [loading, setLoading] = useState(true) //Controlar quando tá buscando os dados do banco, aparece a mensgaem de aviso
    const [loadinMore, setLoadinMore] = useState(false)  // Buscar mais chamados quando tiver true
    const [isEmpty, setIsempty] = useState(false) // Caso a lista estja vazia
    const [lastDocs, setLastDocs] = useState() // Armazando o ultimo documento buscado do banco

    const [showPostModal, setShowPostModal] = useState(false)
    const [detail, setDetail] = useState() // Salvando os dados do chamado no modal

    useEffect(() => {
        async function loadindChamados() {  // Chamar os chamados do banco
            await listRef.limit(5)
                .get()
                .then((snapshot) => {
                    updateState(snapshot)  // Chama a função dos dados do chamado
                })
                .catch((error) => {
                    console.log('Deu algum error', error)
                    setLoadinMore(false)
                })
            setLoading(false)
        }
        loadindChamados()

        return () => {
        }
    }, [])



    async function updateState(snapshot) {
        const isCollectionEmpty = snapshot.size === 0;   // Verificar se essa coleção é vazia

        if (!isCollectionEmpty) {  // Se ela for difente de 0, ela entra aqui
            let lista = []
            snapshot.forEach((doc) => { // Pegando os valores do banco
                lista.push({ // Salvando dentro da variavel lista
                    id: doc.id,
                    assunto: doc.data().assunto,
                    cliente: doc.data().cliente,
                    ClienteID: doc.data().clienteId,
                    created: doc.data().created,
                    createdFormat: format(doc.data().created.toDate(), 'dd/MM/yyyy'),
                    status: doc.data().status,
                    complemento: doc.data().complemento

                })
            })
            const lastDoc = snapshot.docs[snapshot.docs.length - 1]  // Pegando o ultimo documento buscado

            setChamados(chamados => [...chamados, ...lista]) // Passando todas os chamados
            setLastDocs(lastDoc)
        } else {
            setIsempty(true)  // Tá vazio, nao tem nenhum item a ser buscado
        }
        setLoadinMore(false) //
    }

    async function handleMore() {
        setLoadinMore(true)
        await listRef.startAfter(lastDocs).limit(5)
            .get()
            .then((snapshot) => {
                updateState(snapshot)
            })

    }


    function togglePostModal(item) {
        setShowPostModal(!showPostModal) //trocando de true pra false
        setDetail(item);
    } //se ele tiver true, ele muda pra false, se ele tiver false, ele muda pra true, e pra abrir e fechar o modal


    if (loading) {
        return (
            <div>
                <Header />
                <Content>

                    <Title name={'Atendimento'}>
                        <FiMessageSquare size={25} />
                    </Title>

                    <ContainerDashboard>
                        <span>Nenhum chamado registrado</span>
                    </ContainerDashboard>

                </Content>
            </div>



        )
    }


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
                                {chamados.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td data-label='Cliente'>{item.cliente}</td>
                                            <td data-label='Assunto'>{item.assunto}</td>
                                            <td data-label='Status'>
                                                <span className="badge" style={{ backgroundColor: item.status === 'Aberto' ? '#5cb85c' : '#999' }}> {item.status} </span>
                                            </td>
                                            <td data-label={"Cadastrada"} >{item.createdFormat}</td>
                                            <td data-label={"#"} >
                                                <button className="action" style={{ backgroundColor: '#3583f6' }} onClick={() => togglePostModal(item)}>
                                                    <FiSearch color="#FFF" size={17} />
                                                </button>
                                                <button className="action" style={{ backgroundColor: '#F6a935' }} >
                                                    <FiEdit2 color="#FFF" size={17} />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                        {loadinMore && <h2 style={{ textAlign: 'center', marginTop: 15 }} >Buscando chamados</h2>}
                        {!loadinMore && !isEmpty && <Button onClick={handleMore} >Buscar mais</Button>}

                    </>
                )
                }


            </Content>

            {showPostModal && (
                <Modal
                    conteudo={detail}
                    close={togglePostModal}
                />
            )}
        </div>
    )
}


export default Dashboard