import { loadingReducer } from "../reducers/loadingReducer"
import { types } from '../types/types';


export const showActionLoading = (state) => ({

    type: types.showLoading,
    payload: {
        show: state.show
    }
})

export const hideActionLoading = (state) => ({

    type: types.hideLoading,
    payload: {
        show: state.show
    }
})