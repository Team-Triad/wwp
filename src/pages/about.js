import React from 'react';
import linga from '../images/Linga.webp';
import Harshath from '../images/Harshath.webp';
import karthi from '../images/Karthi.webp';
import '../pages/about.css'
const About = () => {
  return (
 
    <section class="bg-light mt-5" id="tourist">    
     <div class="container">
      <div class="row text-center">
        <div class="col-sm-12 col-md-12 mb-4">
            <h1 class="text-center mt-4 text-secondary">About Us</h1>
         </div>
        <div class="col-md-4">
          <div class="testimonial mb-5">
           <div class="avatar mx-auto">
            <img src={Harshath} class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Harshath M</h4>
          <h6 class="font-weight-bold blue-text my-3">Computer Science & Engineering</h6>
          <p class="font-weight-normal dark-grey-text">
            "Without continual growth and progress, such words as improvement, achievement, and success have no meaning."</p>
        </div>
      </div>
 
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src={linga} class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">LingaPrabu S</h4>
          <h6 class="font-weight-bold blue-text my-3">Computer Science & Engineering</h6>
          <p class="font-weight-normal dark-grey-text">"A true friend is one who overlooks your failures and tolerates your success."</p>
        </div>
 
      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src={karthi} class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">KarthiKeyan S</h4>
          <h6 class="font-weight-bold blue-text my-3">Computer Science & Engineering</h6>
          <p class="font-weight-normal dark-grey-text">
            "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do."</p>
        </div>
        </div>
      </div>
    </div> 
   </section> 
  );
};

export default About;