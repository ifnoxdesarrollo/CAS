import './App.css'
import Header from './componentes/Header/Header'
import VyC from './componentes/Voluntariado y Capacitacion/VyC'
import Contacto from './componentes/contacto/Contacto'
import Faqs from './componentes/faqs/Faqs'
import Footer from './componentes/footer/Footer'
import Hero from './componentes/hero/Hero'
import Prevencion from './componentes/prevencion/Prevencion'

function App() {

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Prevencion></Prevencion>
      <Faqs></Faqs>
      <VyC></VyC>
      <Contacto></Contacto>
      <Footer></Footer>
    </>
  )
}

export default App
