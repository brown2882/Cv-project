import "../style/login.scss"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Man from "../assets/image/man.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';


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
                 

                <div className="manDiv">
                    <div>
                         <img src={Man} className="man"/>
                    </div>
                    <div className="mainDivSecond">
                      <div className="mainH1">
                        <h1>{name}</h1>
                        <h1>{sureName}</h1>
                      </div>
                       
                       
                        <p>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.

                        </p>
                    </div>
                </div>
                
                <div className="btnDiv">
                    <button className="btnOne">Download CV</button>
                    <button className="bgtnTwo">Contact</button>
                </div>

                <h2 className="h22">What I Do</h2>
                <hr className="hr"/>
                <div>
                  <div className="fapenDiv">
                  
                      <FontAwesomeIcon icon={faPen}  className="faPenicon" style={{ color: "#74C0FC",}} />
                      <div>
                         <h2>Copywrite</h2>
                         <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex</p>
                      </div>
                  </div>

                </div>  
            </nav>

           
             
        </div>
    )
}


