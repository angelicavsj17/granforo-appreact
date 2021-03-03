import React, {useEffect, useState} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { 
    startGoogleRegister, 
    startFacebookRegister,
    startRegisterWithEmailPasswordName,
    register,
    cleanRegister
} from '../../../utils/actions/register';

import '../../../styles/_buttons.scss';
import '../../../styles/_text.scss';
import './styles.scss';
import '../../../screens/login/styles.scss';
import { Redirect, useHistory } from "react-router-dom";
import { hideActionLoading, showActionLoading } from '../../../utils/actions/loading';
import service from '../../../utils/http-common/service';
import { automaticLogin } from '../../../utils/shared';
import { login } from '../../../utils/actions/auth';


export const RegisterScreen = () => {

    const [redirect, setRedirect] = useState( false );

    const history = useHistory();

    const basicRegister = [
        'UtVSYuk90ktw90j5CI5K',
        'CygwnO1kPIDl3sy1gsT3'
    ]

    const { 
        userForm: contextUser, 
        group: contextGroup  
    } = useSelector( 
        state => state.register, 
        shallowEqual 
    );
    
    if ( Object.keys(contextGroup).length === 0 ) {
        useEffect(() => {

            setRedirect( true );
            
        }, [])
    }

    useEffect(() => {

        if ( Object.keys( contextUser ).length > 0) {

            let user = contextUser;

            try {

                user.group = contextGroup.id;

                if ( basicRegister.includes( contextGroup.id ) ) { 
                    
                    user.active = true;
                    
                 }

                service.post('/users', user)
                    .then(( { data  } ) => {

                        dispatch( register ({
                            uuid: data.id
                        }))

                        if ( basicRegister.includes( data.group ) ) {

                            if ( data.social_media ) {
                                
                                automaticLogin({
                                    email: data.email
                                }, dispatch).then(( ) => {
                                    
                                    dispatch( login({
                                                logged: true
                                            }
                                        ) 
                                    );
                                    history.push('/dashboard/eventos');
                                    dispatch( cleanRegister() );

                                })
    
                            } else {

                                automaticLogin({
                                    email: data.email,
                                    password: contextUser.password
                                }, dispatch).then( () => {

                                    dispatch( login({
                                            logged: true
                                        }) 
                                    );
                                    history.push('/dashboard/eventos');
                                    dispatch( cleanRegister() );

                                })
                            }

                        } else if ( data.group === 'o09Q8eMxAuP1pCNDAf25' ) {
                            dispatch( hideActionLoading({
                                        show: false
                                    }
                                )
                            );
                            history.push('/auth/plans');
                        }
                    })
                    .catch((e) => {
                        
                        dispatch( hideActionLoading({
                                    show: false
                                }
                            )
                        );

                        let errors = e.response.data.Error.join();
                            
                        Swal.fire('Error', errors, 'error');
                        
                    })

            } catch( e ) {

                console.error(e);

            }

        }

    }, [contextUser])


    const dispatch = useDispatch();

    const { msgError } = useSelector( state => state.ui );

    const [nombre, setNombre ] = useState('')
    const [email, setEmail ] = useState('')
    const [password, setPassword ] = useState('')
    const [password2, setPassword2 ] = useState('')
    

    const handleRegister = (e) => {

        dispatch( showActionLoading({
                    show: true
                }
            )
        );

        e.preventDefault();
        if (!email || !password || !nombre ){
            return Swal.fire('Error todos los campos son obligatorios ')
        }    
        const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
            if (!password.match(passw)) {
            Swal.fire(
                "El password debe ser de al menos 8 caracteres con una mayuscula letras y numeros",
                "alerta-error"
            );
            return;
            }

        if (password !== password2 ){
            return Swal.fire('Error los Passwords no son iguales ')
        
        } 
        dispatch ( startRegisterWithEmailPasswordName( email, password, nombre ) );
    }

    const handleGoogleRegister = () => {

        dispatch( showActionLoading({
                    show: true
                }
            )
        );
        dispatch( startGoogleRegister() );
    }

    const handleFacebookRegister = () => {

        dispatch( showActionLoading({
                    show: true
                }
            )
        );
        dispatch( startFacebookRegister() );
    }





    return (
        <>
            {
                !redirect ? (
                    <div className='formulario'>
                        <div className='titulo centrado'>
                            <center>REGISTRO</center>
                        </div>
                        <form onSubmit={ handleRegister }>
                            {
                                msgError &&
                                (
                                    <div className="auth__alert-error">
                                { msgError }
                            </div>
                                )
                            }

                            <div className='field'>
                                <label>Nombre:</label>
                                <div className='inputs'>   
                                    <input 
                                        className='aweform'
                                        type="text"
                                        name="nombre"                    
                                        autoComplete="off"
                                        onChange={ e => setNombre(e.target.value) } 
                                    />
                                </div>
                            </div>

                            <div className='field'>
                                <label>E-mail:</label>
                                <div className='inputs'>
                                    <input 
                                        className='aweform'
                                        type="email"
                                        name="email"                    
                                        autoComplete="off"
                                        value={ email }
                                        onChange={ e => setEmail(e.target.value) } 
                                    />
                                </div>
                            </div>

                            <div className='field'>
                                <label>Contraseña:</label>
                                <div className='inputs'>
                                    <input 
                                        className='aweform'
                                        type="password"
                                        id="myInput"
                                        name="password"
                                        value={ password }  
                                        onChange={ e => setPassword(e.target.value) } 
                                    />
                                </div>
                            </div>

                            <div className='field'>
                                <label>Confirma contraseña:</label>
                                <div className='inputs'>
                                    <input 
                                        className='aweform'
                                        type="password"
                                        name="password2"
                                        value={ password2 }  
                                        onChange={ e => setPassword2(e.target.value) } 
                                    />
                                </div>
                            </div>
                            
                            {/* <div className={ Style.terms }>
                                <p>   
                                    Acepto términos y condiciones, política de privacidad.  
                                </p>
                                <input type="checkbox" id="termsAndConditions" />

                            </div> */}
                            <div className='lowerSidePartOne'>               
                                <button className='redButton2'
                                >
                                    REGISTRAR
                                </button>
                            </div>              
                            <div className='socialNetwork'>
                                <div 
                                    className='googleBtn'
                                    onClick={ handleGoogleRegister }
                                >
                                    <div>
                                        <i className="fa fa-google"></i>
                                    </div>
                                    <p className="btn-text">
                                        <b>Continua con Google</b>
                                    </p>
                                </div>
                                <div 
                                    className='facebookBtn'
                                    onClick={ handleFacebookRegister }
                                >
                                    <div>
                                        <i className="fa fa-facebook"></i>
                                    </div>
                                    <p className="btn-text">
                                        <b>Continua con Facebook</b>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                ) :  <Redirect to="/auth/typeUser" />
            }
        </>
    )
}
