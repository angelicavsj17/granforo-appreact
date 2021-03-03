import React from "react";

import './styles.scss';
import '../../../styles/_text.scss';

export const UserTypeCard = (props) => {


    
    return (
        <>           
            <div 
                className={ `item2 ${ props.active && 'upSize' }` } 
                onClick={ () => props.func( props ) }
            >
                <div 
                    className={ props.active ? 'border' : '' }
                >
                    <img 
                        className="img2"
                        src={  props.img } 
                    />

                    <div 
                        className="tittle2"
                    >
                        <b>{ props.type }</b>
                    </div>
                    <br/>

                    <p 
                        className="verysmall justifytext"
                    >
                        { props.description }
                    </p>
                </div>

            </div>
        </>
    )
}

export default UserTypeCard