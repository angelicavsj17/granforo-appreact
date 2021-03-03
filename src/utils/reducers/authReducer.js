import { runReducers } from '../shared';
import { types } from '../types/types';

const initialState = () => {
    let token = localStorage.getItem('token');

    if ( token ) {
        return {
            uid: token,
            logged: true
        }
    } else {
        return {
            logged: false
        }
    }
}

export const authReducer = ( state = initialState(), action ) => {

    switch ( action.type ) {
        case types.login:
            
            return runReducers(
                state,
                action
            ) 

           case types.logout:
            return { }
    
        default:
            return state;
    }

}