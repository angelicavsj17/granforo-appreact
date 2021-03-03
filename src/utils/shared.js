// import { useDispatch } from 'react-redux';
import service from './http-common/service';
import { login } from './actions/auth';
import { hideActionLoading } from './actions/loading';
import { shallowEqual, useSelector } from 'react-redux';


const automaticLogin = ( data, dispatch ) => {
    return new Promise((resolve, reject) => {

        service.post('login', data)
            .then( ( { data }) => {
                
                dispatch( login({ 
                    uid: data.token 
                }));

                localStorage.setItem('token', data.token);

                dispatch( hideActionLoading({
                            show: false
                        }
                    )
                );

                resolve( data.token );

            })
            .catch((e) => {
                if ( e.response ) {

                    if ( e.response.status === 400 ) {
                    
                        reject(e.response.data);
                    }
                }
            })
    })
}

const resolveAuth = ( auth, callBack ) => {
    
    const stateUser = useSelector(state => state.auth.logged, shallowEqual);
    console.log(stateUser)

    if ( stateUser ) {
        if ( !auth ) {
            callBack( stateUser );
        }
    } else {
        if ( auth || auth === null) {
            callBack( stateUser );
        }
    }
}


const runReducers = ( state, action) => {

    let newState = {
        ...state
    }

    for (const [key, value] of Object.entries(action.payload)) {
        newState[key] =  value;
      }
    
    return newState

}


export {
    resolveAuth,
    automaticLogin,
    runReducers
}