import { useLocation } from "react-router-dom";
import "../style/contact.scss"
import "../style/login.scss"
import { Link } from "react-router-dom";
import { LondonMap } from "./londonMap.js";
import { ContractFooter } from "./contactFooter.js";


export function Contact () {
    const location = useLocation();

    const { name, sureName } = location.state || {};

    return(
       <div className="contactHeader">
            
            <nav className="contactNav">

                <div className="nameeDiv">
                    <h1>{name}</h1>
                    <h1>{sureName}</h1>
                </div>

                <div className="resumeA"> 
                    <Link to="/header" state={{name, sureName}}>About me</Link> 
                    <Link to="/resume" state={{name, sureName}}>Resume</Link>
                
                </div>

                <div className="resumeh1">
                    <hr className="hrTwo"/>
                    <p>Get in Touch</p>
                    <h1>Contact</h1>
                    <hr className="hrOne"/>

                </div>

                <>
                    <LondonMap/>
                </>

                <ContractFooter/>

            </nav>
        </div>
    )
}