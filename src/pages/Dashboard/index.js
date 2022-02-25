import React, {useContext} from "react";
import { AuthContext } from '../../contexts/auth'



function Dashboard(){
    const { SignOut } = useContext(AuthContext)

    return(
        <div>
            <h1>Pagina dashboard</h1>
            <button onClick={() => SignOut() } >Sair</button>
        </div>
    )
}


export default Dashboard