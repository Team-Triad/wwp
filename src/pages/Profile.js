import React from 'react';
import "./Profile.css"
import {useState} from 'react';
import {db} from '../components/Firebase/fire';
import {firebase,auth} from '../components/Firebase/fire'

const Profile = () => {
    const countryCode="+91";
    const [name , setName] = useState();
    const [otp , setOtp] = useState("");
    const [final , setfinal] = useState("");
    const [mobile , setMobile] = useState();
    const [expandForm , setExpandForm] = useState(false);
    const [validOtp , setValidOtp] = useState(false);
    const uid=window.sessionStorage.getItem("ID");

    const sub = (e) => {
      e.preventDefault();
     if(validOtp===true){
      // Add data to the store
      db.collection("Profile").doc(uid).set({
          Name: name,
          Mobile:mobile,
          Id:uid
      })
      .then((docRef) => {
          window.sessionStorage.setItem("MobileNo", mobile);
          alert("Profile Successfully Submitted");
          window.location.href='/Sign'
      })
  }
     else{
         if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            setValidOtp(true);
            subnew();
        }).catch((err) => {
            alert("Wrong code"+err);
        })
     }}
     const subnew =() =>{
         if(validOtp===true){
      // Add data to the store
      db.collection("Profile").doc(uid).set({
          Name: name,
          Mobile:mobile,
          Id:uid
      })
      .then((docRef) => {
          window.sessionStorage.setItem("MobileNo", mobile);
          alert("Profile Successfully Submitted");
          window.location.href='/Sign'
      })
  }
     }
  const generateRecaptcha = () =>{
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
  }
});
      const appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(mobile, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      setfinal(confirmationResult);
      alert("Code Sended");
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      alert("Code Not Sended because"+error);
      // ...
    });
    }
  const requestOTP =(e)=>{
        e.preventDefault();
        setExpandForm(true);
        generateRecaptcha();
        
};


      
  return (
      <div className='Profile'>
          <div id="recaptcha-container"></div>
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form onSubmit={(event)=>{sub(event)}}>
        <h3>Profile</h3>
        <label>Name:</label>
        <input placeholder="Enter your name"  onChange={(e) => setName(e.target.value)}/>
        <label>Mobile Number:</label>
        <input type="tel" minLength="10" maxLength="10" placeholder="Enter your Mobile Number"  onChange={(e) => setMobile(countryCode+e.target.value)} required/>
        {expandForm === true?
        <>
        <label>OTP:</label>
        <input placeholder="Enter OTP"  onChange={(e) => setOtp(e.target.value)} required/>
        </>
        :
        null
        }{
            expandForm === false?
            <button onClick={requestOTP} id="otp">Request OTP</button>
            :
            null
        }
        <button type='submit'>Submit</button>
    </form>
    </div>
  );
  
};


export default Profile;