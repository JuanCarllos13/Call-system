import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #121212;

    form{
        margin-top: 1.5em;
        width: 90%;
        display: flex;
        flex-direction: column;

        h1{
            text-align: center;
            margin-bottom: 0.5em;
            color: #181c2e;
        }
    }
`

export const Login = styled.div`
    background-color: #EAEAEC;
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input{
        margin-bottom: 15px;
        height: 35px;
        border: 0;
        border-radius: 7px;
        padding: 10px;
        font-size: 15px;
        background-color: white;
        outline: none;
    }
    button{
        height: 35px;
        border: 0;
        border-radius: 7px;
        background-color: #181c2e;
        color: white;
        font-size: 1.3em;
    }

    a{
        margin: 1.5em 0;
        color: black;
        cursor: pointer;
    }
`

export const LogoArea = styled.div`
    display: flex;
    justify-content: center;
    background-color: #181c2e;
    width: 100%;

    img{
        padding: 20px;
        width: 170px;
        height: 130px;
    }
`