import React, { useEffect, useState } from 'react'
import './styles.scss';
import '../../../styles/_buttons.scss';
import '../../../styles/_text.scss';
import { useDispatch, useSelector } from 'react-redux';
import service from '../../../utils/http-common/service';
import { register } from '../../../utils/actions/register';
import { Redirect, useHistory } from 'react-router-dom';
import { hideActionLoading, showActionLoading } from '../../../utils/actions/loading';

export const Plans = () => {

    const [plans, setPlans] = useState([]);

    const [redirect, setRedirect] = useState( false );
    
    const dispatch = useDispatch();

    const history = useHistory();

    useSelector( ( { register } ) => {

        if ( Object.keys(register.pay).length > 0 ) {
            history.push('/auth/pay');
        }

        if ( Object.keys(register.group).length > 0 ) {
            useEffect(() => {
                try {
                    dispatch( showActionLoading({
                                show: true
                            }
                        )
                    );
                    service.get(`/groups/plans/${ register.group.id }`)
                        .then(( { data } ) => {
                            setPlans(data.data);

                            dispatch( hideActionLoading({
                                        show: false
                                    }
                                )
                            );
                        })
                    .catch(e => console.log(e));
                } catch(e) {
                    console.log(e);
                }
            }, []) 
        } else {
            useEffect(() => {
                
                setRedirect( true );

            }, [])
        }
    });

    const handleClick = (plan) => {
        
        const newPlansSelect = plans.map((before) => {
            if ( before.id === plan.id) {
                return {
                    ...before,
                    select: true
                }
            } else {
                return {
                    ...before,
                    select: false
                }
            }
        })

        setPlans( newPlansSelect );
    }   

    const handleSelected = () => {

        const selectedPlan = plans.filter((plan) => {
            return plan.select
        });

        dispatch( register({
            pay: selectedPlan
        }) );
        
    }


    return (
        <>
            {
                !redirect ? (
                    <section>
                        <div className='containerPlans'>
                            {
                                plans.length > 0 
                                && (
                                    
                                    plans.map((plan) => {
                                        return  <div className='containPlans' key={ plan.id } onClick={ () => { handleClick( plan ) } }> 
                                                    <div className={ `containerPlan ${ plan.select && 'selectedPlan' }` }>
                                                        {/* < img className={ `${ Styles.imgPlans } ${ plan.select && Styles.imgSelected }` }  src={planes} />   */}
                                                    
                                                        <div className='titlePlan'>
                                                            <h5>
                                                                { plan.name }
                                                            </h5>
                                                        </div>
                                                        <div className='descriptionPlan'>
                                                            <p>
                                                                { plan.description }
                                                            </p>
                                                        </div>
                                                        <div className='pricePlan'> 
                                                            <h5>
                                                                { plan.cost }
                                                            </h5>
                                                        </div>
                                                    </div >
                                            </div>
                                    }) 
                                ) 
                            }
                        </div>
                        {
                            plans.length > 0 
                            && (
                                <div className='nextBtn'>
                                    <button 
                                        className='redButton2'
                                        onClick={ handleSelected }
                                    >
                                        Siguiente
                                    </button>  
                                </div>
                            )
                        }
                </section>
                ) : <Redirect  to="/auth/typeUser" />
            }
        </>

    )
}
