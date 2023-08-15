import React from 'react'
import BotonFaqs from './BotonFaqs'
import './Faqs.css'

function Faqs() {
  return (
    <div className='container text-center'>
      <h2 className='mt-5 titulo-h2'>Preguntas Frecuentes</h2>
      <div className="divider"></div>
      <BotonFaqs></BotonFaqs>
      <BotonFaqs></BotonFaqs>
      <BotonFaqs></BotonFaqs>
      <BotonFaqs></BotonFaqs>
      <BotonFaqs></BotonFaqs>
      <BotonFaqs></BotonFaqs>
    </div>
  )
}

export default Faqs