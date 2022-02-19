import React from 'react'
import './style.css'
//import register from './Register.jfif'
//import moduleName from 'module'
import firebase from '../firebase'
import { Link } from "react-router-dom";

class App extends React.Component {
    handleChange = (e) =>{
      const {name, value } = e.target
      this.setState({
          [name]: value
        })
    }
    configureCaptcha = () =>{
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.onSignInSubmit();
          console.log("Recaptca varified")
        },
        defaultCountry: "IN"
      });
    }
    onSignInSubmit = (e) => {
        e.preventDefault()
        this.configureCaptcha()
        const phoneNumber = "+91" + this.state.mobile
        console.log(phoneNumber)
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;
              console.log("OTP has been sent")
              alert("OTP Sent")
              // ...
            }).catch((error) => {
              // Error; SMS not sent
              // ...
              console.log("SMS not sent")
            });
      }
    onSubmitOTP = (e) =>{
      e.preventDefault()
      const code = this.state.otp
      console.log(code)
      window.confirmationResult.confirm(code).then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user))
        alert("User is verified")
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        //alert("Wrong OTP")
        console.log("Wrong OTP")
        
      });
    }
    render() {
    return (    
     
//<img class="card_image" src="/background_vaccine.jpg" alt=""/>    
       // <div className="bgnew" >
        //<div style={{backgroundimage:'url("https://image.shutterstock.com/image-illustration/coronavirus-background-seamless-pattern-covid19-260nw-1681982287.jpg")'}}>
    
      <div>      
        <div>
          <nav className="navbar navbar-expand-sm bg-info navbar-dark">
              <div className="container-fluid">
                  <a href="#"> <img class="card_image" src="/covid-19-vaccine-image.png" alt=""/> </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div id="navbarSupportedContent">
                      <ul className="navbar-nav ml ">
                          
                      <Link to='/Home'>
                              <li><span class="home-nav">Home</span></li></Link>
                              <Link to='/registration'>
                              <li><span>Register</span></li>
                          </Link>
                          
                          
                      </ul>
                      
                  </div>
              </div>
          </nav>
      </div>
        
        <div className="wrapper fadeInDown" >
            <div id="formContent">
                <br></br>
                

                <div className="fadeIn first"  >
                    <img class="card_image" src="/vaccine_registration.png" alt=""/>
                </div>
                <br>
                </br>
              


                <form onSubmit = {this.onSignInSubmit}>
                    <div class="container">
                        <div class="row g-2">
                            <div class="col-12">
                            <div id="sign-in-button"></div>
                                <input type="text" id="login" className="fadeIn second" name="mobile" placeholder="Enter Mobile Number" required onChange={this.handleChange}/>
                                
                            </div><br></br>
                            
                            <button class="button" type="Otp">Get OTP</button>
                            </div>
                            </div>
                            </form>
                            <form onSubmit = {this.onSubmitOTP}>
                    <div class="container">
                        <div class="row g-2">
                            <div class="col-12">
                                
                                <input type="text" id="login" className="fadeIn second" name="otp" placeholder="Enter Code" required onChange={this.handleChange} />
                                
                            </div><br>
                            </br>
                           
                        </div>
                    
                    <br></br>
                    <Link to='/PatientDetails'>
                    <input type="submit" class= "Verify" className="fadeIn third" value="Verify" />
                    </Link>
                    </div>

                </form>

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
}



export default App