import React, { Component, useEffect, useState } from 'react'
import './Hero.css'
import '../prevencion/PrevencionItem.css'
import HeroModalNN from './HeroModalNN';
import HeroModalWsp from './HeroModalWsp';
import HeroModal0800 from './HeroModal0800';
import Botones from './Botones';



class Hero extends Component {


  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
      modal: false,

    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {

    const feriado1 = new Date('2023-10-13');
    const feriado2 = new Date('2023-10-16');
    const feriado3 = new Date('2023-11-20');
    const feriado4 = new Date('2023-12-05');
    const feriado5 = new Date('2023-12-25');

    const dayOfWeek = new Date().getDay();
    const { currentTime } = this.state;
    const currentHour = currentTime.getHours();

    let content = "#";
    let content2 = "#";
    let hayAtencionWsp = true;
    let hayAtencion0800 = false;

    const fecha = new Date();
    const fechaFormateada = formatearFecha(currentTime);
    const feriadoFormateado1 = formatearFeriado(feriado1);
    const feriadoFormateado2 = formatearFeriado(feriado2);
    const feriadoFormateado3 = formatearFeriado(feriado3);
    const feriadoFormateado4 = formatearFeriado(feriado4);
    const feriadoFormateado5 = formatearFeriado(feriado5);

    let modal = false;




    function formatearFeriado(fecha) {
      const dia = String(fecha.getDate() + 1).padStart(2, '0');
      const mes = String(fecha.getMonth() + 1).padStart(2, '0');
      const año = fecha.getFullYear();

      return `${año}-${mes}-${dia}`;
    }

    function formatearFecha(fecha) {
      const dia = String(fecha.getDate()).padStart(2, '0');
      const mes = String(fecha.getMonth() + 1).padStart(2, '0');
      const año = fecha.getFullYear();

      return `${año}-${mes}-${dia}`;
    }

    if (dayOfWeek === 1 && currentHour > 14 && currentHour < 19) {
      content2 = "tel:08008000135";
      content = "https://wa.me/+5492615570314";
      hayAtencionWsp = true;
      hayAtencion0800 = true;
    } else if (dayOfWeek === 2 && currentHour > 16 && currentHour < 21) {
      content2 = "tel:08008000135";
      content = "https://wa.me/+5492615570314";
      hayAtencionWsp = true;
      hayAtencion0800 = true;
    } else if (dayOfWeek === 3 && currentHour > 16 && currentHour < 19) {
      content = "https://wa.me/+5492615570314";
      content2 = "tel:08008000135";
      hayAtencionWsp = true;
      hayAtencion0800 = true;
    } else if (dayOfWeek === 4 && currentHour > 14 && currentHour < 19) {
      content = "https://wa.me/+5492615570314";
      content2 = "tel:08008000135";
      hayAtencionWsp = true;
      hayAtencion0800 = true;
    } else if (dayOfWeek === 5 && currentHour > 14 && currentHour < 17) {
      content = "https://wa.me/+5492615570314"
      content2 = "tel:08008000135";
      hayAtencionWsp = true;
      hayAtencion0800 = true;
    } else if (dayOfWeek === 6 && currentHour > 17 && currentHour < 21) {
      content = "https://wa.me/+5492615570314";
      content2 = "tel:08008000135";
      hayAtencionWsp = true;
      hayAtencion0800 = true;
    } else if (dayOfWeek === 0 && currentHour > 17 && currentHour < 21) {
      content = "https://wa.me/+5492622540949";
      content2 = "#";
      hayAtencionWsp = true;
      hayAtencion0800 = false;
    } else if (fechaFormateada == feriadoFormateado1 ||
      fechaFormateada == feriadoFormateado2 || fechaFormateada == feriadoFormateado3 ||
      fechaFormateada == feriadoFormateado4 || fechaFormateada == feriadoFormateado5 &&
      (currentHour > 17 && currentHour < 21)) {
      content2 = "#";
      content = "https://wa.me/+5492622540949";
      hayAtencionWsp = true;
      hayAtencion0800 = false;
    } else {
      content = "#";
      content2 = "#";
      hayAtencionWsp = false;
      hayAtencion0800 = false;
    }

    let modal2;




    const hero =
      <div className="hero">
        <div className="hero__contenedor">
          <div className="hero__contenedor__encabezado">
            <h1 className='hero__contenedor__encabezado__titulo-1'>Centro de
              <br />Asistencia al
              <br />Suicida</h1>
            <h2 className='hero__contenedor__encabezado__titulo-2'>y Atención en Crisis</h2>
          </div>

          <div className="hero__contenedor__botones">
            <h3 className='hero__contenedor__botones__titulo-1'>Organización sin Fines de Lucro</h3>
            <h3 className='hero__contenedor__botones__titulo-1'>Atención únicamente telefónica</h3>

            <Botones content={content} content2={content2} hayAtencion0800={hayAtencion0800} hayAtencionWsp={hayAtencionWsp}></Botones>
            <HeroModalNN content={content} content2={content2} hayAtencion0800={hayAtencion0800} hayAtencionWsp={hayAtencionWsp}></HeroModalNN>
            <HeroModalWsp content={content} content2={content2} hayAtencion0800={hayAtencion0800} hayAtencionWsp={hayAtencionWsp}></HeroModalWsp>
            <HeroModal0800 content={content} content2={content2} hayAtencion0800={hayAtencion0800} hayAtencionWsp={hayAtencionWsp}></HeroModal0800>

            <h3 className='hero__contenedor__botones__titulo-2'>Llamadas con costo</h3>

          </div>

        </div>
      </div >


    return hero;
  }
}

export default Hero;