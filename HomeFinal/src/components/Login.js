import React from 'react'
import './Home.css'
import login from './Login.png'

export const Login = () => {
    return (

        <div className="wrapper fadeInDown">
            <div id="formContent">

                <div className="fadeIn first">
                    <img src={login} id="icon" alt="User Icon" />
                </div>


                <form>
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="Username" />
                    
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="Password" />
                    <input type="submit" className="fadeIn fourth" value="Log In" />
                    
                </form>


                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>
        </div>

    )
}
