import React, { useState } from 'react';
import tg from '../../../travelGuru.png'
import Navbar from '../Navbar/Navbar';
import ReactCardFlip from 'react-card-flip';

const Project = () => {
  const  CardFlip =()=>{
    const [isFlip,setIsFlip] =useState(false);
    const  handleClick =()=>{
      setIsFlip(!isFlip);
    }

  }
    return (
        
     
        <div className='about' >
            <Navbar></Navbar>
            <h1>This is projects </h1>
            <div className="row" >
            <div  onClick={handleClick} className="card col-md-3 ">
  <img src={tg} className="card-img-top w-100 " style={{width: "100%"}} alt="..."></img>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card col-md-3 m-3" style={{width: "18rem"}}>
  <img src={tg} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card col-md-3 m-3" style={{width: "18rem"}}>
  <img src={tg} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card col-md-3 m-3" style={{width: "18rem"}}>
  <img src={tg} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card col-md-3 m-3" style={{width: "18rem"}}>
  <img src={tg} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
            </div>
          
        </div>
    );
};

export default Project;
