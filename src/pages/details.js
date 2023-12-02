import React,{useEffect, useState} from 'react';
import "./details.css"
import axios from 'axios';
import {useNavigate} from "react-router-dom"


export function Details() {
  const [records, setRecords]= useState([])
  const navigate =useNavigate()
 
// here we will fetch the data from the server through the get method. MockApi is used as server here. 
  useEffect(()=>{
    axios.get("https://6552be335449cfda0f2dc8c4.mockapi.io/feedback")
    .then( res=>{
      
      setRecords (res.data)
    })
  },[]);

  return (
    
      <div className="details">
        <container >
        
          <table className="table">
           
              <div className=" my-1"> <h5>Your Comments and Reviews</h5> </div>
            
            <tr>
              <div className= "form my-1">
                  <table className="table   mb-1 my-2" >
                    <thead>
                      <tr>
                      
                        <th >id</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Reveiws</th>
                        <th>Delete</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {
                        records.map((d,i)=>(
                          <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.email}</td>
                            <td>{d.name}</td>
                            <td>{d.feedback}</td>
                            <td><button className="btn btn-outline " onClick={e=>handleDelete(d.id)}><h5><i className="bi bi-trash3"></i></h5></button>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
              </div>

            </tr>
          
          </table>
        </container>
      </div>
  
  );
  function handleDelete(id){
    const conf = window.confirm ('Do you want to delete this record?');
    if(conf){
        axios.delete("https://6552be335449cfda0f2dc8c4.mockapi.io/feedback/" + id)
        .then( res=>{
          alert ("Your Data has been deleted Successfully");
          navigate ('/Review')
        }).catch(err => console.log(err));
    }

  };
  
};

