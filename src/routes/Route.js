import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../contexts/auth'


export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const { signed, loading } = useContext(AuthContext)
    if (loading) {
        return (
            <div></div>
        )
    }
    if (!signed && isPrivate) { //Se o props for definito como isPrivate ele vai ser uma rota que somenete ao logar que ele vai ser redirecionado
        return <Redirect to={'/'} /> //Ele manda pra página home 
    }

    if (signed && !isPrivate) {
        return <Redirect to={'/dashboard'} /> //Se tiver logado ele deixa entrar na página
    }

    return (
        <Route
            {...rest}
            render={props => (
                <Component {...props} />
            )}
        />
    )
}