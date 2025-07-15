import { useLocation } from 'react-router-dom'
import { createContext, useState } from 'react'
export const ThemeContext = createContext(null);
import { Light, Dark, AuthContextProvider, MyRoutes, Sidebar, device, Menuambur } from './index'
import { ThemeProvider, styled } from 'styled-components'

function App() {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState("dark");
  const themeStyle = theme === "light" ? Light : Dark
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }} >
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            {
              pathname != "/login" ? (<Container className={sidebarOpen ? "active" : ""} >
                <div className="ContentSidebar">
                  <Sidebar state={sidebarOpen} setState={setSidebarOpen} />
                </div>
                <div className="ContentMenuambur">
                  <Menuambur />
                </div>
                <Containerbody >
                  <MyRoutes />
                </Containerbody>
              </Container>) : (<MyRoutes />)
            }


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
  transition: 0.3s ease-in-out;
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
    &.active {
      grid-template-columns: 220px 1fr;
    }
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
