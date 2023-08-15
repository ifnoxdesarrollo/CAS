import React from 'react'
import PrevencionItem from './PrevencionItem'

function Prevencion() {
  return (
    <div className='mt-5 container text-center'>
      <h2 className='titulo-h2'>
        Prevencion del suicidio
      </h2>
      <PrevencionItem></PrevencionItem>
      <PrevencionItem></PrevencionItem>
      <PrevencionItem></PrevencionItem>
    </div>
  )
}

export default Prevencion