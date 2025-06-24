import {faPhone}  from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot}  from '@fortawesome/free-solid-svg-icons';
import {faEnvelope}  from '@fortawesome/free-solid-svg-icons';

import "../style/contact.scss"

export function ContractFooter () {

    return(
        <>
            <div className='footerDiv'>
                <div className='footerDivI'>
                    <FontAwesomeIcon className='footerIcon' icon={faPhone} style={{color: "#74C0FC",}} />
                    <div>
                        <h3>415-832-2000</h3>
                        <p className='footerP'>Duis erat leo, aliquam laoreet fringilla quis, pretium vitae dui.</p>
                    </div>
                </div>

                 <div className='footerDivI'>
                    <FontAwesomeIcon className='footerIcon' icon={faLocationDot} style={{color: "#74C0FC",}} />
                    <div>
                        <h3>San Francisco</h3>
                        <p className='footerP'>Duis erat leo, aliquam laoreet fringilla quis, pretium vitae dui.</p>
                    </div>
                </div>

                <div className='footerDivI'>
                    <FontAwesomeIcon className='footerIcon' icon={faEnvelope} style={{color: "#74C0FC",}} />
                    <div>
                        <h3>hello@example.com</h3>
                        <p className='footerP'>Duis erat leo, aliquam laoreet fringilla quis, pretium vitae dui.</p>
                    </div>
                </div>
                
            </div>
            <div className='footerDivv'>
                <h2>How Can I Help You?</h2>
                <hr/>

                <input className='footerInput' type='text' placeholder='Full Name' required/>
                <div>
                    <input className='footerInput' type='gmail' placeholder='Email Addres'/>
                </div>
                <div>
                    <input className='footerInput' type='text' placeholder='Subject'/>
                </div>

                <>
                    <button className='btnFooter'>Send Message</button>
                </>


            </div>

            <div className='footerDivv'>
                <input className='footerMessage' type='text' placeholder='Message'/>
            </div>


           
            
        </>
    )
}