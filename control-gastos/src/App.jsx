import { MyRoutes } from './index'
import { createContext, useState } from 'react'
export const ThemeContext = createContext(null);
import { Light, Dark, AuthContextProvider } from './index'
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
  grid-template-columns: 65px 1fr;
`
const Containerbody = styled.div`
  grid-column: 2;
  width: 100%;
`

export default App
