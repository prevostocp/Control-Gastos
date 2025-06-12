import { styled } from "styled-components"
import { v } from "../../../index"

export function Sidebar({state, setState}) {
    return (
        <Main>
            <Container>
                <div className="logocontent">
                    <div className="imgcontent" >
                        <img src={v.logo} />
                    </div>
                </div>
                <h2>Costos</h2>
            </Container>
        </Main>        
    );
}
const Container = styled.div`
    color: ${({theme}) => theme.text};
    background: ${({theme}) => theme.bg};
    position: fixed;
    padding-top: 20px;
    z-index: 100;
    height: 100%;
`;
const Main = styled.div`
`;