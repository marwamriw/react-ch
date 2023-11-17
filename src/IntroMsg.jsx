import React from 'react'
import './IntroMsg.css'
const IntroMsg = () =>{
return (
    <>
    <div className="IntroMsg">
    
    <img  alt="Garcia Taverns where food meets passion" 
    className="logo" src="https://i.ibb.co/WK9hkx8/Garcia-Tavern-logos-transparent.png" id="introLogo" width="200" height="200" />
    </div>
        
	<div className='IntroMsg'>
        <h1> Stunning food, Amazing Quaility  </h1>
    <br/>
        <span>
           Let us host your next special occassion
        </span>
        <h2>
       <a href="call:111-111-111" style={{textDecoration: "none", color: "white"}}> <i className="bi bi-telephone-forward-fill"> <span> Contact US today </span></i></a>
       
        </h2>
	</div>
    
    </>

)
}
export default IntroMsg ;