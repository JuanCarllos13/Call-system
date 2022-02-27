import React from "react";

import {Container} from './style'

function Title({children, name}){
    return(
        <Container>
           {children}
           <span>{name}</span>
        </Container>
    )


}

export default Title