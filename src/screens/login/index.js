import React, { useEffect, useState }  from  'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';
import { useForm } from '../../utils/hooks/useForm';
import { 
    startGoogleLogin, 
    startLoginPassword, 
    startFacebookLogin, 
    login
} from '../../utils/actions/auth';

import './styles.scss';
import  '../../styles/_buttons.scss';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { showActionLoading } from '../../utils/actions/loading';


export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.ui );

    const history = useHistory();

    const contextAuth = useSelector( state => state.auth.uid, shallowEqual );

    useEffect(() => {
        if ( contextAuth ) {
             
            if ( contextAuth.length > 0 ) {
                dispatch( login({
                    logged: true
                }) )
                history.push('/dashboard/eventos');
            }
        }
    }, [contextAuth])

    const [ error, setError] = useState("")
    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return setError("Todos los campos son obligatorios")
        }
        dispatch( showActionLoading({
                    show: true
                }
            )
        );
        dispatch( startLoginPassword( email, password ) );
    }

    const handleGoogleLogin = () => {
        dispatch( showActionLoading({
                    show: true
                }
            )
        );
        dispatch( startGoogleLogin() );
    }

    const handleFacebookLogin = () => {
        dispatch( showActionLoading({
                    show: true
                }
            )
        );
        dispatch( startFacebookLogin() );
    }

   
    return(  
        <>
            <div className='formulario'>

                <div className="titulo">
                    <center>LOGIN</center>
                </div>
                
                <form onSubmit={ handleLogin }>
                    <div className="field">
                        <label>Correo:</label>
                        <div className="inputs">                                
                            <input 
                                className= "aweform"
                                placeholder="Correo"
                                type="email"                                 
                                name="email"                                  
                                autoComplete="off"
                                value={ email }
                                onChange={ handleInputChange } 
                            />
                        </div>  
                    </div>

                    <div className="field">
                        <label>Contraseña:</label>
                            <div className="inputs">                                
                                <input 
                                    className="aweform"
                                    placeholder="Contraseña"
                                    type="password"
                                    name="password"                              
                                    value={ password }
                                    onChange={ handleInputChange } />

                                </div>  
                            </div>
                    
                        <p className="errorLogin">{error}</p>
                        <div className='lowerNew'>
                        
                            <button 
                                className='redButton2'
                                type="submit"                  
                            disabled={ loading }
                            >
                                Ingresar
                            </button>
                        </div> 
                        <section className='redesSection'>  
                            <div className='itemsLogin'>
                                <div   onClick={ handleGoogleLogin  } className="item">
                                    <div className='lowerNew'>
                                        <span className='grayButton2'><FontAwesomeIcon icon={faGooglePlus} />&nbsp; GOOGLE</span>
                                    </div>                       
                                </div>
                                <div 
                                    onClick={ handleFacebookLogin } className="item"
                                >
                                    <div className='lowerNew'>
                                        <span className='grayButton2'> <FontAwesomeIcon icon={faFacebook} />&nbsp; FACEBOOK</span> 
                                    </div>  
                                </div>
                            </div>
                    </section>              
                    <p>Si usted todavía no tiene una cuenta, puede registrarse ahora:</p>
                    <Link  to="/auth/typeUser"  className="link" >
                        <div className='lowerNew'>
                            <button 
                                className='redButton2'
                                disabled={ loading }
                            >
                                Registrarse
                            </button>
                        </div> 
                    </Link>
                        
                </form>
            </div>
        </>
        ); 
}

export default LoginScreen;


