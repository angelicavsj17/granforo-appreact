import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import './styles.scss';
import UserTypesCard from '../card_type/index';
import '../../../styles/_buttons.scss';
import '../../../styles/_text.scss';
import service from '../../../utils/http-common/service';
import { register } from "../../../utils/actions/register";
import { useHistory } from "react-router-dom";
import { hideActionLoading, showActionLoading } from "../../../utils/actions/loading";

export const UserTypeScreen = () => {
    
    const [groups, setGroups] = useState([]);

    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        try {

            dispatch( showActionLoading({
                        show: true
                    }
                )
            );

            dispatch( register ({
                userForm: {},
                pay: {},
                group: {}
            }))

            service.get('/groups')
                .then(({ data }) => {
                    var renderGroup = [];
                    data.data.map((group) => {
                        renderGroup.push(
                            {
                                ...group, 
                                selected: false
                            }
                        )
                    })

                    dispatch( hideActionLoading({
                                show: false
                            }
                        )
                    );

                    setGroups(renderGroup);
                    
                })
            .catch(e => console.log(e));
        } catch(e) {
            console.log(e);
        }
    }, [])



    const handleSelect = ( groupSelect ) => {
        const selectItem = [];

        groups.map((group) => {
            if ( group.id ==  groupSelect.id) {
                return selectItem.push({
                    ...group, 
                    selected: true
                })
            } else {
                return selectItem.push({
                    ...group,
                    selected: false
                })
            }
        });

        setGroups(selectItem);
    }

    const handleClick = () => {
        groups.find(group => {
            if ( group.selected ) {
                dispatch( register({
                    'group': group
                }) );
            }
        });

        history.push('/auth/register');
    }



    return (
        <>
            <h2 className='tittle2'>Selecciona un tipo de usuario</h2>
            <div className='boxCards'>
                {
                    groups.length > 0
                    && (
                        groups.map(group => {  
                            return <div className='containCard' key= { group.id }>
                                        <UserTypesCard 
                                            type={ group.name } 
                                            description={ group.description } 
                                            img={ group.img }
                                            active={ group.selected }
                                            func= { handleSelect }
                                            id={ group.id }
                            
                                        />
                                        <hr className='redVerticalRight'></hr>
                                    </div>
                        })
                    )
                }
            </div>
            <div className='containBtn'>
                <button 
                    className='redButton2'
                    onClick={ handleClick }
                >
                    Siguiente
                </button>    
            </div>
        </>
            
    )
}


export default UserTypeScreen