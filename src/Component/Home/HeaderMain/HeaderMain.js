import React from 'react';
import pic from '../../../myimage.png'
import gmail from '../../../gmail.png'
import linkedin from '../../../linkedin.png'
import github from '../../../github.png'

const HeaderMain = () => {
    return (
        <div className='d-flex  flex-column text center m-4 p-4'>
             <img className='rounded-circle w-25' style={{height:'200px',margin:'0 auto'}} src={pic} alt=""/>
            <h1 className='mt-3' style={{margin:'0 auto'}}>Hi !I am Mainul Islam </h1>
            <p className=' p-4 float-center w-50 ' style={{margin:'0 auto'}}>I am a front end web developer .I can give you a pixel perfect code . I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.
</p>
<div  style={{margin:'0 auto'}}>
    <a href="mainul3003@gmail.com"><img src={gmail} className="round-circle m-2" style={{height:'30px', width:'30px'}} alt=""/></a>
  <a  href="https://linkedin.com/in/mainul-islam-sakib"><img src={linkedin} className="round-circle m-2" style={{height:'30px', width:'30px'}} alt=""/></a>
    <a href="https://github.com/mainulsakib"> <img src={github} className="round-circle m-2" style={{height:'30px', width:'30px'}} alt=""/></a>
   
</div>
        </div>
    );
};

export default HeaderMain;