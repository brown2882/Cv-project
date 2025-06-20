import "../style/login.scss"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Man from "../assets/image/man.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import {faStore}  from '@fortawesome/free-solid-svg-icons';
import {faDesktop}  from '@fortawesome/free-solid-svg-icons';
import {faChartSimple}  from '@fortawesome/free-solid-svg-icons';
import {faHeart}  from '@fortawesome/free-solid-svg-icons';
import {faClock}  from '@fortawesome/free-solid-svg-icons';
import {faMugSaucer}  from '@fortawesome/free-solid-svg-icons';
import {faStar}  from '@fortawesome/free-solid-svg-icons';



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
                <div className="globalIconDiv">
                  <div className="fapenDiv">
                  
                      <FontAwesomeIcon icon={faPen}  className="faPenicon" style={{ color: "#74C0FC",}} />
                      <div>
                         <h2>Copywrite</h2>
                         <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex</p>
                      </div>
                  </div>
                  <div className="fapenDiv">
                    
                    <FontAwesomeIcon icon={faStore} className="faPenicon" style={{color: "#74C0FC",}} />
                    <div>
                        <h2>Ecommerce</h2>
                        <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.</p>
                    </div>
                  </div>

                </div>  

                {/* //////////////////////////// */}

                 <div className="globalIconDivTwo">
                  <div className="fapenDiv">
                  
                      <FontAwesomeIcon icon={faDesktop} className="faPenicon" style={{color: "#74C0FC",}} />

                      <div>
                         <h2>Web Design</h2>
                         <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex</p>
                      </div>
                  </div>
                  <div className="fapenDiv">
                    
                    <FontAwesomeIcon icon={faChartSimple} className="faPenicon" style={{color: "#74C0FC",}} />
                    <div>
                        <h2>Marketing</h2>
                        <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.</p>
                    </div>
                  </div>

                </div> 


                
                  <h2 className="h22">Fun Facts</h2>
                  <hr className="hr"/>

                <div className="funDiv">
                  <div className="funDivOne">
                      <FontAwesomeIcon icon={faHeart} className="funDivIcon" style={{color: "#74C0FC",}} />
                      <h3>Happy Clients</h3>
                      <h1>578</h1>
                  </div>
                  
                   <div className="funDivOne">
                      <FontAwesomeIcon icon={faClock} className="funDivIcon" style={{color: "#74C0FC",}} />
                      <h3>Working Hours</h3>
                      <h1>4,780</h1>
                  </div>
                  
                  <div className="funDivOne">
                      <FontAwesomeIcon icon={faStar} className="funDivIcon" style={{color: "#74C0FC",}} />
                      <h3>Awards Won</h3>
                      <h1>15</h1>
                  </div>
                 
                  <div className="funDivOne">
                      <FontAwesomeIcon icon={faMugSaucer} className="funDivIcon" style={{color: "#74C0FC",}} />
                      <h3>Coffee Consumed</h3>
                      <h1>1,286</h1>
                  </div>
                </div>

                <h2 className="h22">Pricing</h2>
                  <hr className="hr"/>
                <div className="PricingDiv">
                  <div className="priceDivOne">
                        <p className="kk">Silver</p>
                        <h2 className="k">$64</h2>
                        <p className="kk">per mounth</p>
                        <button className="bgtnTree">Contact</button>
                        
                        <p className="k">Lorem ipsum dolor</p>
                        <p className="k">Pellentesque scelerisque</p>
                        <p className="k">Morbi eu sagittis</p>
                  </div>

                    <div className="priceDivTwo">
                        <p className="kk">Gold</p>
                        <h2 className="k">$128</h2>
                        <p className="kk">per mounth</p>
                        <button className="bgtnFour">Contact</button>
                        
                        <p className="k">Lorem ipsum dolor</p>
                        <p className="k">Pellentesque scelerisque</p>
                        <p className="k">Morbi eu sagittis</p>
                        <p className="k">Donec non diam</p>
                  </div>

                   <div className="priceDivTree">
                        <p className="kk">Platinum</p>
                        <h2 className="k">$256</h2>
                        <p className="kk">per mounth</p>
                        <button className="bgtnFour">Contact</button>
                        
                        <p className="k">Lorem ipsum dolor</p>
                        <p className="k">Pellentesque scelerisque</p>
                        <p className="k">Morbi eu sagittis</p>
                        <p className="k">Donec non diam</p>
                        <p className="k">Aenean nec libero</p>
                  </div>
                </div>

                <hr className="hrr"/>

                <p className="p20">© 2020 All rights reserved. LMPixels.</p>
                  
            </nav>

           
             
        </div>
    )
}


