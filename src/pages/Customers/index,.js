import React, { useState } from "react";
import Header from "../../Components/Header";
import Title from "../../Components/Title";
import { FiUser } from 'react-icons/fi'
import firebase from "../../services/firebaseConnection";
import { Content } from './style'
import {toast } from 'react-toastify'


function Customers() {
    const [nomeFantasia, setNomeFantasia] = useState('')
    const [CNPJ, setCNPJ] = useState('')
    const [endereco , setEndereco] = useState('')


    async function HandleAdd(e){
        e.preventDefault()
        
        if(nomeFantasia !== '' && CNPJ !== '' && endereco !== ""){
            await firebase.firestore().collection('customers')
            .add({
                nomeFantasia: nomeFantasia,
                CNPJ: CNPJ,
                endereco: endereco
            })
            .then(() =>{
                setNomeFantasia('')
                setCNPJ('')
                setEndereco('')
                toast.info("Empresa cadastrada com sucesso")
            })
            .catch((error)=>{
                console.log(error)
                toast.error("Erro ao cadastrar essa empresa")
            })
        }
        else{
            toast.error("Preencha todos os campos")
        }
    }
    
    return (
        <div>
            <Header />

            <Content>
                <Title name='Clientes'>
                    <FiUser size={25} />
                </Title>

                <div>
                    <form onSubmit={HandleAdd} >
                        <label>Nome Fantasia</label>
                        <input type={'text'} placeholder={"Nome da sua empresa"} value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} />

                        <label>CNPJ</label>
                        <input type={'text'} placeholder={"Seu CNPJ"} value={CNPJ} onChange={(e) => setCNPJ(e.target.value)} />

                        <label>Endereço</label>
                        <input type={'text'} placeholder={"Endereço da empresa"} value={endereco} onChange={(e) => setEndereco(e.target.value)} />

                        <button type="submit" >Cadastrar</button>

                    </form>

                </div>




            </Content>
        </div>
    )

}

export default Customers