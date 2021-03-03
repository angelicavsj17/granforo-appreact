import React, { useEffect, useState } from 'react'
import masterCard from '../../../assets/img/pay/mastercard.png';
import visa from '../../../assets/img/pay/visa.png';
import payPal from '../../../assets/img/pay/paypal.png';
import pse from '../../../assets/img/pay/pse-icon.png';
import './styles.scss';
import '../../../styles/_buttons.scss';
import '../../../styles/_text.scss';
import ticket from '../../../assets/img/pay/novoclick_boleta.png';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import service from '../../../utils/http-common/service';
import { showActionLoading } from '../../../utils/actions/loading';
import { cleanRegister } from '../../../utils/actions/register';
import { automaticLogin } from '../../../utils/shared';
import Swal from 'sweetalert2';
import { login } from '../../../utils/actions/auth';

export const Pay = () => {

    const [planSelect, setPlanSelect] = useState(null);

    const history = useHistory();

    const dispatch = useDispatch();

    const [redirect, setRedirect] = useState(false);

    const { 
        pay: contextData,
        userForm: userRegister,
        uuid
    } = useSelector(state => state.register, shallowEqual);


    useEffect(() => {
        
        if ( Object.keys( contextData ).length > 0 ) {

            setPlanSelect( contextData[0] );
        } else {

            setRedirect( true );
        }
    
    }, [])

    const [checks, setChecks] = useState([
                        {
                            id: 1,
                            title: 'Pagar con tarjeta',
                            selected: false,
                            imgs: [
                                masterCard, 
                                visa
                            ]
                        },
                        {
                            id: 2,
                            title: 'Pagar con Paypal',
                            selected: false,
                            imgs: [
                                payPal
                            ]
                        },
                        {
                            id: 3,
                            title: 'Pagar con PSE',
                            selected: false,
                            imgs: [
                                pse
                            ]
                        },

    ])

    const handleSelected = () => {

        dispatch( showActionLoading({
                    show: true
                }
            )
        );

        service.put(`users/${ uuid }`, {
            plan: contextData[0],
            active: true
        }).then(( data ) => {


            if ( userRegister.social_media ) {
                                
                automaticLogin({
                    email: userRegister.email
                }, dispatch).then(( ) => {

                    dispatch( login({
                            logged: true
                        }) 
                    );

                    history.push('/dashboard/eventos');
                    dispatch( cleanRegister() );

                })

            } else {

                automaticLogin({
                    email: userRegister.email,
                    password: userRegister.password
                }, dispatch).then( () => {
                    
                    dispatch( login({
                            logged: true
                        }) 
                    );


                    history.push('/dashboard/eventos');
                    dispatch( cleanRegister() );

                })
            }

        }).catch((e) => {
            
            Swal.fire('Error', 'Error completando el registro', 'error');

            console.log(e);
        })



    }


    const handleOnChange = (select) => {
        const newChecked = checks.map((item) => {
            if ( item.id === select) {
                return {
                    ...item,
                    selected: true
                }
            } else {
                return {
                    ...item,
                    selected: false
                }
            }
        })

        setChecks( newChecked );
    }

    return (
        <>
        {
            planSelect && ( <div className='containerPay'>
                                <div className='containPay'>
                                    <h3 className='titlePay'>Confirma tu compra</h3>
                                    <p>Ya puedes realizar tu compra</p>
                                    <div className='payForm'>
                                        <div className='initialForm'>
                                            <h5>Numero de cc</h5>
                                            <input type="text"></input>
                                            <p>Necesitamos tu número de cédula para continuar con el proceso de compra</p>
                                            <h5>Método de pago</h5>
                                        </div>
                                        {
                                            checks.map((item) => {
                                                return <div 
                                                            className='methodPay'
                                                            key= { item.id }
                                                        >
                                                            <input 
                                                                checked={ item.selected } 
                                                                type="checkbox"
                                                                onChange={ () => handleOnChange( item.id ) }
                                                            ></input>
                                                            <div className='optionPay'>
                                                                <h6>{ item.title}</h6>
                                                            </div>
                                                            {
                                                                item.imgs.map((img) => {
                                                                    return <img src={ img }  key= { img }></img>
                                                                })
                                                            }
                                                        </div>   
                                            })
                                        }
                                        <div className='readyBtn'>
                                            <button 
                                                className='redButton2'
                                                onClick={ handleSelected }
                                            >
                                                Completar ahora
                                            </button>  
                                        </div>
                                        <h5 className='secure'>
                                            Pago 100% seguro
                                        </h5>
                                        <p className='certificate'>Este certificado garantiza la seguridad de todas tus conexiones mediante cifrado.</p>
                                    </div>
                                </div>
                                <div className='cardShopping'>
                                    <div className='containPay cardBuy'>
                                        <h3>Tu Carrito</h3>
                                        <div className='cardDescription'>
                                            <img src={ ticket }></img>
                                            <div className='planBuy'>
                                                <h5>{ planSelect.name }</h5>
                                                <p>{ planSelect.description }</p>
                                            </div>
                                        </div>
                                        <div className='priceEnd'>
                                            <h5 className='totalEnd'>Total</h5>
                                            <h5>{ planSelect.cost }</h5>
                                        </div>
                                    </div>
                                    <div className='termsPay'>
                                        <p>Cobramos el importe del pedido en US$, puede que haya una mínima variación debido al tipo de
                                            cambio usado por tu banco. Los precios de los productos de Domestika están sujetos a cambio.
                                            En el carrito puedes dejar temporalmente tu compra, en él aparecerá el precio más reciente de
                                            cada producto. Los códigos de descuento no son acumulables, ni tampoco aplicables junto a
                                            otras promociones especiales salvo que se indique lo contrario.</p>
                                    </div>
                                </div>
                            </div> )
        }

        {
            redirect && (
                <Redirect to="/auth/typeUser" />
            )
        }
        </>
    )
}
