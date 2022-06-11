import React, { useState } from 'react';
import {db} from '../components/Firebase/fire'
import Firebase from '../components/Firebase/fire'
const UserHome = () => { 
    const [info , setInfo] = useState([]);
    const uid=window.sessionStorage.getItem("ID");
    window.addEventListener('load', () => {
      Fetchdata();
    });
    window.onload = () => {
      Fetchdata();
    };
    window.addEventListener('click', () => {
      Fetchdata();
    });
    const handleLogout = () => {
    Firebase.auth().signOut();
    window.location.href='/sign'
  };
    const Fetchdata = ()=>{
      db.collection("Works").where("Id","==",uid).onSnapshot((querySnapShot) => {
        const localArr = [];
        querySnapShot.forEach((doc) => {
          localArr.push(doc.data());
        });
        setInfo(localArr);
      });
  }
    return(
        <section className='UserHome'> 
        <nav>
            <button onClick={(e) =>{e.preventDefault();window.location.href='/Profile'}}>Edit Profile</button>
            <button onClick={handleLogout}>Logout</button>
        </nav>
        <h1>Welcome :)</h1>
        <h1>Your Jobs:</h1>
        <div className='tota-cards'>
      {
        info.map((data)=>(<Frame 
          name={data.Name} 
          amount={data.Amount} 
          district={data.District}
          members={data.MembersNeeded}
          contact={data.ContactNumber}
          addi={data.AdditionalInfo}
          docid={data.DocId}
          />))
      }
    </div>
        </section>
        
        
    );
}
const Frame=({name,amount,district,members,contact,addi,docid})=>{
  return(
    <div className="card text-center single-card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className='card-text'>Budget:{amount}</p>
          <p className='card-text'>District:{district}</p>
          <p className='card-text'>MembersNeeded:{members}</p>
          <p className='card-text'>ExtraInfo:{addi}</p>
          <button type="button" onClick={() => ddelete({docid})} className="btn btn-primary">Remove</button>
        </div>
        <div className="card-footer">Contact no:{contact}</div>
      </div>
  )
}
const ddelete = ({docid}) =>{
      var docRef=Firebase.firestore().collection("Works");
      docRef.doc(docid).delete();
      };
export default UserHome;