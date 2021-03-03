import React from 'react';
import './indexscreen.scss';
import {Link} from 'react-router-dom';

import UserTypes from '../../components/usertypes/UserTypesComponent.js';
import LastEventsCarousel from '../../components/carousels/LastEventsCarousel.js';
import VideoOnePC from '../videoindex/VideoOneIndex.js';

import compu from '../../assets/img/landing/compu.png';
import boleta1 from '../../assets/img/landing/boleta1.png';
import compra from '../../assets/img/landing/compra.png';
import barras from '../../assets/img/landing/barras.png';

import celular from '../../assets/img/landing/celular.png';
import computador1 from '../../assets/img/landing/computador1.png';
import computador2 from '../../assets/img/landing/computador2.png';
import computador3 from '../../assets/img/landing/computador3.png';
import computador4 from '../../assets/img/landing/computador4.png';

import planes from '../../assets/img/plans/planes.png';

import { EventFree } from '../../components/tuprimereventogratis/index'
import { CreateEventFive } from '../../components/createeventfive/index'
import { EventSecure } from '../../components/eventsecure/index'
import {ThebestPlatform} from '../../components/thebestplatform/index'

const IndexScreen = () => {
    return (
<div>
<ThebestPlatform />

  {/* Parte dos, beneficios de usar la plataforma----------------------------------- */}

    <section>   
        <div className= "text darkcolor" >
           <h3>BENEFICIOS. </h3>
           <h3>DE USAR NUESTRA PLATAFORMA</h3>
        </div>
    </section>  

{/* imagenes centrales son 4 ---------------------------------------- */}
           
    <section className="darkcolor">  

        <div className="boxPartImg">
            <div className="item">
                <img  className= "img" src={compu} />
                    <p>Es fácil de usar</p>
            </div >

            <div className="item" >
                <img className= "img" src={boleta1}/>  
                    <p>Acceso exclusivo a<br/> tus eventos online </p>
            </div>

            <div  className="item">
                <img className="img" src={compra}/>  
                    <p>Cada evento tendrá una<br/> tienda integrada para<br/> ofrecerte mas ingresos </p>
            </div>

            <div className="item">
                <img className="img" src={barras}/>  
                    <p>Obtendrás<br/> estadísticas de tus<br/> eventos al instante</p>
            </div>

        </div>
    </section>  

{/* Parte tres, gran foro, comundiad en crecimiento --------------------------------*/}
           
    <section className="landingSecondImg">
        <div className="boxPartOne larger">

            <div className="leftSidePartOne">
                 <img className="Celular1" src={celular}/>
            </div>

            <div className="rightSidePart2 darkcolor">
                <div className="upperSidePartOne">
                    <h1 className="rightAlign7 tittle2"> GRAN FORO UNA COMUNIDAD<br/> EN CONSTANTE CRECIMIENTO </h1>
                </div>
            
                <div className="middleSidePartOne">
                    <p className="rightAlign8 contents2"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras eu nisi semper justo accumsan faucibus tempor vitae erat.
                    Duis commodo sodales ex at consequat. Duis et accumsan turpis.
                    </p>
                </div>        

            </div>
        </div>
    </section>  

{/* Parte cuatro, crear un evento paso 1--------------------------------- */}
    
    <section className="landingThirdImg">  
        <div className="boxPartOne2 larger">

            <div className="leftSidePartOne">
                <div className="upperSidePartOne">
                    <h3 className="leftAlign tittle2 darkcolor">¿DESEAS CREAR UN EVENTO?</h3>
                </div>

                <div className="middleSidePartOne">
                    <p className="leftAlign2 contents5 darkcolor">
                        <b> Crea un perfil de organizador </b> <br/> 
                            Regístrate como usurario organizador,<br/> 
                            selecciona un plan y accede a todas sus<br/> 
                            funciones.
                    </p>
                </div>
                    <Link to="/miPerfil" className="link">
                        <div className="lowerSidePartOne">
                            <br></br>
                            <span className="redButton">PERFILES</span>
                        </div>           
                    </Link>
                </div>

                <div className="rightSidePartComp">
                    <p>< img className="Computador1" src={computador1}/></p>   
                </div>
            </div>
    </section>  

 {/* Parte cinco ,  paso 2------------------------------------------------------- */}

    <section className="landingFourthImg">  
        <div className="boxPartOne larger">

            <div className="leftSidePartComp">
                <p>< img className="Computador2" src={computador2}/></p>
            </div>

            <div className="rightSidePartOne">
                
                <div className="upperSidePartOne">
                    <h1 className="rightAlign4 tittle8">PLAYLIST <br></br>TU MEJOR ALIADA </h1>
                </div>
                
                <div className="middleSidePartOne1">
                    <p className="rightAlign4 contents6"> 
                    Dirígete a la sección PLAYLIST, dale
                    click a botón crear evento y llena el 
                    siguiente formulario.</p> 
                </div>          

            </div>
        </div>
    </section>  

 {/* Parte seis ,  paso 3---------------------------------------------------- */}

    <section className="landingFifthImg">  
        <div className="boxPartOne2 larger">

            <div className="leftSidePartOne">
                <div className="upperSidePartOne">
                    <h1 className="leftAlign4 tittle2 darkcolor">CONFIGURA A TU MEDIDA</h1>
                </div>

                <div className="middleSidePartOne">
                    <p className="leftAlign2 contents7 darkcolor">
                        Podrás configurar tu tipo de evento,<br/> 
                        personalizando la cantidad de tickets,<br/>  
                        el valor del evento tendrás la opción <br/> 
                        de crear una galería fotográfica del evento,<br/> 
                        incluyendo tu propio e-commerce. 
                    </p>
                </div>            

            </div>

                <div  className="rightSidePartOne">
                    <p>< img className="Computador3" src={computador3}/></p>   
                </div>
        </div>

    {/* Parte siete ,  paso 4----------------------------------------------*/}



            <div className="boxPartOne larger">
                <div className="leftSidePartComp2">
                    <p>< img className="Computador4" src={computador4}/>  </p>
                </div>

                <div className="rightSidePartOne">
                    <div className="upperSidePartOne">
                        <h1 className="rightAlign6 tittle2 darkcolor">ES ASÍ DE FÁCIL</h1>
                    </div>
                    <div className="middleSidePartOne">
                            <p className="rightAlign5 contents8 darkcolor"> 
                            Al llenar el formulario dale click en<br/>
                            publicar. y empieza a disfrutar de todos<br/>
                            los beneficios que tiene un organizador.
                            </p>
                    </div> 
                </div>
            </div>
    </section>  

{/* Parte ocho ,  ¿CUAL ES TU PERFIL? ------------------------------------------------------ */}

    <section className="landingSixthImg">  

        <UserTypes />
        <EventFree />   
<CreateEventFive />
<EventSecure />
    
    </section>  

{/* Parte nueve ,  EVENTOS DESTACADOS ------------------------------------------------------ */}

    <section className="landingSeventhImg"> 

            {/* carrusel tres imagenes */}
        
        <div className="landingFirstImg">
            <div className="rightSidePartCar2">
                <h1 className="leftAlign tittle3 blueTittle">EVENTOS DESTACADOS </h1>
                <h1 className="leftAlign tittle2 black">La gente ha visitado estos eventos</h1>
            </div>

            <LastEventsCarousel />
            
        </div>

        {/* mostar carousel de 3 imagenes-------------------------- */}

        <div className="rightSidePartCar">
                <p className="leftAlign tittle6">NUESTROS<br/>PLANES</p><br/>
                <p className="leftAlign tittle5">podrás seleccionar<br/>entre estos 3 paquetes</p>
        </div>

        {/* mostar 3 imagenes tickets------------------------------- */}
        
        <div className="boxPartOne4">
            <div className="item4">
                <img  className="img3" src={planes}/>  
            </div >

            <div className="item4" >                
                <img className="img3" src={planes}/>
            </div>

            <div  className="item4">
                <img className="img3" src={planes}/>  
                
                   
            </div>            

            </div>
                                                                                                                                                                                                                                                                            
            <Link  to="/auth/register"  className="link" >
        
            <div className="lowerSidePartOne">
                <span className="redButton">REGISTRATE</span>
            </div>           
            
            </Link>
    </section>

        {/* ---fin---- */}

        
</div>



    )
}


export default IndexScreen