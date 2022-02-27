import { createContext, useState, useEffect } from 'react'
import firebase from '../services/firebaseConnection'
import { toast } from 'react-toastify'


export const AuthContext = createContext({})


function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loadingAuth, setloadingAuth] = useState(false)  //
    const [loading, setloading] = useState(true)


    useEffect(() => { // Recusando usuario caso não tenha cadastrado

        function loadStorage() {
            const storageUSer = localStorage.getItem('SistemaUser')

            if (storageUSer) {
                setUser(JSON.parse(storageUSer))
                setloading(false)
            }
            setloading(false)
        }
        loadStorage()

    }, [])


    // Fazendo login de usuario
    async function signIn(email, password) {
        setloadingAuth(true)

        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid

                const userProfile = await firebase.firestore().collection('users')
                    .doc(uid).get()

                let data = {
                    uid: uid,
                    nome: userProfile.data().nome,
                    avatarUrl: userProfile.data().avatarUrl,
                    email: value.user.email
                }
                setUser(data)
                storageUSer(data)
                setloadingAuth(false)
                toast.success("Bem vindo de volta")

            })
            .catch((error) => {
                console.log(error)
                toast.error("Ops, algo deu errado")
                setloadingAuth(false)
            })

    }

    async function SignUp(email, password, nome) { //Cadastrando usuario no banco de dados
        setloadingAuth(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid

                await firebase.firestore().collection('users')
                    .doc(uid).set({
                        nome: nome,
                        avatarUrl: null,
                    })
                    .then(() => {  // Caso o cadastrado esteja certo vai cair aqui
                        let data = {
                            uid: uid,
                            nome: nome,
                            email: value.user.email,
                            avatarUrl: null
                        }
                        setUser(data)
                        storageUSer(data)
                        setloadingAuth(false)
                        toast.success("Bem vindo a Plataforma")
                    })
                    .catch((error) => {
                        console.log(error)
                        toast.error("Ops, algo deu errado")
                        setloadingAuth(false)
                      

                    })
            })
    }

    function storageUSer(data) { // Salvando no localStorage
        localStorage.setItem('sistemaUser', JSON.stringify(data))
    }


    async function SignOut() { //Removendo o usuario do localStorage pra que ele saia do pagina principal
        await firebase.auth().signOut()
        localStorage.removeItem('sistemaUser')
        setUser(null)  // Voltando ao estado principal para que seja possivel sair da aplicação
    }


    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, SignUp, SignOut, signIn, loadingAuth, setUser,storageUSer}}>
            {/* Trasnfromando o user em boolean */}
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider