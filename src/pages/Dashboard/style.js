import styled from "styled-components";


export const  Content = styled.div`
    margin-left: 200px;
    padding: 1px 16px;

    @media screen and (max-width: 700px){
      margin-left: 0;
    }

    a{
        float: right;
        margin-bottom: 1.5em;
        background-color: #83bf02;
        color: #FFF;
        border: 0;
        padding: .5em;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-size: 1.1em;
        border-radius: 6px;
        transition: ease-in 0.2s;

        &:hover{
            background-color: #5fd204;
            transform: scale(1.1);
        }
    }

    table{
        border: 1px solid #CCC;
        border-collapse: collapse;
        margin: 0;
        padding: 0;
        width: 100%;
        table-layout: fixed;

        @media screen and (max-width: 600px) {
            border: 0;
            
        }

        tr{
            background-color: #f8f8f8;
            border: 1px solid  #ddd;
            padding: .35em;
            
            @media screen and (max-width: 600px) {
                border-bottom: 3px solid #ddd;
                display: block;
                margin-bottom: .65em;

            }
        }

        th, td{
            padding: .62em;
            text-align: center;

        }

        td{
            
            @media screen and (max-width: 600px) {
                border-bottom: 1px solid #ddd;
                display: block;
                font-size: .8em;
                text-align: right;


                &:before{
                    content: attr(data-label);
                    float: left;
                    font-weight: bold;
                    text-transform: uppercase;
                }

                &:last-child{
                    border-bottom: 0;
                }
            }

          
        }

        th{
            font-size: .85em;
            letter-spacing: .1em;
            text-transform: uppercase;
        }
        .action{
            border: 0;
            padding: 5px;
            margin-right: 2px;
            align-items: center;
            display: inline-block;
            border-radius: 5px;
        }
        svg{
            vertical-align: middle;
        }
        .badge{
            padding: 3px;
            border-radius: 3px;
            color: #FFF;


        }
    }
    table caption{
        font-size: 1.5em;
        margin: .5em 0 .75em;

        
        @media screen and (max-width: 600px) {
            font-size: 1.2em;
        }
    }

    thead{
    
        @media screen and (max-width: 600px) {
            border:  none;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            padding: 0;
            position: absolute;
            width: 1px;
        }
    }

`


export const ContainerDashboard = styled.div`
    background-color: white;
    border-radius: 5px;
    padding: .8em;
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    span{
        margin: 2em 0;
        font-weight: 600;
        font-size: 1.2em;
    }
   
    svg{
        margin-right: 5px;
    }

`
export const Button = styled.button`
    margin: 1.5em 0;
    padding: .5em 1em;
    height:  35px;
    border: 0;
    border-radius: 7px;
    background-color: #181c2e;
    color: white;
    font-size: 1.1em ;


`