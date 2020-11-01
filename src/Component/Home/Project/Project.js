import React, { useState } from 'react';
import tg from '../../../travelGuru.png'
import Navbar from '../Navbar/Navbar';
import vn from '../../../volunteerNetwork.png'

const Project = () => {

  return (


    <div className='about' >
      <Navbar></Navbar>
      <h1 className='text-center p-4' >My Projects </h1>
    <div className="d-flex flex-column flex-center m-3" style={{ margin:'0 auto'}}>
      <div style={{margin:'0 auto'}}>
      <div class="card mb-3" style={{ maxWidth: " 540px", color: 'black' }}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src={tg} className="card-img h-100" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body" >
              <h5 class="card-title">Travel Guru</h5>
              <p class="card-text">It is a  travel agency website where tourists can select the different destinations and also select rooms .they can also pick check-in dates to check out date</p>
              <p class="card-text"><small class="text-muted">Used Technologies: React ,Material UI,firebase,React router Heroku,MongoDB</small></p>
              <a href="#" class="btn btn-primary btn-lg disabled m-3" role="button" aria-disabled="true">Live Link</a>
              <a href="#" class="btn btn-secondary btn-lg disabled m-3" role="button" aria-disabled="true">Github</a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div  style={{margin:'0 auto'}}>
      <div class="card mb-3" style={{ maxWidth: " 540px", color: 'black' }}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src={vn} className="card-img h-100" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Volunteer Network</h5>
              <p class="card-text">It  is a website for a volunteer where any volunteer can select their task .and they can select date .and moreover, they can also delete .the chosen work.</p>
              <p class="card-text"><small class="text-muted">Used Technologies: React ,Material UI,firebase,React router Heroku,MongoDB,Express ,Node</small></p>
              <a href="#" class="btn btn-primary btn-lg disabled m-3" role="button" aria-disabled="true">Live Link</a>
              <a href="#" class="btn btn-secondary btn-lg disabled m-3" role="button" aria-disabled="true">Github</a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div  style={{margin:'0 auto'}}>  <div class="card mb-3" style={{ maxWidth: " 540px", color: 'black' }}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src={tg} className="card-img h-100" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Travel Guru</h5>
              <p class="card-text">This is a  travel agency website where tourist can select different  destination and also select rooms and they can also pick checkin dates to check out d date .</p>
              <p class="card-text"><small class="text-muted">Used Technologies: React ,Material UI,firebase,React router Heroku,MongoDB</small></p>
              <a href="#" class="btn btn-primary btn-lg disabled m-3" role="button" aria-disabled="true">Live Link</a>
              <a href="#" class="btn btn-secondary btn-lg disabled m-3" role="button" aria-disabled="true">Github</a>
            </div>
          </div>
        </div>
      </div></div>
      <div  style={{margin:'0 auto'}}>  <div class="card mb-3" style={{ maxWidth: " 540px", color: 'black' }}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src={tg} className="card-img h-100" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Travel Guru</h5>
              <p class="card-text">This is a  travel agency website where tourist can select different  destination and also select rooms and they can also pick checkin dates to check out d date .</p>
              <p class="card-text"><small class="text-muted">Used Technologies: React ,Material UI,firebase,React router Heroku,MongoDB</small></p>
              <a href="#" class="btn btn-primary btn-lg disabled m-3" role="button" aria-disabled="true">Live Link</a>
              <a href="#" class="btn btn-secondary btn-lg disabled m-3" role="button" aria-disabled="true">Github</a>
            </div>
          </div>
        </div>
      </div></div>
      <div  style={{margin:'0 auto'}}>  <div class="card mb-3" style={{ maxWidth: " 540px", color: 'black' }}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src={tg} className="card-img h-100" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Travel Guru</h5>
              <p class="card-text">This is a  travel agency website where tourist can select different  destination and also select rooms and they can also pick checkin dates to check out d date .</p>
              <p class="card-text"><small class="text-muted">Used Technologies: React ,Material UI,firebase,React router Heroku,MongoDB</small></p>
              <a href="#" class="btn btn-primary btn-lg disabled m-3" role="button" aria-disabled="true">Live Link</a>
              <a href="#" class="btn btn-secondary btn-lg disabled m-3" role="button" aria-disabled="true">Github</a>
            </div>
          </div>
        </div>
      </div></div>
      <div  style={{margin:'0 auto'}}>  <div class="card mb-3" style={{ maxWidth: " 540px", color: 'black' }}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src={tg} className="card-img h-100" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Travel Guru</h5>
              <p class="card-text">This is a  travel agency website where tourist can select different  destination and also select rooms and they can also pick checkin dates to check out d date .</p>
              <p class="card-text"><small class="text-muted">Used Technologies: React ,Material UI,firebase,React router Heroku,MongoDB</small></p>
              <a href="#" class="btn btn-primary btn-lg disabled m-3" role="button" aria-disabled="true">Live Link</a>
              <a href="#" class="btn btn-secondary btn-lg disabled m-3" role="button" aria-disabled="true">Github</a>
            </div>
          </div>
        </div>
      </div></div>
    </div>

    </div>
  );
};

export default Project;
