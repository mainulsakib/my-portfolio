import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Contact.css'

const Contact = () => {
    return (
        <div style={{ backgroundColor:'Black' ,color:'white',height:'100vh'}} className='text-center'>
            <Navbar></Navbar>
            <h3>Feel free to contact me anytime </h3>
            <h1>Get in Touch</h1>
            <div className="row">

<form
  action="https://formspree.io/f/mvovrrak"
  method="POST" style={{margin:'0 auto'}} 
>
<input style={{margin:'20px'}} type="text" name="name" placeholder="name"/>
    <input style={{margin:'20px'}} type="text" name=" email" name="_replyto" placeholder='email' />
    <input style={{margin:'20px', height:'80px'}}  type="text" name="description" placeholder="description"/>


  <button style={{width:'50%', backgroundColor:'purple'}} type="submit">Send</button>
</form>
                </div>
             
                          
        </div>
    );
};

export default Contact;


// <form style={{margin:'0 auto'}} method="POST" action="https://formspree.io/mainul3003@gmail.com">
    // <input style={{margin:'20px'}} type="text" name="name" placeholder="name"/>
    // // 
    // <input style={{margin:'20px'}} type="text" name=" email" name="_replyto" placeholder='email' />
    // <input style={{margin:'20px', height:'80px'}}  type="text" name="description" placeholder="description"/>

    // <input style={{width:'50%', backgroundColor:'purple'}} type="submit" value="Send"/>
// </form>