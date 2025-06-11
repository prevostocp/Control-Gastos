import styled from "styled-components";
import { useAuthStore, UserAuth } from '../index'

export function Home() {
  const { signout } = useAuthStore();
  const { user } = UserAuth();
  return (<Container>
<h1>Bienvenido {user.full_name} a Home</h1>
<p><img src={user.picture}/></p>
<button onClick={signout} >Cerrar</button>
  </Container>);
}
const Container =styled.div`
  height:100vh;
`