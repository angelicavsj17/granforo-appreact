
import React, { Component } from 'react';
import '../tuprimereventogratis/eventfree.scss';

import icononeEventfree from '../../assets/img/landing/card1.png';
import icontwo_eventfree  from '../../assets/img/landing/card2.png';
import icontree_eventfree  from '../../assets/img/landing/card3.png';
import iconfor_eventfree  from '../../assets/img/landing/card4.png';
import iconfive_eventfree  from '../../assets/img/landing/card5.png';
import iconsix_eventfree  from '../../assets/img/landing/card6.png';

  export class EventFree extends Component {
render() {

    return(
        <div className="container-eventfree">
<div className="texts-event-free">
    
    <h1>TU PRIMER EVENTO ES GRATIS</h1> <b/>
   
</div>
 <h3>crea tu primer evento gratis con las<br/> siguientes caracteristicas</h3>
<div className="container-cards">
<div className="card-eventFree">
<img src={icononeEventfree} />
    <h1>hasta 50 asistentes</h1>
    <p>plataforma 100% virtual para realizar eventos, congresos, capacitaciones y shows en vivo de manera facil</p>
    
</div>
<div className="card-eventFree">
<img src={icontwo_eventfree} />
    <h1>datos en tiempo real</h1>
    <p>plataforma 100% virtual para realizar eventos, congresos, capacitaciones y shows en vivo de manera facil</p>
    
</div>
<div className="card-eventFree">
<img src={icontree_eventfree} />
    <h1>descarga de la grabacion en HD</h1>
    <p>plataforma 100% virtual para realizar eventos, congresos, capacitaciones y shows en vivo de manera facil</p>
    
</div> 

<div className="card-eventFree">
<img src={iconfor_eventfree} />
    <h1>retrasmision en redes sociales</h1>
    <p>plataforma 100% virtual para realizar eventos, congresos, capacitaciones y shows en vivo de manera facil</p>
    
</div>

<div className="card-eventFree">
<img src={iconfive_eventfree} />
    <h1>acceso a la plataforma</h1>
    <p>plataforma 100% virtual para realizar eventos, congresos, capacitaciones y shows en vivo de manera facil</p>
    
</div>
<div className="card-eventFree">
<img src={iconsix_eventfree} />
    <h1>si el evento es pago, sin comision</h1>
    <p>plataforma 100% virtual para realizar eventos, congresos, capacitaciones y shows en vivo de manera facil</p>
    
</div>
</div>
<div className="actevent">

<h1>ACTIVA YA TU PRIMER EVENTO</h1>
<button className="bigButton"> ACTIVA TU EVENTO</button>
</div>
        </div>

    )
}

}
