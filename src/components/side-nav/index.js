import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import "./styles.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { shallowEqual, useSelector } from "react-redux";

const sideBar = ()=> {
    const [isOpen, setOpen] = useState(false);
    

    return (
        <>
            <div className='sidebar'> 
                <div 
                    className='icon' 
                    onClick={() => setOpen(!isOpen)}
                >       
                    <FontAwesomeIcon icon={faUserCircle} /> 
                    <FontAwesomeIcon className='bars' icon={faBars} />
                </div>
                <ul className={`${!isOpen && 'hide'} ${isOpen && 'show'}`}>      
                    <Link to="/" className="link"><li>Cambiar de Perfil</li></Link>
                    <Link to="/" className="link"><li>Crear evento</li></Link>
                    <Link to="/" className="link"><li>Quienes somos</li></Link>
                    <Link to="/" className="link"><li>Preguntas frecuentes</li></Link>
                    <Link to="/" className="link"><li>Términos y condiciones</li></Link>
                    <Link to="/" className="link"><li>Ayuda</li></Link>
                    <Link to="/" className="link"><li>Contacto</li></Link>
               </ul> 
            </div>  
        </>
    );
}
export default sideBar