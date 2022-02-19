import React from "react";
import {Link} from 'react-router-dom';
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";
import Slider from './Slider';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
//import { Link } from "react-router-dom";
import './Home.css'
//import './Header-home';
//import Logo from "../images/Health Logo.png";

function Home() {
  return (
    <>
    
    
      <div>
            <nav className="navbar navbar-expand-sm bg-info navbar-dark ">
               
                <div className="container-fluid">
                <Link to = '/'>
                    <a href="#"> <img class="card_image" src="/covid-19-vaccine-image.png" alt=""/> </a></Link>
                    <h1 className="title">C-Vaccine</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarSupportedContent">
                      <ul className="navbar-nav ml ">
                          
                              <Link to='/AdminLogin'>
                              <li><span class="home-nav">Admin</span></li>
                              </Link>
                              <Link to='/registration'>
                              <li><span>Register</span></li>
                          </Link>
                          
                          
                          
                      </ul>
                      
                  </div>
                  </div>
               
            </nav>
        </div>
        
      <Container>
        <div className="slots__check">
          <h2 class="Title"><b>Check Vaccination Center and Slots Availability</b></h2>
          <div>
            <span>Search by PIN</span>
            <span>Search by districts</span>
          </div>
          <form>
            <input className="formcontrol" type="text" />
            <img src="https://img.icons8.com/metro/452/search.png" alt=" " />
            <Link to="/Registration">
            <button type="submit">Search</button>
            </Link>
          </form>
        </div>
      </Container>
      <Container>
        
      </Container>
      
      
        
      <div className="footer">
      <div className="services">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="service">
                <img class="card_image" src="/service.png" alt=""/>
                <h4>Services</h4>
                <p>
                  Hospitalization<br></br>
                  Laboratary Services<br></br>
                  General Medical Services<br></br>
                </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="service">
                <img class="card_image" src="/support.png" alt=""/>
                <h4>Support</h4>
                <p>
                  Frequently Asked Questions<br></br>
                  Certificate Issue<br></br>
                  Contact us<br></br>
                </p>
              </div>
            </Col>

            <Col lg={4}>
              <div className="service">
                <img class="card_image" src="/help.png" alt=""/>
               <h1>Help</h1>
                <p>
                  HelpLine: +91 12 23548694<br></br>
                  Technical HelpLine: +91 12 23548695<br></br>
                  E-mail: cvaccine@gmail.com
                </p>
              </div>
            </Col>
          </Row>
        </Container>



            
                <p>Privacy Policy | Copyright</p>
            </div>
        </div>
      
   </>  
  );
}

export default Home;
