import React from "react";
import './usertypescomponents.scss';
import UserTypesCard from './UserTypesCard';
import granUser from '../../assets/img/typesUser/homegranusuario.jpg';
import organizador from '../../assets/img/typesUser/homegranforoorganizador.jpg';
import panelista from '../../assets/img/typesUser/homegranforopanelista.jpg'


export const UserTypes = () => {
   
    let users = [
        { 
            key: "1user",
            type: "ESPECTADOR",
            description: "Donec at sem. Vestibulum cursus. Integer dolor. Vestibulum sit amet sem nec augue fermentum consectetuer. Integer justo. Vivamus vel sapien. Praesent nisl tortor, laoreet eu, dapibus quis, egestas non, mauris. Cum sociis natoque penatibus et magnis dis parturient montes,nascetur ridiculus mus. Nullam eleifend pharetra   felis",
            img: granUser,
        },
        {  key: "2user",
            type: "ORGANIZADOR",
            description: "Donec at sem. Vestibulum cursus. Integer dolor. Vestibulum sit amet sem nec augue fermentum consectetuer. Integer justo. Vivamus vel sapien. Praesent nisl tortor, laoreet eu, dapibus quis, egestas non, mauris. Cum sociis natoque penatibus et magnis dis parturient montes,nascetur ridiculus mus. Nullam eleifend pharetra   felis",
            img: organizador,
        },
        {  
            key: "3user",
            type: "PANELISTA",
            description: "Donec at sem. Vestibulum cursus. Integer dolor. Vestibulum sit amet sem nec augue fermentum consectetuer. Integer justo. Vivamus vel sapien. Praesent nisl tortor, laoreet eu, dapibus quis, egestas non, mauris. Cum sociis natoque penatibus et magnis dis parturient montes,nascetur ridiculus mus. Nullam eleifend pharetra   felis",
            img: panelista,
        },
    ] 
    
    return (
    
        <div>
            <div className="locateTittleUT rightSidePartCar3"></div>

            <div  className="boxPartOne3">
                { users.map(user => {
                    
                    return ( 
                        <div key={user.key} >
                        <UserTypesCard keyUser={user.key} type={user.type} description={user.description} img={user.img} size="lg"/>
                        </div>
                    )
                     }
                ) }
            </div>
        </div>
    )
}

export default UserTypes