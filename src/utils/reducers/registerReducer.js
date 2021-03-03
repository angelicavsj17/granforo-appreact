import { runReducers } from '../shared';
import { types } from '../types/types';

const initialState = {
    group: {},
    userForm: {},
    pay: {},
    uuid: null
}

export const registerReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.register:

            return runReducers(
                state,
                action
            )  

        case types.removeRegister:
            return initialState;
            
           
        default:
            return state;
    }



}