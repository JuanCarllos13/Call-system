import React, { useState, useContext } from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { AuthContext} from '../../contexts/auth'
import { Container, Login, LogoArea } from './styles'

function SignIn() {
  const [email, setEmail] = useState('')
  const [passoword, setPassword] = useState('')
  const { signIn } = useContext(AuthContext)

  function HandleSubmit(e){
    e.preventDefault() // Não atualizar a página
   
    if(email !== '' && passoword !== ''){
        signIn(email, passoword)
    }
  }

  return (
    <Container>
      <Login>
        <LogoArea>
          <img src={Logo} alt={"Logo do sistema"} />
        </LogoArea>
        <form onSubmit={HandleSubmit} >
          <h1>Entrar</h1>
          <input type={'text'} placeholder={"email@email.com"} value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type={'password'} placeholder={"**********"} value={passoword} onChange={(e) => setPassword(e.target.value)} />
          <button type={'submit'} >Acessar</button>
        </form>

        <Link to={'/register'} >Criar uma conta</Link>


      </Login>

    </Container>
  )
}

export default SignIn;
