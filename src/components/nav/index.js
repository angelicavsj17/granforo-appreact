import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import logo from '../../assets/img/nav-footer/logo.png';
import SideBar from '../side-nav/index';
import { shallowEqual, useSelector } from "react-redux";

export const NavBar = () => {
    const [isOpen, setOpen] = useState(false);


    const [auth, setAuth] = useState( {
        auth: false
    } );

    const contextAuth = useSelector( state => state.auth.uid, shallowEqual );

    useEffect(() => {
        if ( contextAuth ) {
             
            if ( contextAuth.length > 0 ) { 
                setAuth({
                    auth: true
                })
            } else {
                setAuth({
                    auth: false
                })
            }
        } else {
            setAuth({
                auth: false
            })
        }
    }, [contextAuth])

    return ( 
        <nav> 
            
            <div
                className={`navbarMenu ${isOpen && 'isActive'}`}
            >             
                <div className='start'>
                
                    <NavLink 
                        className='navItem logo'
                        to="/"
                    >
                        <img src={ logo } alt="logo"/>
                    </NavLink>

                    {
                        !auth.auth ? (
                            <NavLink
                                className='navItem'
                                activeClassName='isActive'
                                to="/auth/login"
                            >
                                <span className='inFront'>INICIAR SESIÓN</span> 
                            </NavLink>        
                       ) : (
                        <NavLink
                            className='navItem'
                            activeClassName='isActive'
                            to="/dashboard/eventos"
                        >
                            <span className='inFront'>EVENTOS</span> 
                        </NavLink>
                       )
                    }

                    <NavLink
                        className='navItem'
                        activeClassName='isActive'
                        to="/landing/patrocinadores"
                    >
                        <span className='inFront'>PATROCINADORES</span>   
                    </NavLink>

                    <NavLink
                        className='navItem'
                        activeClassName='isActive'
                        to="/landing/sobreNosotros"
                    >
                        <span className='inFront'>CONTACTO</span> 
                    </NavLink>
                    {
                        auth.auth && (
                            <SideBar />
                        )
                    }

                </div>
            </div>
        </nav>
    );
};

export default NavBar;
