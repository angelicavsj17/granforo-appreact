import { 
    firebase, 
    googleAuthProvider, 
    facebookAuthProvider 
} from '../firebase-config';
import { types } from "../types/types";
import Swal from 'sweetalert2'
import { hideActionLoading } from './loading';

export const startGoogleRegister = () => {
    return ( dispatch ) => {
        
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) =>{
                
                dispatch(
                    register({
                        userForm: {
                            fullName: user.displayName,
                            email: user.email,
                            social_media: true
                        }
                    })
                );
            })
            .catch( e => {
                dispatch( hideActionLoading({
                            show: false
                        }
                    )
                );
                Swal.fire('Error', 'Error intentanto hacer el registro con Google.', 'error');
            } );
    }
}

export const startFacebookRegister = () => {
    return ( dispatch ) => {
        
        firebase.auth().signInWithPopup( facebookAuthProvider )
            .then( ({ user }) =>{
       
                dispatch(
                    register({
                        userForm: {
                            fullName: user.displayName,
                            email: user.email,
                            social_media: true
                        }
                    })
                )
            })
            .catch( e => {
                dispatch( hideActionLoading({
                            show: false
                        }
                    )
                );

                Swal.fire('Error', 'Error intentanto hacer el registro con Facebook.', 'error');
            } );;
    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {

    
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( ( user ) => {

                dispatch(
                    register( {
                        userForm: {
                            fullName: name,
                            password: password,
                            social_media: false,
                            email: email
                        }
                    } )
                ) 
            })
        .catch( e => {
            dispatch( hideActionLoading({
                        show: false
                    }
                )
            );
            console.log('Error firebase', e)

            Swal.fire('Error', 'El correo ingresado ya existe', 'error');

        } )

    }

}





export const register = item  => ({

    type: types.register,
    payload: item

});

export const cleanRegister = _ => ({
    type: types.removeRegister
})