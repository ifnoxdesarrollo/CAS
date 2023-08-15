import './App.css'
import Faqs from './componentes/faqs/Faqs'
import Hero from './componentes/hero/Hero'
import Navbar from './componentes/navbar/Navbar'
import Prevencion from './componentes/prevencion/Prevencion'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Prevencion></Prevencion>
      <Faqs></Faqs>
    </>
  )
}

export default App
