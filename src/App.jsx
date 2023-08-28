import './App.css'
import VyC from './componentes/Voluntariado y Capacitacion/VyC'
import Contacto from './componentes/contacto/Contacto'
import Donaciones from './componentes/donaciones/Donaciones'
import Faqs from './componentes/faqs/Faqs'
import Footer from './componentes/footer/Footer'
import Hero from './componentes/hero/Hero'
import Telefonos from './componentes/hero/Telefonos'
import Navbar from './componentes/navbar/Navbar'
import Prevencion from './componentes/prevencion/Prevencion'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero telefonos={<Telefonos></Telefonos>}></Hero>
      <Prevencion></Prevencion>
      <Faqs></Faqs>
      {/* <Donaciones></Donaciones> */}
      <VyC></VyC>
      <Contacto></Contacto>
      <Footer></Footer>
    </>
  )
}

export default App
