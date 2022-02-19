import React from 'react'
import './AdminDetails.css'
import { Link } from "react-router-dom";

function AdminDetails() {

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
                                <li><span class="home-nav">Home</span></li></Link>
                                
                                <li><span>Logout</span></li>
                            
                            
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
        <div style={{ marginLeft: 30  }}>
            <h1>Slots for Vaccine</h1>
            <div className="row">
                <div className="col-lg-2">
                    <a href="#">Search By PIN</a>


                </div>
                <div className="col-lg-2">
                    <a href="#">Search By District</a>
                </div>
                <form id="pinsearch">
                    <input className="formcontrol" type="text" />

                    <button type="submit" >Search</button>
                </form>
                <div className="container table-responsive py-5">
                <h4>Slot Result: </h4>  <span> </span> 
                
                    
                    <button type="submit" id="sr" class="btn btn-primary">Vaccine Name1</button><span>  </span>
                    <button type="submit" id="sr" class="btn btn-primary">Vaccine Name2</button>

                
                    <table className="table table-bordered table-hover">
                        <thead style={{ marginBottom: 90,marginRight: 30,background: "black", color: "White" }}>
                            <tr>

                                <th scope="col">Hospital Name</th>
                                <th scope="col">Date</th>
                                <th scope="col">Date</th>
                                <th scope="col">Date</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>Apollo<br></br>
                                    <button type="submit" class="btn btn-primary">Edit</button><span> </span>
                                    <button type="submit" class="btn btn-primary">Delete</button>
                                </td>
                                <td>24/08/2021
                                    </td>
                                <td>25/08/2021
                                    </td>
                                    <td>26/08/2021
                                    </td>
                                    <td>27/08/2021
                                    </td>
                            </tr>
                            <tr>
                                <td>Narayana Health Centre<br></br>
                                <button type="submit" class="btn btn-primary">Edit</button><span> </span>
                                <button type="submit" class="btn btn-primary">Delete</button>
                                </td>
                                <td>24/08/2021
                                    </td>
                                <td>25/08/2021
                                    </td>
                                    <td>26/08/2021
                                    </td>
                                    <td>27/08/2021
                                    </td>
                            </tr>
                            <tr>
                                <td>Daya Health Centre<br></br>
                                <button type="submit" class="btn btn-primary">Edit</button><span> </span>
                                <button type="submit" class="btn btn-primary">Delete</button>

                                </td>
                                <td>24/08/2021
                                    </td>
                                <td>25/08/2021
                                    </td>
                                    <td>26/08/2021
                                    </td>
                                    <td>27/08/2021
                                    </td>
                            </tr>



                        </tbody>
                    </table>
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
export default AdminDetails
