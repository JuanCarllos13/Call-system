import React, { useState, useContext } from "react";
import Title from '../../Components/Title'
import { AuthContext } from '../../contexts/auth'
import { Container, Content, LabelAvatar, ContainerButton } from './style'
import { FiSettings, FiUpload } from 'react-icons/fi'
import Header from '../../Components/Header'
import Avatar from '../../assets/avatar.png'
import firebase from "../../services/firebaseConnection";


function Profile() {
    const { user, SignOut, setUser, storageUSer } = useContext(AuthContext)
    const [nome, setNome] = useState(user && user.nome)
    const [email, setEmail] = useState(user && user.email)
    const [AvatarUrl, setAvatarUrl] = useState(user && user.avatarUrl)
    const [imageAvatar, setImageAvatar] = useState(null)


    function handFile(e){ //Visualizar a foto antes de apertar no botão de salvar
        // console.log(e.target.files[0])
        if(e.target.files[0]){
            const image = e.target.files[0]

            if(image.type === 'image/jpeg' || image.type === 'image/png'){
                setImageAvatar(image)
                setAvatarUrl(URL.createObjectURL(e.target.files[0]))   //Visualizar a imagem
            }else{
                alert('Envia uma Imagem do tipo PNG ou JPEG')  // Caso não tenha imagem
                setImageAvatar(null)
                return null
            }
        }
    }

    async function handleUpload() {  //Upload de Imagem
        const currentUid = user.uid;
        const UploadTask = await firebase.storage()
        .ref(`images/${currentUid}/${imageAvatar.name}`) //Criando uma pasta com o nome do arquivo
        .put(imageAvatar)
        .then( async ()=>{
            console.log("Foto enviada com sucesso!")
        
            await firebase.storage().ref(`images/${currentUid}`)
            .child(imageAvatar.name).getDownloadURL()
            .then(async (url)=> {

                let urlFoto = url;

                await firebase.firestore().collection('users')
                .doc(user.uid)
                .update({
                    avatarUrl: urlFoto,
                    nome: nome
                })
                .then(()=> {
                    let data ={
                        ...user,
                        avatarUrl: urlFoto,
                        nome: nome
                    }
                    setUser(data)
                    storageUSer(data)
                })

            })
        })
    }

    async function HandSave(e) {
        e.preventDefault()

        if (imageAvatar === null && nome !== '') {  //Troca so o nome 
            await firebase.firestore().collection('users')
                .doc(user.uid)
                .update({
                    nome: nome
                })
                .then(() => {
                    let data = {
                        ...user,
                        nome: nome  //Altereando o nome
                    }
                    setUser(data) //Salvando o novo nome
                    storageUSer(data) // Salvando no Local Storage  // As duas funções são chamado no auth

                })
        }
        else if (nome !== '' && AvatarUrl !== null) {
            handleUpload()
        }
    }

    return (
        <Container>
            <Header />
            <Content>
                <Title name='Meu perfil'>
                    <FiSettings size={25} />
                </Title>

                <div>
                    <form onSubmit={HandSave}>
                        <LabelAvatar>
                            <span> <FiUpload color="white" size={25} /> </span>
                            <input type={'file'} accept='image/*' onChange={handFile} /> <br />
                            {AvatarUrl === null ?
                                <img src={Avatar} width='250' height={'250'} alt="Foto de Perfil do Usuário" />
                                :
                                <img src={AvatarUrl} width='250' height={'250'} alt="Foto de Perfil do Usuário" />
                            }
                        </LabelAvatar>

                        <label>Nome</label>
                        <input type={'text'} value={nome} onChange={(e) => setNome(e.target.value)} />


                        <label>Email</label>
                        <input type={'text'} value={email} disabled={true} />

                        <button type="submit" >Salvar</button>



                    </form>

                </div>

                <ContainerButton>
                    <button onClick={() => SignOut()} >Sair</button>
                </ContainerButton>

            </Content>
        </Container>
    )


}

export default Profile