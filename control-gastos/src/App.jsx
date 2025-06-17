import { createContext, useState } from 'react'
export const ThemeContext = createContext(null);
import { Light, Dark, AuthContextProvider, MyRoutes, Sidebar, device, Menuambur } from './index'
import { ThemeProvider, styled } from 'styled-components'

function App() {

  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }} >
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <Container>
              <div className="ContentSidebar">
                <Sidebar state={sidebarOpen} setState={setSidebarOpen} />
              </div>
              <div className="ContentMenuambur">
                <Menuambur />
              </div>
              <Containerbody >
                <MyRoutes />
              </Containerbody>
            </Container>
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: ${(props) => props.theme.bgtotal};
  .ContentSidebar {
    display: none;
  }
  .ContentMenuambur { 
    display: block;
    position: absolute;
    left: 20px;
  }
  @media ${device.tablet} {
    grid-template-columns: 65px 1fr;
    .ContentSidebar {
      display: initial;
    }
    .ContentMenuambur {
      display: none;
    }
  }
`
const Containerbody = styled.div`  
  grid-column: 1;
  width: 100%;
  @media ${device.tablet} {
    grid-column: 2;
  }
`

export default App
