import React, {useContext} from "react";
import { AuthContext } from '../../contexts/auth'
import Header from "../../Components/Header";



function Dashboard(){
    const { SignOut } = useContext(AuthContext)

    return(
        <div>
            <Header/>
            <h1>Pagina dashboard</h1>
           
        </div>
    )
}


export default Dashboard