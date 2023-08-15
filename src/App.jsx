import './App.css'
import VyC from './componentes/Voluntariado y Capacitacion/VyC'
import Donaciones from './componentes/donaciones/Donaciones'
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
      <Donaciones></Donaciones>
      <VyC></VyC>
    </>
  )
}

export default App
