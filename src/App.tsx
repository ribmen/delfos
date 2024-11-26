import { themes } from "./interfaces/themes/themes"
import { ThemeProvider } from "styled-components"
import { Footer } from "./components/footer/footer"
import { Navbar } from "./components/header/navbar"
import { MainContainer } from "./components/mainContent/MainContainer"

function App() {
  return (
    <>
    <ThemeProvider theme={themes}>
      <Navbar/>
        <MainContainer/>
      <Footer/>
    </ThemeProvider>
    </>
  )
}

export default App
