import Accordian from "./components/Accordion"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import SearchDropdown from "./components/SearchDropdown"
import SocietyNavbar from "./components/SocietyNavbar"
import Tag from "./components/Tag"
import Home from "./pages/Home"
import {createBrowserRouter} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SocietyNavbar />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
