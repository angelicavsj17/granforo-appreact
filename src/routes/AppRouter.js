import React, { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  HashRouter
} from "react-router-dom";

import { Layout } from '../screens/layout/index';
import { Loading } from '../components/loading/index';
import { useSelector } from "react-redux";
import { AuthRouter } from './AuthRouter'
import IndexScreen from '../screens/indexscreen/indexScreen';
import { CreateEvent } from '../components/event/create-event/index'



export const AppRouter = () => {

  const [{ loading }, setLoading] = useState({
    loading: false
  })

 
  useSelector(state => {
    if ( state.loading.show !== loading ) {
      setLoading(  {
        loading: !loading
      })
    }
  });

  return (
    
    <HashRouter>
        {
          loading && (
            <Loading></Loading> 
          )
        }
        <Layout>
          <Switch>
            <Route 
                exact 
                path="/auth/:path?" 
                component={ AuthRouter } 
            />
             <Route 
              exact 
              path="/" 
              component= { IndexScreen }
            /> 
            <Route 
              exact 
              path="/createEvent" 
              component={ CreateEvent } 
            />



            {/*
            <Route 
                exact 
                path="/dashboard/:path?" 
                component={ UserRouter } 
            />
            <Route 
                exact 
                path="*" 
                component={ IndexScreen } 
            />

            <Route
                exact 
                path="/GraciasCrearEvent"
                component={ GraciasCrearEvent }

            /> */
            
            }



        </Switch>
      </Layout>
    </HashRouter>

  );
};

export default AppRouter