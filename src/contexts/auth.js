import { createContext, useState, useEffect } from 'react'
import firebase from '../services/firebaseConnection'


export const AuthContext = createContext({})


function AuthProvider({children}){
    const [user, setUser] = useState(null)
    const [loadingAuth, setloadingAuth] = useState(false)  //
    const [loading, setloading] = useState(true)


    useEffect(()=>{

        function loadStorage(){
            const storageUSer = localStorage.getItem('SistemaUser')
    
            if(storageUSer){
                setUser(JSON.parse(storageUSer))
                setloading(false)
            }
            setloading(false)
        }
        loadStorage()

    }, [])


 

    
    return(
        <AuthContext.Provider value={{signed: !!user, user, loading}}>   
        {/* Trasnfromando o user em boolean */}
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider