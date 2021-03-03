import { types } from '../types/types';


 

export const loadingReducer = ( state = {
    show: false
}, action ) => {

    switch ( action.type ) {
        case types.showLoading:
           return {
               show: action.payload.show
           }

           case types.hideLoading:
            return {
                show: action.payload.show
            }
    
        default:
            return state;
    }

}