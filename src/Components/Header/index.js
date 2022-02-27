import React, { useContext } from "react";
import { AuthContext } from '../../contexts/auth'
import Avatar from '../../assets/avatar.png'
import { Link } from "react-router-dom";
import { FiHome, FiUser, FiSettings } from "react-icons/fi";

import { Container } from './style'

function Header() {
    const { user } = useContext(AuthContext)

    return (
        <Container>
            <div>
                <img src={user.avatarUrl === null ? Avatar : user.avatarUrl} alt={"Foto do Perfil"} />
            </div>

            <Link to={'/dashborad'}> 
            <FiHome color="#FFF" size={24} /> 
            chamados
            </Link>

            <Link to={'/customers'}> 
            <FiUser color="#FFF" size={24} /> 
            Clientes
            </Link>

            <Link to={'/profile'}> 
            <FiSettings color="#FFF" size={24} /> 
            Configuração
            </Link>


        </Container>
    )

}


export default Header