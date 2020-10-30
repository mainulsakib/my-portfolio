import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Contact.css'

const Contact = () => {
    return (
        <div style={{ backgroundColor:'burlywood',height:'100vh'}} className='text-center'>
            <Navbar></Navbar>
            <h3>Feel free to contact me anytime </h3>
            <h1>Get in Touch</h1>
            <div className="row">
                <div className="col-md-6">
                <form action="https://formspree.io/mainul3003@gmail.com">
    <input style={{margin:'20px'}} type="text" name="name" placeholder="name"/>
    <input style={{margin:'20px'}} type="text" name=" email" name="_replyto" placeholder='email' />
    <input style={{margin:'20px', height:'80px'}}  type="text" name="description" placeholder="description"/>

    <input style={{width:'50%', backgroundColor:'purple'}} type="submit" value="Send"/>
</form>
                </div>
                <div className="col-md-6"></div>
                </div>            
        </div>
    );
};

export default Contact;