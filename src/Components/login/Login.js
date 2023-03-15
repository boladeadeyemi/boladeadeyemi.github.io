import React from 'react'
import './Login.css'
import image from '../../assets/logo.png'
import circle4 from '../../assets/ring.png'
import LoginPix from '../../assets/login-picture.png'
import eyes from '../../assets/eye.png'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className="login">
            <div className="logincontainer__landingpage">
            <div className="loginleft__landingpage">
                <Link to = '/'><img src={image} alt="tekstor logo" /></Link>
             </div>
            <div className="logincenter__landingpage">
            <div className="loginpages__landingpage">
                GADGETS
            </div>
            <div className="loginpages__landingpage">
                VIDEOS
            </div>
            <div className="loginpages__landingpage">
                BOOKS
            </div>
            <div className="loginpages__landingpage">
                AUDIO
            </div>
             </div>
             <div className="loginlefthand__landingpage">
            <div className="login__landingpage">
                <Link to = "/login">LOGIN</Link>
            </div>

            </div>
            <div className="loginrighthand__landingpage">
            <div className="loginsignup__landingpage">
                <Link to ="/signup">SIGN UP</Link>
            </div>
            </div>
            </div>
           
            <div className="login__word">
            <h1>LOGIN</h1>
            </div>
            <div className="ring4__login">
                <img src={circle4} alt="ring" />
            </div>


            <div className="loginouter__box">
                <div className="loginpicture__box">
                    <Link to ='/Home'><img src={LoginPix} alt="login-design"/></Link>
                </div>
                <div className="login__box">
                    <div className="logincontinue"><p>Login to continue shopping</p></div>

                    <div className= "loginuser_name"><input type="text" placeholder="Username" /></div>
                    <div className="loginpass_word"><input type="password"  placeholder="Password" />
                    <div className="logineye"><img  src={eyes}alt="see password" /></div>
                    </div>
                    <div className="loginbutton"><Link to = '/Home'> <button>LOGIN</button></Link></div>
                    <div  className="loginforgot__password">
                    <p>Forgot password?</p> 
                    </div>
                    <div className="loginopen__account"><p>Don't have an account? <span>Sign Up</span></p></div>

                </div>
            </div>
            
    </div>
  )
}

export default Login