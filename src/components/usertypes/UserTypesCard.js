import React, { useState } from "react";
import '../usertypes/usertypescard.scss'; 

export const UserTypeCard = (props) => {


   const [isActive, setActive] = useState(false);
   
        console.log(props)

        return (
        <>           
            <div id={props.keyUser} 
                className={`${isActive && "upSize item2"}`} 
                onClick={() => setActive(!isActive) }> 

                    <div className="border">
                        < img className="img2" src={props.img} />

                       <div className={`${!isActive && 'hide'} ${isActive && "tittleUsers"}`}><p>{props.type}</p></div>
                    </div>

                <p className={`${!isActive && "hide"} ${isActive && "contents1"}`}>{props.description}</p>
                    <hr className={!isActive && "hide"} />

            </div >
                    {console.log('imprimio card '+ props.img + 'texto img:' + JSON.stringify(props.img))}
        </>
    )
}

export default UserTypeCard