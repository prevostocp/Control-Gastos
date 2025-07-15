import styled from "styled-components"

import { Icono } from '../../index'

export function ItemsDesplegable({ item }) {
    return (
        <Container>
            <Icono>{item.icono}</Icono>
            <span>{item.text}</span>
        </Container>
    )
}

const Container = styled.div`
    
`;