import React from 'react';
import pic from '../../../myimage.png'
import gmail from '../../../gmai.png'
import linkedin from '../../../linkedin.png'
import github from '../../../github.png';
import medium from '../../../medium.png';
import Typical from 'react-typical'

const HeaderMain = () => {
    return (
        <div className='d-flex row text center m-4 p-4 ' style={{color: 'white'}}>
             <div className='col-md-6 '>
           <h1 className='mt-3' >Hi !I am Mainul Islam </h1>
            <p style={{fontSize:'50px'}}>I am    
            <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
                 " Developer",
                1000,
                 " Designer",
                1000
                ]}
            ></Typical>

            </p>
            <p className='  float-center' >I am a front end web developer. I can give you a pixel-perfect code. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.
</p>
<div  style={{margin:'0 auto'}}>
    <a href="mainul3003@gmail.com"><img src={gmail} className=" m-2" style={{height:'30px', width:'30px',borderRadius:'50%'}} alt=""/></a>
  <a  href="https://linkedin.com/in/mainul-islam-sakib"><img src={linkedin} className="round-circle m-2" style={{height:'30px', width:'30px'}} alt=""/></a>
    <a href="https://github.com/mainulsakib"> <img src={github} className="round-circle m-2" style={{height:'30px', width:'30px', filter:  "brightness(0) invert(1)"}} alt=""/></a>
    <a href="https://medium.com/@mainul3003"> <img src={medium} className="round-circle m-2" style={{height:'30px', width:'30px', filter:  "brightness(0) invert(1)"}} alt=""/></a>
   
</div>
           </div>
            <div className='col-md-4'>
            
            </div>
          
        </div>
    );
};

export default HeaderMain;