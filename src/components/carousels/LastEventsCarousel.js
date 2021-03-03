import React from 'react';
import './lasteventscarousel.scss';
import ReactCoverCarousel from 'react-cover-carousel';



function HomePage(props) {
  const CardInfo = props => (
    <section className="card">
      <img src={props.img}></img> 
      <p className="title"> {props.title}</p>
      <p  className="desc">{props.description}</p>
      <p className="desc">{props.description2}</p>
      <p className="desc">{props.description3}</p>
    </section>

  )

    const items = [
        <CardInfo key={0} img='./public/img/img1.jpeg' title="DON JEDIONDO" description="DIRECTOR: xxxxxxx xxxxxx" description2="FECHA: xx/xx/xx $18.000 COP" description3="Más información">
        </CardInfo>,
        <CardInfo key={1} img='./public/img/img1.jpeg' title="DON JEDIONDO" description="DIRECTOR: xxxxxxx xxxxxx" description2="FECHA: xx/xx/xx $18.000 COP" description3="Más información" >
        </CardInfo>,
        <CardInfo key={2} img='./public/img/img1.jpeg' title="DON JEDIONDO" description="DIRECTOR: xxxxxxx xxxxxx" description2="FECHA: xx/xx/xx $18.000 COP" description3="Más información" >
        </CardInfo>
    ]



  return <div className="transparent height">
        <ReactCoverCarousel
            otherFigureRotation={0}
            displayQuantityOfSide={1}
            navigation={true}
            activeImageIndex={2}
            height={window.innerHeight}
            width={window.innerWidth}
        >
        
        {items}
        
        </ReactCoverCarousel>
            <style jsx>{`
                .card {
                background-color: #2a3991;
                width: 80%;
                max-width: 300px;
            }
        `}</style>
    </div>
}

export default HomePage;