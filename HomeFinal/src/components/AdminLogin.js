import React from 'react'
import './AdminLogin.css'
import login from './Login.png'
import { Link } from "react-router-dom";
import { getDefaultNormalizer } from '@testing-library/react'
import axios from 'axios';
function validate(){
     var username= document.getElementById("login").value;
     var password= document.getElementById("password").value;
     var url="https://localhost:44384/api/AdminLogins/ValidateUser?username="+username+"&password="+password;
     axios.get(url).
     then(response=>{
         if(response.data=="success")
         {
            // return null;
            window.location.href="#/AdminDetails";
         }
         else{
             return null;
         }
     })
}

function AdminLogin() {
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

                        <Link to='/Home'>
                        <li><span class="home-nav adjust">Home</span></li>
                        </Link>
                        </ul>
                          
                    </div>
                  
                </div>
                
            </nav>
        </div>
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <div className="fadeIn first">
                    <img src={login} id="icon" alt="User Icon" />
                </div>


                <form>
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="Username" />
                    
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="Password" />
                    <Link to='/AdminDetails'>
                    <input type="submit" className="fadeIn fourth" value="Log In" 
                        onClick={()=>validate()}
                    />
                    
                    </Link>
                    
                </form>


                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div>

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
 export default AdminLogin