import React, { Component } from 'react';
import {Carrusel}  from '../carrusel/carrusel';

import './buscareventos.scss';
import { Link } from 'react-router-dom'; 
//---- Iconos
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';   

import {
Accordion, 
AccordionItem,
AccordionItemHeading, 
AccordionItemButton,
AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import { useState } from 'react';


export const buscarEventosScreen = () => {

    const [date, setDate]= useState(new Date());
    const onChange = date => {
    setDate(date);

    };
        
        return ( 
            
            <div>
                <div className="container">  
                    <div className="calendar">
                        <Calendar
                            onChange={onChange}
                            value={date}
                            />
                    </div>
                    <div className="one">Bienvenido xxxx modulo</div>
                        <div className="filters">
                            <div className="lowerSidePartOne">
                                <span className="redButton3">FILTROS</span>
                        </div>
                            <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        CATEGORIA
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <ul>                               
                                            <input type="checkbox"></input> &nbsp;Shows<hr/>
                                            <input type="checkbox"></input> &nbsp; Ferias<hr/>
                                            <input type="checkbox"></input> &nbsp;Artistas<hr/>
                                            <input type="checkbox"></input> &nbsp;Conciertos<hr/>
                                            <input type="checkbox"></input> &nbsp; Conferencia<hr/>
                                            <input type="checkbox"></input> &nbsp; Congreso 
                                        </ul>                
                                    </AccordionItemPanel>
                            </AccordionItem><br/>
                            
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    PAÍS
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <ul>
                                            <input type="checkbox"></input> &nbsp;Colombia<hr/>
                                            <input type="checkbox"></input> &nbsp;Perú<hr/>
                                            <input type="checkbox"></input> &nbsp;Ecuador<hr/>
                                            <input type="checkbox"></input> &nbsp;Brasil              
                                        </ul>
                                    </AccordionItemPanel>
                        </AccordionItem><br/>

                        <AccordionItem>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    FECHA DE PUBLICACIÓN
                                </AccordionItemButton>
                            </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <ul>
                                        <input type="checkbox"></input> &nbsp;Hace 24 horas<hr/>
                                        <input type="checkbox"></input> &nbsp;Hace 1 hora<hr/>
                                        <input type="checkbox"></input> &nbsp;hace una semana<hr/>
                                        <input type="checkbox"></input> &nbsp; Hace un mes                      
                                    </ul>
                                </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="two">
                    <input type="text" 
                    placeholder="Search" 
                    name="search"></input>
                    <button type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                    </button>       
                </div>

                <div className="three">PLAYLIST</div>
                <div className="four"><p>Estrenos</p><hr/>< Carrusel/></div>
                <div className="five"><p>Conciertos</p><hr/>< Carrusel/></div>
                <div className="button">
                
                    
                    <div className="lowerSidePartOne">
                        <Link to="/crearEvento">
                        <span className="redButton2">CREAR EVENTO</span>
                        </Link>
                    </div> 

                        ¿Quieres recibir<br/>
                        notificaciones de eventos?<br/><br/>

                        <input type="text" 
                        placeholder="Email:" 
                        name="search">
                        </input><br/><br/>
                        <input type="checkbox">
                        </input> &nbsp;
                        Acepto que los datos<br/>
                        enviados se recopilen y<br/>
                        almacenen.

                </div>
                            
                    <div className="six"><p>Ferias</p><hr/>< Carrusel/></div>
                    <div className="seven"><p>Los mas reaccionados</p><hr/>< Carrusel/></div>
                    
                </div>
            </div>

        )
    }

  export default buscarEventosScreen;


