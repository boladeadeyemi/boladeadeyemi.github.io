import React from 'react'
import image from '../../assets/logo.png'
import './Checkout.css'
import cartimage from '../../assets/cart.png'
import maleavatar from '../../assets/male-avatar.png'
import circle from '../../assets/ring.png'
import paystack from '../../assets/Paystack_Logo.png'
import { Link } from 'react-router-dom'

function Checkout() {
  return (
    <div className="checkout__outercontainer">
        <div className="bg1__checkout">
        </div>
            <div className="container__checkout">
            <div className="left__checkout">
                <Link to = '/'><img src={image} alt="tekstor logo" /></Link>
            </div>
            <div className="center__checkout">
            <div className="pages__checkout">
                GADGETS
            </div>
            <div className="pages__checkout">
                VIDEOS
            </div>
            <div className="pages__checkout">
                BOOKS
            </div>
            <div className="pages__checkout">
                AUDIO
            </div>
            </div>
            <div className="lefthand__checkout">
            <div className="cart__checkout">
                <Link to = '/product'><img src={cartimage} alt="" /></Link>
            </div>

            </div>
            <div className="righthand__checkout">
            <div className="maleavatar__checkout">
                <img src={maleavatar} alt="" />
            </div>
            </div>

        </div>
        <div className="ring__checkout">
                <img src={circle} alt="ring" />
            </div>
            <div className="checkout__word">
            <h1>CHECKOUT YOUR <br></br>ITEMS!</h1>
            </div>





            <div>
                <div className="checkoutContainer">
            <div className="rightCheckoutContainer">
                <p>Hey John</p>
                <h4 className='paymentDetails'>You are about to pay the 
                    sum of 375,000 naira only, for the following:</h4>

                    <div className="subRightCheckoutContainer">
                        <ul>
                            <li>HP FOLIO 2023 <span>240,000</span></li>
                            <li>PREMIUM WIRELESS KIT <span>115,000</span></li>
                            <li>5G WIRELESS <span>20,000</span></li>
                        </ul>

                        <p>TOTAL <span>375,000</span></p>
                    </div>
            </div>
            <div className="leftCheckoutContainer">
                <img src={paystack} alt="" />
                <button className="proceed__checkout">Proceed</button>
                <p>or click to <Link to = '/review'><span>go back</span></Link></p>
            </div>
        </div></div>
</div>
    
  )
}

export default Checkout