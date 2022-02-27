import styled from "styled-components";


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