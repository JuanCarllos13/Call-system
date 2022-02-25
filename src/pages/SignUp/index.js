import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

import { Container, Login, LogoArea } from './style'

function SignUn() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState('')
  const [passoword, setPassword] = useState('')


  function HandleSubmit(e){
    e.preventDefault() // Não atualizar a página
    alert("Clicou")
  }

  return (
    <Container>
      <Login>
        <LogoArea>
          <img src={Logo} alt={"Logo do sistema"} />
        </LogoArea>
        <form onSubmit={HandleSubmit} >
          <h1>Cadastrar uma conta</h1>
          <input type={'text'} placeholder={"Seu nome"} value={name} onChange={(e) => setName(e.target.value)} />
          <input type={'text'} placeholder={"email@email.com"} value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type={'passowrd'} placeholder={"**********"} value={passoword} onChange={(e) => setPassword(e.target.value)} />
          <button type='submit' >Cadastrar</button>
        </form>

        <Link to={'/'} >Já tem uma conta? Entre</Link>


      </Login>

    </Container>
  )
}

export default SignUn;
