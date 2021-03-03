import React from 'react'
import './styles.scss';

export const Loading = () => {
    return (
        <div className='container-loading'>
            <div className='spinner'>
                <div className='bounce1'></div>
                <div className='bounce2'></div>
                <div className='bounce3'></div>
            </div>
        </div>
    )
}
