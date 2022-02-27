import styled from "styled-components";


export const Container = styled.div`
`

export const  Content = styled.div`
    margin-left: 200px;
    padding: 1px 16px;

    @media screen and (max-width: 700px){
      margin-left: 0;
    }

    div{
      display: flex;
      background-color: white;
      border-radius: 5px;
      padding: .8em;
      margin-bottom: 1em;
    }

    label{
      margin-bottom: .5em;
      font-size: 1.4em;
    } 

   input, textarea, select {
     padding: .7em;
     margin-bottom: 1em;
     border: 0;
     border-radius: 5px;
     max-width: 600px;

     &:disabled{
       cursor: not-allowed;
     }
      
    }
    form{
      display: flex;
      flex-direction: column;
    }

    button{
      max-width: 600px;
      background-color: #181C2e;
      color: white;
      border: 0;
      padding: 5px 0;
      border-radius: 5px;
    }

`



export const LabelAvatar = styled.label`
  width: 280px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input{
    display: none;
  }
  
  span{
    z-index: 999;
    position: absolute;
    opacity: 0.7;
    transition: all .5s;

    &:hover{
      opacity: 1;
      transform: scale(1.4);
    }
  }

  img{
    margin-bottom: 1em;
    border-radius: 50%;
    object-fit: cover;
  }


`

export const ContainerButton = styled.div`
    display: flex;
      background-color: white;
      border-radius: 5px;
      padding: .8em;

      button{
        padding: 8px 20px;
        background-color: transparent;
        border: 1px solid #121212;
        border-radius: 5px;
        font-size: 1.0em;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #121212;
      }
`
