import "./review.css"
import React,{ useState} from 'react';

import axios from 'axios';
import {useNavigate} from "react-router-dom"


export function Review() {
  const [inputData, setInputData]=useState({name:"", email:"",feedback:""})
  const navigate =useNavigate();
  
  function handleSubmit(event){
    event.preventDefault();
    axios.post("https://6552be335449cfda0f2dc8c4.mockapi.io/feedback",inputData)
      .then(res=>{
        alert (" Your data has been submitted Successfully");
        navigate("/Details");
      })
  }
  return (
    <div className="review" >
      <div className="container-light">
          <div class="row">
              <div class="col">
                    <div className="mb-3 my-20 py-2 mb-3" style={{float:"left"}}>
                          <img src="https://www.bdo.com.ph/content/dam/bdounibank/en-ph/cbg-marketing/cards/credit-and-debit/Feb%208,2023%20-%20Hero%20Banner_1_500x440.png" className="d-block w-100" alt="..."/>
                        </div>
              </div>
              <div class="col-md-auto">
                <h7>Your Reviews here:</h7>
                <div className="card">
              <form  onSubmit={handleSubmit} className="cont ">
                          <div className="mb-">
                              <label className="form-label">Email</label>
                              <input type="email" className="form-control my-3 mb-3" 
                              onChange ={e=> setInputData({...inputData, email:e.target.value})}/>
                            </div>
                            <div className="mb-3">
                              <label className="form-label">Name</label>
                              <input type="text" className="form-control" 
                              onChange ={e=> setInputData({...inputData, name:e.target.value})}/>
                            </div>
                            <div className="mb-3">
                              <label className="form-label">FeedBack</label>
                              <textarea rows="5" type="text" className="form-control" 
                              onChange ={e=> setInputData({...inputData, feedback:e.target.value})}/>
                            </div>
                            
                            <button type="submit" className="btn btn-warning my-2">Submit</button>
                    </form>
                </div>
          </div>
       
        </div>
      </div>
    </div>     
      
   
  );
};

