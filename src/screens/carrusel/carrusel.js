import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./carrusel.scss";
import screen from '../../assets/img/landing/screen.png'
import uno from '../../assets/img/landing/uno.png'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 7 },
  { width: 1200, itemsToShow: 7 }
  

  
];

export const Carrusel = ()=> {
  return (
    <div className="App" >
        <Carousel  breakPoints={breakPoints}>
        <Item>< img src={uno}/> </Item>
        <Item>2</Item>
        <Item>< img src={screen}/></Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
        <Item>7</Item>
        <Item>8</Item>
       
      </Carousel> 
      
    </div>
  );
}

export default Carrusel;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);