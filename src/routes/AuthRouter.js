import React, { useState } from 'react';
import { 
    Redirect, 
    Route, 
    Switch 
} from 'react-router-dom';
import { Pay } from '../components/auth/pay';
import { Plans } from '../components/auth/plans';
import { RegisterScreen } from '../components/auth/register';
import UserTypeScreen from '../components/auth/user_type';
import EventFree from '../components/tuprimereventogratis';
import LoginScreen from '../screens/login/index';
import { resolveAuth } from '../utils/shared';


export const AuthRouter = () => {
    const [auth, setAuth] = useState(null);

    console.log('Custom', auth)

    resolveAuth(
        auth, 
        setAuth
    );



    return (
        <>
            {
                !auth ?  <div>
                            <Switch>
                                <Route
                                    exact 
                                    path="/auth/login"
                                    component={ LoginScreen }
                                />
                                <Route
                                    exact 
                                    path="/auth/typeUser"
                                    component={ UserTypeScreen }
                                />
                                <Route
                                    path="/auth/register"
                                    component={ RegisterScreen }      
                                />
                                <Route
                                    exact 
                                    path="/auth/plans"
                                    component={ Plans }
                                />
                                <Route 
                                    exact
                                    path="/auth/pay"
                                    component={ Pay }
                                /> 


                                
                            </Switch>
                        </div> : <Redirect to="/" />
            }
        </>
        
    )
}
