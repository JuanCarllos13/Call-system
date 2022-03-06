import React from "react";
import { ContainerModal, Container, Row } from './style'
import { FiX } from 'react-icons/fi'

function Modal({conteudo, close}) {
    return (
        <ContainerModal>
            <Container>
                <button onClick={close} >
                    <FiX size={25} color={"FFF"} />
                    voltar
                </button>


                <div> 
                    <h2>Detalhes do chamado</h2>
                    <Row>
                        <span>
                            Cliente: <a>{conteudo.cliente}</a>
                        </span>
                    </Row>

                    <Row>
                        <span>
                            Assunto: <a>{conteudo.assunto}</a>
                        </span>
                        <span>
                            Cadastrado em: <a>{conteudo.createdFormat}</a>
                        </span>
                    </Row>

                    <Row>
                        <span>
                            Status: <a style={{ color: '#FFF', backgroundColor: conteudo.status === "Aberto" ? "#5cb85c" : "#999" }}> {conteudo.status} </a>
                        </span>
                    </Row>

                    {conteudo.complemento !== '' && (
                        <>
                            <h3>Complemento</h3>
                            <p>{conteudo.complemento}</p>
                        </>
                    )}


                </div>
            </Container>
        </ContainerModal>
    )

}



export default Modal