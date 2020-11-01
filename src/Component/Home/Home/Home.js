import React from 'react';
import Particles from 'react-particles-js';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import bg from '../../../IMG_20191207_065152.jpg';
import Particle from '../Home/Particles/Particle'


const Home = () => {
 
      
            return (
                <div  >
                     <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor:'black'
        }}
      >
        <Particle />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <Navbar></Navbar>
   <HeaderMain></HeaderMain>
        </div>
      </div>


                  
                </div>
            );
};

export default Home;
