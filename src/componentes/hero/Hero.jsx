import React, { Component } from 'react'
import './Hero.css'

class Hero extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
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

    const dayOfWeek = new Date().getDay();
    const { currentTime } = this.state;
    const currentHour = currentTime.getHours();

    let content;
    let content2;

    if (dayOfWeek === 1 && currentHour > 16 && currentHour < 19) {
      content = "https://wa.me/+5492615570314";
    } else if (dayOfWeek === 1 && currentHour > 18 && currentHour < 21) {
      content = "https://wa.me/+5492616058614";
    } else if (dayOfWeek === 2 && currentHour > 16 && currentHour < 19) {
      content = "https://wa.me/+5492615570314"
    } else if (dayOfWeek === 3 && currentHour > 15 && currentHour < 20) {
      content = "https://wa.me/+5492615570314"
    } else if (dayOfWeek === 4 && currentHour > 14 && currentHour < 19) {
      content = "https://wa.me/+5492615570314"
    } else if (dayOfWeek === 5 && currentHour > 17 && currentHour < 20) {
      content = "https://wa.me/+5492615570314"
    } else if (dayOfWeek === 6 && currentHour > 17 && currentHour < 21) {
      content = "https://wa.me/+5492615570314"
    } else if (dayOfWeek === 0 && currentHour > 17 && currentHour < 21) {
      content = "https://wa.me/+5492622540949"
    }

    if (dayOfWeek === 0 || dayOfWeek === 6) {
      content2 = "tel:08008000135";
    }


    const hero =
      <div className="hero">
        <div className="hero__contenedor">
          <div className="hero__contenedor__encabezado">
            <h3 className='hero__contenedor__encabezado__titulo-1'>Organizacion sin Fines de Lucro</h3>
            <h1 className='hero__contenedor__encabezado__titulo-2'>Centro de Asistencia al Suicida</h1>
            <h3 className='hero__contenedor__encabezado__titulo-3'>y Atención en Crisis</h3>
          </div>
          <div className="hero__contenedor__botones">
            <h3 className='hero__contenedor__botones__titulo-1'>Atención únicamente Telefónica</h3>
            <a href={content}>
              <button className='btn btn-lg hero__contenedor__botones__boton-1' >Llamar por Whatsapp</button>
            </a>
            <a href={content2}>
              <button className='btn btn-lg hero__contenedor__botones__boton-2'>Llamar 0800</button>
            </a>
            <h3 className='hero__contenedor__botones__titulo-2'>Llamadas con costo</h3>
          </div>
        </div>
      </div >

    return hero;
  }
}

export default Hero;