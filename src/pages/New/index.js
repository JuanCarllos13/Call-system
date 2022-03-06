import React, { useState, useEffect, useContext } from "react";
import Header from "../../Components/Header";
import Title from "../../Components/Title";
import { Content, Status } from './style'
import { FiPlus } from 'react-icons//fi'
import { AuthContext } from '../../contexts/auth'
import firebase from "../../services/firebaseConnection";
import {toast} from 'react-toastify'

function New() {
    const [customers, setCustomers] = useState([])
    const [loadCustmers, setLoadCustmers] = useState([])
    const [customersSelected, setCustomersSelected] = useState(0)
    const [assunto, setAssunto] = useState('Suporte')
    const [status, setStatus] = useState('Aberto')
    const [Complemento, setComplemento] = useState('')
    const { user } = useContext(AuthContext)

   async function handleRegister(e) {
        e.preventDefault();
        
        await firebase.firestore().collection('chamados')
        .add({
            created: new Date(),
            cliente: customers[customersSelected].nomeFantasia,
            clienteId: customers[customersSelected].id,
            assunto: assunto,
            status: status,
            complemento: Complemento,
            userId: user.uid
        })
        .then(()=>{
            toast.success('Chamado cadastrado com sucesso')
            setComplemento('')
            setCustomersSelected(0)
        })
        .catch((error)=>{
            toast.error("Ops, erro ao Registrar")
            console.log(error)
        })
    }

    useEffect(() => {
        async function loadCustmers() {
            await firebase.firestore().collection('customers')
                .get()
                .then((snapshot) => {
                    let lista = []

                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            nomeFantasia: doc.data().nomeFantasia
                        })
                    })
                    if (lista.length === 0) {
                        console.log("Nenhuma empresa encontrada")
                        setCustomers([{ id: '1', nomeFantasia: '' }])
                        setLoadCustmers(false)
                        return;
                    }
                    setCustomers(lista)
                    setLoadCustmers(false)
                })
                .catch((error) => {
                    console.log("Deu algum erro", error)
                    setLoadCustmers(false)
                    setCustomers([{ id: '1', nomeFantasia: '' }])
                })
        }
        loadCustmers()
    }, [])


    function handleChangeSelect(e) { // Quando o valor e trocado do campo assunto
        setAssunto(e.target.value)
        console.log(e.target.value)
    }
    function handleOptionChange(e) { // Quando o troca o status
        setStatus(e.target.value)
        console.log(e.target.value)

    }

    function handleChangeCustomers(e) {  //Chamado quando troca de cliente
        // console.log("INdex do cliente selecionado: ", e.target.value)  
        // console.log("Cliente selecionado", customers[e.target.value]) //
        setCustomersSelected(e.target.value)


    }

    return (
        <div>
            <Header />

            <Content>
                <Title name='Novo chamado'>
                    <FiPlus size={25} />
                </Title>

                <div>
                    <form onSubmit={handleRegister} >
                        <label>Clientes:</label>

                        {loadCustmers ? (
                            <input type={'text'} disabled={true} value={"Carregando cliente..."} />
                        ) : (
                            <select value={customersSelected} onChange={handleChangeCustomers} >
                                {customers.map((item, index) => {
                                    return (
                                        <option key={item.uid} value={index} >
                                            {item.nomeFantasia}
                                        </option>
                                    )
                                })}
                            </select>
                        )}



                        <label>Assuntos:</label>
                        <select value={assunto} onChange={handleChangeSelect} >
                            <option value={'Suporte'}   >Suporte</option>
                            <option value={'Visita Técnica'} >Visita Técnica</option>
                            <option value={'Financeiro'} >Financeiro</option>
                        </select>

                        <Status>
                            <input type={'radio'} name={"radio"} value={'Aberto'} onChange={handleOptionChange} checked={status === "Aberto"} />
                            <span>Em Aberto</span>

                            <input type={'radio'} name={"radio"} value={'Progresso'} onChange={handleOptionChange} checked={status === "Progresso"} />
                            <span>Progresso</span>

                            <input type={'radio'} name={"radio"} value={'Atendido'} onChange={handleOptionChange} checked={status === "Atendido"} />
                            <span>Atendido</span>
                        </Status>

                        <label>Complemento</label>
                        <textarea type={'text'} placeholder={"Descreva seu porblema"} value={Complemento} onChange={(e) => setComplemento(e.target.value)} />


                        <button type="submit" >Salvar</button>
                    </form>

                </div>

            </Content>

        </div>

    )

}


export default New