import "../style/login.scss"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";


export function Header () {

    const location = useLocation();
    const { name, sureName } = location.state || {};
   

    useEffect(() => {
      if (name && sureName) {
        console.log("Name:", name);
      console.log("Surname:", sureName);
      }
    }, [name , sureName]);
    
  
    return(
        <div className="header">
            
            <nav className="nav">
              <div className="navOne">
                    <h2>{name}</h2>
                    <h2>{sureName}</h2>
              </div>
               <div className="a">
                    <a target="_blank">About me</a>
                    <a>Resume</a>
                    <a>Contact</a>
                </div>
                
            </nav>
             
        </div>
    )
}


