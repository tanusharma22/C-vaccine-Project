import React from 'react'
import './Patient.css'
import { Link } from "react-router-dom";



function Patient() {

    return (
        <div>
            <div>
            <nav className="navbar navbar-expand-sm bg-info navbar-dark">
                <div className="container-fluid">
                    <a href="#"> <img class="card_image" src="/covid-19-vaccine-image.png" alt=""/> </a>
                    <h1 className="title">C-Vaccine</h1>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        
                        <span className="navbar-toggler-icon"></span>
                        
                    </button>
                   
                    <div id="navbarSupportedContent">
                        <ul className="navbar-nav ml ">

                        <Link to="/Home" >
                        <li><span class="home-nav adjust">Home</span></li></Link>
       
                        </ul>
                          
                    </div>
                  
                </div>
                
            </nav>
        </div>
        <div id="pd">
            <div>
            <h1>Patient Details</h1>
            <h5>Registered Mobile Number:</h5>
            <output name="x"></output>
            </div>
            
            <div className="shadow">
              <h4 style={{background:"#42bcf5",padding:10}}> ABC | Ref Id: <output name="x"></output></h4>
               
                    
                            


                            <div className="row" style={{padding:10}}>
                                <div className="col-lg-4">
                                    Year Of Birth:<output>12/05/1985</output>
                                </div>
                                <div className="col-lg-4">
                                    Mobile No.:<output>9944002937</output>
                                </div>
                                <div className="col-lg-4">
                                    Id Number:<output>171921336</output>
                                </div>
                                <br></br>
                                <br>
                                </br>
                                <div id="bttn">

                                    <Link to='/SearchSlot'>
                                    <button type="submit" class="btn btn-primary">Dose 1</button>

                                    <span> </span>
                                    <button type="submit" class="btn btn-primary">Dose 2</button>
                                    <span> </span>
                                    
                                    </Link>

                                </div>

                            </div>
                    
            </div>
            <br></br>
            <div class="form-group" >
  <label for="exampleFormControlTextarea1">Information</label>
  <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="9" style={{background:"#42bcf5"}}>
  Always Wear Mask--
  Maintain The Distance--
  Always Sanitize Your Hands</textarea>
</div>
        
            





        </div>

<div>



            <div className="footer">
                <p>Privacy Policy | Copyright | All Rights Reserved.</p>
            </div>
        </div>


</div>
    )
}
export default Patient