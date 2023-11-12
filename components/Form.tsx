'use client';
import React from 'react';
import './formstyles.css'



const Form = () => {
  return (
    <form>
    <div className="inputContainer">
     <label htmlFor="email">Email address</label>
     <input type="email" id="email" placeholder='email@company.com'/>
     </div>
     <div className="button-container">
      <button className="button" type="submit">Suscribe to monthly newsletter</button>
     </div>
     </form>
  )
}

export default Form