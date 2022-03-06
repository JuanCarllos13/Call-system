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
                            Cliente: <i>{conteudo.cliente}</i>
                        </span>
                    </Row>

                    <Row>
                        <span>
                            Assunto: <i>{conteudo.assunto}</i>
                        </span>
                        <span>
                            Cadastrado em: <i>{conteudo.createdFormat}</i>
                        </span>
                    </Row>

                    <Row>
                        <span>
                            Status: <i style={{ color: '#FFF', backgroundColor: conteudo.status === "Aberto" ? "#5cb85c" : "#999" }}> {conteudo.status} </i>
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