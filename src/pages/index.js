import React, { useState } from 'react';
import './home.css'
import {db} from '../components/Firebase/fire'

const Home = () => {
  const [info , setInfo] = useState([]);
  
  window.addEventListener('click', () => {
      Fetchdata();
    });
  window.addEventListener('load', () => {
      Fetchdata();
    });

  const Fetchdata = ()=>{
      db.collection("Works").where("Reported","<=",2).onSnapshot((querySnapShot) => {
        const localArr = [];
        querySnapShot.forEach((doc) => {
          localArr.push(doc.data());
        });
        setInfo(localArr);
      });
  }

  return (
    <div className='total-cards'>
      {
        info.map((data)=>(<Frame 
          name={data.Name} 
          amount={data.Amount} 
          district={data.District}
          members={data.MembersNeeded}
          contact={data.ContactNumber}
          addi={data.AdditionalInfo}
          report={data.Reported}
          docid={data.DocId}
          />))
      }
    </div>
  );
};

const Frame=({name,amount,district,members,contact,addi,report,docid})=>{
  return(
    <div className="card text-center single-card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className='card-text'>Budget:{amount}</p>
          <p className='card-text'>District:{district}</p>
          <p className='card-text'>MembersNeeded:{members}</p>
          <p className='card-text'>ExtraInfo:{addi}</p>
          <button type="button" onClick={() => Report({report,docid})} className="btn btn-primary">Report</button>
        </div>
        <div className="card-footer">Contact no:{contact}</div>
      </div>
  )
}
const Report = ({report,docid}) =>{
      db.collection("Works").doc(docid).update({
              Reported: report+1
          })
      alert("Reported")
      };
export default Home;