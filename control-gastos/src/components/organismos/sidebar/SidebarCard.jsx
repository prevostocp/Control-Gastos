import styled from "styled-components";
import { v } from '../../../index'

export function SidebarCard() {
  return (<Container>
    <span className="icon" >{<v.iconoayuda />}</span>
    <div className="carContent">
      <div className="circle1"></div>
      <div className="circle2" ></div>

      <h3>Centro de ayuda</h3>

      <button className="btn" >Conectar</button>
    </div>
  </Container>);
}
const Container = styled.div`
  width: 100;
  padding: 1rem;
  text-align: center;
  position: relative;

`