import React from 'react';
import Particles from 'react-particles-js';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import bg from '../../../IMG_20191207_065152.jpg'

const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`,height:"100vh",width:'100%'}} >
             
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Home;