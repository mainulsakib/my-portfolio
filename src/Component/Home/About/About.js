import React from 'react';
import pics from '../../../myimage.png'
import Navbar from '../Navbar/Navbar';
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <Navbar></Navbar>
            <div style={{height:'100%'}} className='row'>
            <div className='col-md-4'>
                <img className='w-75 m-4 p-4 ' src={pics} alt=""/>
            </div>
            <div className='col-md-5 m-2 p-3'>
                
                <h1>Hi .I am Mainul Islam</h1>
                <p>I am a front end web developer .I can give you a pixel perfect code . I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                <h1>Skills</h1>
                <div className=" d-flex flex-row">
                    <p  className="text-center" style={{ border:"1px solid",width:"60px",backgroundColor:'green',borderRadius:'5px',padding :'5 px'}}>HTML5</p>
                    <p  className="text-center" style={{ border:"1px solid",width:"60px",backgroundColor:'green',borderRadius:'5px',padding :"5 px"}}>CSS3</p>
                    <p  className="text-center" style={{ border:"1px solid",width:"60px",backgroundColor:'green',borderRadius:'5px'}}>React </p>
                    <p  className="text-center" style={{ border:"1px solid",width:"100px",backgroundColor:'blue',borderRadius:'5px'}}>Bootstrap</p>
                    <p  className="text-center" style={{ border:"1px solid",width:"160px",backgroundColor:'green',borderRadius:'5px'}}>JavaScript</p>
                    <p  className="text-center" style={{ border:"1px solid",width:"120px",backgroundColor:'green',borderRadius:'5px'}}>MongoDB</p>
                </div>
                <h1>Personal Detail</h1>
                <ul class="alignMe">
  <li><b>Full Name</b>Mainul Islam</li>
  <li><b>Age</b> 23</li>
  <li><b>Nationality</b>Bangladeshi</li>
  <li><b>Address</b>Chittagong</li>
  <li><b>Email</b>mainul3003@gmail.com</li>
  <li><b>Phone Number</b>+8801767440997</li>
</ul>
<h1>Educational Information</h1>
                <ul class="alignMe">
  <li>BSc. in Engineering <br/>
  EEE,KUET
  </li>
  <li>HSC <br/>
  Govt.City College 
  </li>
  <li>SSC <br/> Chittagong Govt. High School</li>
  
</ul>
<button className="primary"><a   target="_blank"  href="https://drive.google.com/file/d/1ogDucT6xP_LmkmLGbm_UcQ8ZALj7EZgw/view?usp=sharing">Download Resume</a></button>
            </div>
        </div>
        </div>
    );
};

export default About;