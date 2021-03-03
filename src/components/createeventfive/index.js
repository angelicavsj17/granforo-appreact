import React, {Component} from 'react'

import '../createeventfive/createeventfive.scss'

import clip_kone from '../../assets/img/landing/clip_k.png'
import clip_two from '../../assets/img/landing/clip_la.png'
import clip_tree from '../../assets/img/landing/clip_lb.png'



export class CreateEventFive extends Component {

    render() {
    
        return(
            <div className="container-eventfive">
    <div className="texts-event-five">
        <h1>CREA UN EVENTO EN VIVO EN 5 MINUTOS</h1> <b/>
        <h2>plataforma 100% virtual para crear eventos, congresos capacitaciones show en vivo de manera facil</h2>
        <button className="bigButton"> ME INTERESA</button>
    </div>
    
    <div className="container-cardseventfive">
    <div className="card-eventFive">
        <img src={clip_kone}/>
        <h1>STREAMING EN HD </h1>
        <p>plataforma 100% virtual para realizar eventos, congresos, capacitaciones y shows en vivo de manera facil</p>
        
    </div>
    <div className="card-eventFive">
    <img src={clip_two}/>
        <h1>MINISITIO PERSONALIZADO</h1>
        <p>plataforma 100% virtual para realizar eventos, congresos, capacitaciones y shows en vivo de manera facil</p>
        
    </div>
    <div className="card-eventFive">
    <img src={clip_tree}/>
        <h1>INTERACTIVIDAD TOTAL</h1>
        <p>plataforma 100% virtual para realizar eventos, congresos, capacitaciones y shows en vivo de manera facil</p>
        
    </div> 
    
    </div>
    <div className="platformEisy">
   
    <h1>PLATAFORMA DE FACIL USO<br/> PERSONALIZADA Y CON EL VOLUMEN DE<br/> AUDENCIA QUE NECESITE</h1>
    </div>
            </div>
    
        )
    }
    
    }
    