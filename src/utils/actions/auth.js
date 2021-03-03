import  Swal   from 'sweetalert2';
import { 
    facebookAuthProvider, 
    firebase, 
    googleAuthProvider 
} from '../firebase-config';
import { automaticLogin } from '../shared';
import { types } from '../types/types';
import { hideActionLoading } from './loading';


export const startLoginPassword = (email, password) => {
    return (dispatch) => {

        firebase.auth().signInWithEmailAndPassword( email, password )
        .then( ({ user }) =>{
            loginAll(
                {
                    email: email,
                    password: password
                }, 
                dispatch
            );
        })
        .catch( e => {
            dispatch( hideActionLoading({
                    show: false
                }
            )
        );
            Swal.fire('Error', "Correo o Contraseña invalidos", 'error');
        })
         


    }

}




export const startFacebookLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( facebookAuthProvider )
        .then( ({ user }) =>{
            loginAll(
                {
                    email: user.email
                }, 
                dispatch,
                user
            );
        } )
    }
}

const loginAll = (user, dispatch, instance = null) => {
    return new Promise((resolve, reject) => {
        automaticLogin(user, dispatch)
            .then( (res) => {
                dispatch( hideActionLoading({
                            show: false
                        }
                    )
                );
                resolve(res)
            }).catch((e) => {
                dispatch( hideActionLoading({
                            show: false
                        }
                    )
                );
                if ( Object.keys( e ).includes('notFound') ) {
                    if ( instance ) {

                        instance.delete();
                    }
                }
                
                Swal.fire('Error', e.Error.join(), 'error');
                

                reject(e)
            })
    })
}


export const startGoogleLogin = () => {
    return ( dispatch ) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) =>{

                loginAll(
                    {
                        email: user.email
                    }, 
                    dispatch,
                    user
                ).then( (res) => {
                    console.log(res);
                }).catch((e) => {
                    console.log(e);
                });

            });

    }
}


export const login = ( state ) => ({
  
    type: types.login,
    payload: state
});


// export const startLogout = () => {
//     return async( dispatch ) => {
//        await firebase.auth().signOut();


//        dispatch( logout() );
//     }
// }

// export const logout = () => ({
//     type: types.logout   
// })
