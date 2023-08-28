import React from 'react'
import PrevencionItem from './PrevencionItem'
import './Prevencion.css';

function Prevencion() {
  return (
    <div className='mt-5 container text-center prevencion'>
      <h2 className='titulo-h2'>Prevención del suicidio</h2>
      <div className='caja-items'>
          <PrevencionItem className='caja-item'></PrevencionItem>
          <PrevencionItem className='caja-item'></PrevencionItem>
          <PrevencionItem className='caja-item'></PrevencionItem>
      </div>
    </div>
  )
}

export default Prevencion