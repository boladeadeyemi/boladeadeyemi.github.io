import React from 'react'
import './Signup.css'
import image from '../../assets/logo.png'
import circle5 from '../../assets/ring.png'
import register from '../../assets/register.png'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="signup">
    <div className="container__signuppage">
    <div className="left__signuppage">
        <Link to = '/'><img src={image} alt="tekstor logo"/></Link>
     </div>
    <div className="center__signuppage">
    <div className="pages__signuppage">
        GADGETS
    </div>
    <div className="pages__signuppage">
        VIDEOS
    </div>
    <div className="pages__signuppage">
        BOOKS
    </div>
    <div className="pages__signuppage">
        AUDIO
    </div>
     </div>
     <div className="lefthand__signuppage">
    <div className="login__signuppage">
        <Link to = '/login'> LOGIN</Link>
    </div>

    </div>
    <div className="righthand__signuppage">
    <div className="signup__signuppage">
        <Link to = '/signup'>SIGN UP</Link>
    </div>
    </div>
    </div>
   
    <div className="ring5__signup">
        <img src={circle5} alt="ring" />
    </div>
    <div className="signup__word">
    <h1>SIGNUP</h1>
    </div>
    
    
    
    <div><div className='register'>
        <div className="registerContainer">
            <div className="leftRegisterContainer">
                <p>Sign up to begin shopping</p>
                <img src={register} alt="" />
            </div>
            <div className="rightRegisterContainer">
                <form>
                    <input type="text" placeholder='Name'/>
                    <input type="email" placeholder='Email'/>
                    <input type="text" placeholder='Username'/>
                    <input type="password" placeholder='Password'/>
                </form>
                <Link to = '/login'><button className='button__signup'>SIGN UP</button></Link>
                <p>Already have an account? <span>Login</span></p>
            </div>
        </div>
    </div></div>
</div>
  )
}

export default Signup