import React, {Component} from 'react'
import '../eventsecure/eventsecure.scss'
import imageizq from '../../assets/img/landing/layer_119.png'

export class EventSecure extends Component {

    render() {
        return(
            <div className='container-eventsecure'>
<div className= "container-text-eventsecure">
    <h1>CREAR EVENTOS GRATIS O DE <br/> PAGOS CON TOTAL SEGURIDAD</h1> <br/>
    <p>- eventos publicos o privados<br/>
    - control de acceso <br/> a contenido confiddencial <br/>
    - promocion de su evento con compañias <br/> de marketing digital <br/>
    - presencia de patrocinadores dentro de <br/> su evento <br/>
    - sin necesidad de descargar aplicacion  <br/>
    - trasmision estable <br/>
    - con correos de confirmacion y <br/>recordatorios de su evento <br/>
    - integracion con su herramienta de<br/> transnmision preferida <br/>
    </p>
    <button className="bigButton">REGISTRATE</button>
</div>
<div className="container-img-eventsecure">
    <img src={imageizq} />
    </div>

            </div>
        )
    }
}