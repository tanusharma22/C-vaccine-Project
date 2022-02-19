import React from 'react'
import './SearchSlot.css'
import {Link} from 'react-router-dom';


function SearchSlot() {
    return (
        <div>
        <div>
<div className="footer">
    <p>Privacy Policy | Copyright | All Rights Reserved.</p>

</div>
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
                                <li><span class="home-nav">Home</span></li>
                                
                                <li><span>Logout</span></li>
                                </Link>
                            
                            
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
        <div style={{ marginLeft: 30 ,marginTop: 30}}>
            <h1>Book Slot for Vaccine</h1>
            <div className="row">
                <div className="col-lg-2" style={{ marginTop: 30 }}>
                    <a href="#">Search By PIN</a>


                </div>
                <div className="col-lg-2" style={{ marginTop: 30 }}>
                    <a href="#">Search By District</a>
                </div>
                <form>
                    <input className="formcontrol" type="text" />

                    <button type="submit">Search</button>
                </form>

                 <div className="container table-responsive py-5">
                     
                    <table className=" table table-bordered " style={{border: "1px solid rgb(0, 0, 0)" }}  >
                        <thead style={{ background: "black", color: "White" }}>
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

                                <td>Apollo</td>
                                <td>24/10/2021<br></br>
                                    <button type="submit">Book</button></td>
                                <td>25/10/2021<br></br>
                                    <button type="submit">Book</button></td>
                                <td>26/10/2021<br></br>
                                    <button type="submit">Book</button></td>
                                <td>27/10/2021<br></br>
                                    <button type="submit">Book</button></td>
                            </tr>
                            <tr>
                                <td>Narayana Health Centre</td>
                                <td>24/10/2021<br></br>
                                    <button type="submit">Book</button></td>
                                <td>25/10/2021<br></br>
                                    <button type="submit">Book</button></td>
                                <td>26/10/2021<br></br>
                                    <button type="submit">Book</button></td>
                                <td>27/10/2021<br></br>
                                    <button type="submit">Book</button></td>
                            </tr>
                            <tr>
                                <td>Daya Health Centre</td>
                                <td>24/10/2021<br></br>
                                    <button type="submit">Book</button></td>
                                <td>25/10/2021<br></br>
                                    <button type="submit">Book</button></td>
                                <td>26/10/2021<br></br>
                                    <button type="submit">Book</button></td>
                                <td>27/10/2021<br></br>
                                    <button type="submit">Book</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </div>

</div>
</div>


    )
}
export default SearchSlot
