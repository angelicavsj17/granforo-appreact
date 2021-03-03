import React from 'react'
import { Link } from 'react-router-dom';

import './styles.scss';


// Logos redes sociales

import Facebook from '../../assets/img/nav-footer/Facebook.png';
import Instagram from '../../assets/img/nav-footer/Instagram.png';
import Pinterest from '../../assets/img/nav-footer/Pinterest.png';
import Twitter from '../../assets/img/nav-footer/Twitter.png'; 

export const Footer = () => {
    return (
        <div className='site' >
            <div className="container-fluid">
                <div className="row ">
                     <div className="col-lg-4">
                          <ul className='footer1' >
                            <Link to='/contacto' className="link">
                              <li>CONTACTO</li> <hr/>
                            </Link>
                            <Link to='/contacto' className="link">
                              <li>TEL</li> <hr/>
                            </Link>
                            <Link to='/masInformacionScreen' className="link">
                              <li>EMAIL</li>
                            </Link>            
                          </ul>
                      </div>
                    
                      <div className="col-lg-4 ">
                          <ul className='footer1' >
                              <a href="https://www.facebook.com" 
                                    target="blank" 
                                    rel="noreferrer noopener">
                                    < img src={Facebook}/> 
                              </a>
                              <a href="https://www.instagram.com" 
                                    target="blank" 
                                    rel="noreferrer noopener">
                                    < img src={Instagram} />
                              </a>
                              <a href="https://www.pinterest.com" 
                                    target="blank" 
                                    rel="noreferrer noopener">
                                    < img src={Pinterest}/>
                              </a>
                              <a href="https://www.twitter.com" 
                                    target="blank" 
                                    rel="noreferrer noopener">
                                    < img src={Twitter}/>
                              </a> 
                          </ul>                
                      </div>
                      
                      <div className="col-lg-4">
                            <ul className='footer2'>
                                <Link to='/masInformacionScreen' 
                                      className="link">
                                      <li>PREGUNTAS FRECUENTES</li><hr/>
                                </Link>
                                <Link to='/masInformacionScreen' 
                                      className="link">
                                      <li>TÉRMINOS Y CONDICIONES</li><hr/>
                                </Link>
                                <Link to='/masInformacionScreen' 
                                      className="link">
                                      <li>POLÍTICAS DE PRIVACIDAD</li><hr/>
                                </Link>
                                <Link to='/masInformacionScreen' 
                                      className="link">
                                      <li>COMUNÍCATE CON UN ASESOR</li>
                                </Link>
                              </ul>
                        </div>
                </div>
           </div>
        </div>
    )
}

export default Footer