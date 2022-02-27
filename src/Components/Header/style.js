import styled from "styled-components";
import Cover from '../../assets/cover.png'


export const Container = styled.div`
    width: 200px;
    background-color: #181C2e;
    position: fixed;
    height: 100%;
    overflow: auto;

    div{
        background: url(${Cover});
        background-color: #181C2e;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 150px;
        padding-top: 30px;
        
        @media screen and (max-width: 700px){
            display: none;
        }

        img{
            border-radius: 50px;
            display: block;
            margin: auto;
            width: 90px;
            height: 90px;
            filter: drop-shadow(2px 3px 6px #121212);
            object-fit: cover;
        }
    }

    a{
        display: block;
        color: rgba(255, 255, 255, 0.7);
        padding: 16px;
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        transition: ease-in-out .4s;

        @media screen and (max-width: 700px){
            float: left;
        }

        
        @media screen and (max-width: 400px){
            text-align: center;
            float: none;
        }   
    }

    svg{
        margin-right: .5em;

        &:hover{
            background-color: #121212;
            color: white;
        }

    }

    @media screen and (max-width: 700px){
        width: 100%;
        height: auto;
        position: relative;
    }
    
.content{
  
}
`
