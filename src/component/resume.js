import { useLocation } from "react-router-dom";
import "../style/login.scss";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export function Resume () {
    const location = useLocation();

const { name, sureName } = location.state || {};
        




    return(
        <div className="headerResume">
            <div className="navResume">
                <div className="nameDiv">
                    <h1>{name}</h1>
                    <h1>{sureName}</h1>
                </div>

                <div className="resumeA"> 
                    <Link to="/header" state={{name, sureName}}>About me</Link> 
                    <Link to="/contact" state={{name, sureName}}>Contact</Link>
                
                </div>

                <div className="resumeh1">
                    <hr className="hrTwo"/>
                    <p>8 Years of Experience</p>
                    <h1>Resume</h1>
                    <hr className="hrOne"/>

                </div>

                <div className="educationDiv">
                   <h1>Education</h1>
                   <hr className="eduHr"/>
                   <p> <span>2009</span>   University of Studies</p>
                   <h3>UI Design</h3>
                    <p className="designP">Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum</p>
                    
                    <p> <span>2008</span>   University of Studies</p>
                   <h3>Graphic Design</h3>
                    <p className="designP">Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat riss quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>


                    <p> <span>2007</span>   University of Studies</p>
                   <h3>Frontend Development</h3>
                    <p className="designP">Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante</p>

                </div>

                <div className="educationDivv">
                    <h1>Experience</h1>
                    <hr className="eduHr"/>

                     <p> <span>2016 - Current</span>   University of Studies</p>
                   <h3>Rolling Thunder</h3>
                    <p className="designP">Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna</p>

                     <p> <span>2013 - 2016</span>   Locost Accessories</p>
                   <h3>Senior UI/UX Designer</h3>
                    <p className="designP">Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam.</p>
                

                    <p> <span>2011 - 2013</span>   Sagebrush</p>
                   <h3>Junior UI/UX Designer</h3>
                    <p className="designP">Duis mollis nunc quis quam viverra venenatis. Nulla nulla arcu, congue vitae nunc ac, sodales ultricies diam. Nullam justo leo, tincidunt sit amet</p>
                </div>

               <div className="designDiv">
                    <h2>Design Skills</h2>
                    <hr/>
                    <div>
                        <h4 className="divH4">UI/UX Design</h4>
                        <label for="file" className="divPercent">95%</label>
                    </div>
                    <progress className="progress"  id="file" value="95" max="100"> 95% </progress>

                    <div>
                        <h4 className="divH4">Print Design</h4>
                        <label for="file" className="divPercent">75%</label>
                    </div>
                    <progress className="progress"  id="file" value="75" max="100"> 75% </progress>

                    <div>
                        <h4 className="divH4">Graphic Design</h4>
                        <label for="file" className="divPercent">85%</label>
                    </div>
                    <progress className="progress"  id="file" value="85" max="100"> 85% </progress>

                    <div>
                        <h4 className="divH4">Logo Design</h4>
                        <label for="file" className="divPercent">90%</label>
                    </div>
                    <progress className="progress"  id="file" value="90" max="100"> 90% </progress>
               </div>



                <div className="codingDiv">
                    <h2>Coding Skills</h2>
                    <hr/>
                    <div>
                        <h4 className="divH4">HTML / CSS</h4>
                        <label for="file" className="divPercent">100%</label>
                    </div>
                    <progress className="progress"  id="file" value="100" max="100"> 100% </progress>
                    <div>
                        <h4 className="divH4">PHP</h4>
                        <label for="file" className="divPercent">90%</label>
                    </div>
                    <progress className="progress"  id="file" value="90" max="100"> 90% </progress>

                    <div>
                        <h4 className="divH4">javaScript</h4>
                        <label for="file" className="divPercent">90%</label>
                    </div>
                    <progress className="progress"  id="file" value="90" max="100"> 90% </progress>

                    <div>
                        <h4 className="divH4">Smarty / Twig</h4>
                        <label for="file" className="divPercent">85%</label>
                    </div>
                    <progress className="progress"  id="file" value="85" max="100"> 85% </progress>
                </div>

                <>
                    <hr className="href"/>
                    <p className="lastP">© 2020 All rights reserved. LMPixels.</p>
                </>
            </div>
        </div>
    )
}