import React from 'react';
import './services.css'
import {db} from '../components/Firebase/fire';
import {useState} from 'react';

const Services = () => {
  const [name  , Setname] = useState("");
  const [amount , Setamount] = useState("");
  const [dist , Setdist] = useState("");
  const [members , Setmembers] = useState("");
  const [addi  , Setaddi] = useState("");
  const uid=window.sessionStorage.getItem("ID");
  const mobile=window.sessionStorage.getItem("MobileNo");
  const sub = (e) => {
      e.preventDefault();
      
      // Add data to the store
      db.collection("Works").add({
          Name: name,
          Amount:amount,
          District:dist,
          MembersNeeded:members,
          ContactNumber:mobile,
          AdditionalInfo:addi,
          Id:uid,
          Reported:0
      })
      .then((docRef) => {
          
          db.collection("Works").doc(docRef.id).update({
              DocId: docRef.id
          })
          alert("Data Successfully Submitted");
          window.location.href='/'
      })
      .catch((error) => {
          // eslint-disable-next-line default-case
          switch (error.code){
              case 'permission-denied':
                  alert("Login Required.\nPlease enter the login credintials");
                  window.location.href='/signup'
          }
      });
  }
  return (
    <div className='total-services'>
      <h1 id="title">Post your job details</h1>
      <p id="description">:The need, which needs to be satisfied:</p>
      <form onSubmit={(event)=>{sub(event)}} id="survey-form">
            <div className="sub-category">
                <label id="name-label" for="name">Work name:</label>
                <input onChange={(e)=>{Setname(e.target.value)}} className="input-element" type="text" id="name" placeholder="Eg:Pipeline repair, Concrete work etc" required />
            </div>
            <div className="sub-category">
                <label id="amount-label" for="amount">Budget:</label>
                <input onChange={(e)=>{Setamount(e.target.value)}} className="input-element" type="number" min="500" id="amount" placeholder="In Indian rupees" required />
            </div>
            <div className="sub-category">
                <label id="dist-label" for="dist">District:</label>
                <input onChange={(e)=>{Setdist(e.target.value)}} className="input-element" type="text" id="dist" placeholder="" required />
            </div>
            <div className="sub-category">
                <label id="members-label" for="members">Workers needed to complete the work:</label>
                <input onChange={(e)=>{Setmembers(e.target.value)}} className="input-element" type="number" id="members" placeholder="" required />
            </div>
            <div class="sub-category">
                <label for="additional">Additional details about your work:</label>
                <textarea onChange={(e)=>{Setaddi(e.target.value)}} class="input-element" name="extra" id="additional" cols="24" rows="7"></textarea>
            </div>
            <div class="sub-category">
                <input type="submit" id="submit" />
            </div>
      </form>
    </div>
  );
};

export default Services;