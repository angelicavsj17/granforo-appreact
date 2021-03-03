import React from 'react';
import { AppRouter } from './routes/AppRouter';
import { Provider } from 'react-redux';
import { store } from './utils/store/store';

export const App = () => {


    return (     
        <>     
            <Provider store={ store }>
                <AppRouter />
            </Provider>
        </>
    )
}