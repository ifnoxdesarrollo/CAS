import './App.css'
import BotonScrollUp from './componentes/BotonScrollUp/BotonScrollUp'
import Encabezado from './componentes/Encabezado/Encabezado'
import VyC from './componentes/Voluntariado y Capacitacion/VyC'
import Contacto from './componentes/contacto/Contacto'
import Faqs from './componentes/faqs/Faqs'
import Footer from './componentes/footer/Footer'
import Hero from './componentes/hero/Hero'
import Prevencion from './componentes/prevencion/Prevencion'

function App() {

  return (
    <>
      <Encabezado></Encabezado>
      <Hero></Hero>
      <Prevencion></Prevencion>
      <Faqs></Faqs>
      <VyC></VyC>
      <Contacto></Contacto>
      <Footer></Footer>
      <BotonScrollUp></BotonScrollUp>
    </>
  )
}

export default App
