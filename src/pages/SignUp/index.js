import React, { useState, useContext } from 'react'
import Logo from '../../assets/logo.png'
import { AuthContext } from '../../contexts/auth'
import { Link } from 'react-router-dom'

import { Container, Login, LogoArea } from './style'

function SignUn() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState('')
  const [passoword, setPassword] = useState('')

  const {SignUp, loadingAuth} = useContext(AuthContext)


  function HandleSubmit(e){
    e.preventDefault() // Não atualizar a página
    
    if(nome !== '' && email !== ""  && passoword !== ''){
      SignUp(email, passoword, nome)
    }
  }

  return (
    <Container>
      <Login>
        <LogoArea>
          <img src={Logo} alt={"Logo do sistema"} />
        </LogoArea>
        <form onSubmit={HandleSubmit} >
          <h1>Cadastrar uma conta</h1>
          <input type={'text'} placeholder={"Seu nome"} value={nome} onChange={(e) => setNome (e.target.value)} />
          <input type={'text'} placeholder={"email@email.com"} value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type={'passowrd'} placeholder={"**********"} value={passoword} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit' >{loadingAuth ? 'Carregando...': 'Cadastrar'}</button>
        </form>

        <Link to={'/'} >Já tem uma conta? Entre</Link>


      </Login>

    </Container>
  )
}

export default SignUn;
