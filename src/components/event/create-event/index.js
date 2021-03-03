import React, { Component } from 'react'
import './styles.scss';
import '../../../styles/_buttons.scss';
import Calendario from '../../../assets/img/event/Calendario.png';

export const CreateEvent = () => {



    return (

        <div className='formScreen'>
            <div>
                <div className='meanTitle'>
                    <h2>CREAR EVENTO </h2>
                </div>

                <form>

                    <div className='field'>
                        <label className='subtittle' htmlFor="subject">Tipo de evento: </label>
                        <div className='inputs wideInput inputdownArrow' >
                            <i className='downArrow'></i>
                            <select id="subject" name="subject" defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>Teatro, comedia, cocina, arte, etc ...</option>
                                <option value="teatro">Teatro</option>
                                <option value="comedia">comedia</option>
                                <option value="cocina"> cocina</option>
                            </select>
                        </div>

                    </div>

                    <div className='field'>
                        <label className='subtittle' htmlFor="eventName">Nombre del evento:</label>
                        <input className='aweform inputs wideInput' type="text" id="eventName" name="eventName" />
                    </div>

                    <div className='field'>
                        <label className='subtittle' htmlFor="noPanelists">Nº de Panelistas: </label>
                        <input className='aweform inputNumberWidth' type="number" id="noPanelists" name="noPanelists" />
                    </div>

                    <div className='field'>
                        <label className='subtittle' htmlFor="noTickets">Número de tickets: </label>
                        <input className='aweform inputNumberWidth'type="number" id="noTickets" name="noTickets" />
                    </div>

                    <div className='field'>
                        <label className='subtittle' htmlFor="dates">Fechas del evento: </label>

                        <div className='inputs datesTable'>

                            <img className='Calendario' src={Calendario} />
                            <div className="fromTo">
                                <p>Desde:</p>
                                <input className='aweform' placeholder=" Desde" type="date" id="dateFrom" name="dateFrom" />
                            </div>
                            <div className="fromTo">
                                <p>Hasta:</p>
                                <input className='aweform' placeholder=" Hasta" type="date" id="dateUntil" name="dateUntil" />
                            </div>
                        </div>
                    </div>

                    <div className='radioRow'>
                        <div className="moneyFree">
                            <div className="titleMoney">
                                <b className='subtittle'> <p> Monetización: </p></b>
                                <p >¿Su proyecto es gratuito? </p>
                            </div>
                           <div>
                            <div className="moneyOption">
                                <div className='radioFormat'>
                                        <input type="radio" name="monetization" id="monetizationYes" />
                                        <label for="monetizationYes">Si&nbsp;</label>
                                        <input type="radio" name="monetization" id="monetizationNo" />
                                        <label for="monetizationNo">No&nbsp;</label>
                                        <br />
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div className='anotherField'>
                        <div className='moneda'>
                            <label>Moneda:</label>
                                <i className='downBlueArrow'></i>
                                <select id="monedaSelect" name="moneda">
                                    <option value="USD" selected >USD</option>
                                    <option value="COP">COP</option>
                                    <option value="MXN">MXN</option>
                                </select>
                            <input className='aweform' placeholder="Precio" type="text" id="price" name="price" />
                        </div>
                    </div>
                    <div className='fieldColumn'>
                        <b className='subtittle'><p> Pagina web: </p></b>
                        <div className='inputs'>
                            <input className='aweform' type="text" id="webEvent" name="webEvent" />
                        </div>
                    </div>

                    <div className='fieldColumn'>
                        <b className='subtittle'><p> Cuentas Integradas: </p></b>
                        <div className="redesItems">
                            <div className='inputs wideMediumInput aweform inputdownArrow'>
                                <i className='facebookIcon iconSocial'></i>
                                <input className='wideMediumInput noBorder' type="text" id="facebookeEvent" name="facebookEvent" />
                            </div>
                            <div className='inputs wideMediumInput aweform inputdownArrow'>
                                <i className='youtubeIcon iconSocial'></i>
                                <input className='wideMediumInput noBorder' type="text" id="youtubeEvent" name="youtubeEvent" />
                            </div>
                        </div>
                        <div className="redesItems">
                            <div className='inputs wideMediumInput aweform inputdownArrow'>
                                <i className='instagramIcon iconSocial'></i>
                                <input className='wideMediumInput noBorder' type="text" id="facebookeEvent" name="facebookEvent" />
                            </div>
                            <div className='inputs wideMediumInput aweform inputdownArrow'>
                                <i className='twitterIcon iconSocial'></i>
                                <input className='wideMediumInput noBorder' type="text" id="youtubeEvent" name="youtubeEvent" />
                            </div>
                        </div>
                    </div>
                
                    <b className='subtittle'><p> Descripción del evento:	 </p></b>

                    <div className='field'>

                        <div className='inputs'>
                            <textarea className='aweform' id="message" name="message" rows="30" cols="5"></textarea>
                        </div>
                    </div>

                    <div className='field'>
                        <div>
                            <b className='subtittle'> <p> Portada de proyecto: </p></b>
                            <p>Puedes subir imágenes de 800 x 300 px.</p>
                        </div>
                        <div className='lowerSidePartOne'>
                                    <span className='grayButton'>Agregar foto</span>
                         </div>
                    </div>
                    <div className='field'>
                        <div>
                            <b className='subtittle'> <p> Imagenes para el proyecto: </p></b>
                            <p>Puedes subir imágenes de 800 x 300 px.</p>
                        </div>
                        <div className='lowerSidePartOne'>
                                    <span className='grayButton'>Agregar foto</span>
                         </div>
                    </div>

                    <div className='radioRow'>
                        <div className="moneyFree">
                            <div className="titleMoney">
                                <b className='subtittle'> <p>Sala de chat: </p></b>
                                <p >¿su proyecto requiere una sala de chat? </p>
                            </div>
                           <div>
                            <div className="moneyOption">
                                <div className='radioFormat'>
                                        <input type="radio" name="room" id="roomYes" />
                                        <label for="roomYes">Si&nbsp;</label>
                                        <input type="radio" name="monetization" id="roomNo" />
                                        <label for="roomNo">No&nbsp;</label>
                                        <br />
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div className='radioRow'>
                        <div className="moneyFree">
                            <div className="titleMoney">
                                <b className='subtittle'> <p>Envío de correo de recordación del evento: </p></b>
                                <p >¿Su evento requiere enviar recordación a subscriptores?</p>
                            </div>
                           <div>
                            <div className="moneyOption">
                                <div className='radioFormat'>
                                        <input type="radio" name="remember" id="RememberYes" />
                                        <label for="RememberYes">Si&nbsp;</label>
                                        <input type="radio" name="remember" id="rememberNo" />
                                        <label for="rememberNo">No&nbsp;</label>
                                        <br />
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div className='radioRow'>
                        <div className="moneyFree">
                            <div className="titleMoney">
                                <b className='subtittle'> <p>Soporte de correo electronica:	</p></b>
                            </div>
                           <div>
                            <div className="moneyOption">
                                <div className='radioFormat'>
                                        <input type="radio" name="support" id="supportYes" />
                                        <label for="supportYes">Si&nbsp;</label>
                                        <input type="radio" name="support" id="supportNo" />
                                        <label for="supportNo">No&nbsp;</label>
                                        <br />
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                    <div className='lowerSidePartOne'>
                        <span className='redButton2'>PUBLICAR</span>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default CreateEvent