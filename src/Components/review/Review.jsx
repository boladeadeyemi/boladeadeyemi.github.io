import React from 'react'
import image1 from '../../assets/logo.png'
import circle7 from '../../assets/ring.png'
import cartimage2 from '../../assets/cart.png'
import maleavatar2 from '../../assets/male-avatar.png'
import './Review.css'
import image7 from '../../assets/laptop.png'
import image10 from '../../assets/keyboad1.jpg'
import image15 from '../../assets/router1.jpg'
import { Link } from 'react-router-dom'

function Review() {
  return (
    <div>
            <div className="bg1__reviewpage">                                                                           
            </div>
            <div className="container__reviewpage">
            <div className="left__reviewpage">
                <Link to = '/'><img src={image1} alt="tekstor logo" /></Link>
             </div>
            <div className="center__reviewpage">
            <div className="pages__reviewpage">
                GADGETS
            </div>
            <div className="pages__reviewpage">
                VIDEOS
            </div>
            <div className="pages__reviewpage">
                BOOKS
            </div>
            <div className="pages__reviewpage">
                AUDIO
            </div>
             </div>
             <div className="lefthand__reviewpage">
            <div className="cart__reviewpage">
                <img src={cartimage2} alt="" />
            </div>

            </div>
            <div className="righthand__reviewpage">
            <div className="maleavatar__reviewpage">
                <img src={maleavatar2} alt="" />
            </div>
            </div>
            </div>
            <div className="ring6__reviewpage">
                <img src={circle7} alt="ring" />
            </div>
            <div className="find__reviewpage">
            <h1>REVIEW ITEMS IN YOUR <br></br> CART</h1>
            </div>




            <div>
            <div className="Main__reviewpage">
          <div className="cart2__reviewpage">
                <div className= "cartouter__reviewpage">
                        <div className="leftDiv__reviewpage">
                                <img src={image7} alt="selectedPix" />  
                        </div>
                            <div className="rightDiv__reviewpage">
                                    <div className="textDiv__reviewpage">
                                    <p>HP FOLIO 2023 </p> <span>$800</span>
                                    </div>
                                    <div className="itemDes__reviewpage"><p>Ultra slim HP FOLIO, with 8 hrs backup, <br/> Keypad light, 8gb RAM, 500 SSD.</p>
                                    </div>
                                
                                    <div className="D32__reviewpage"><p>Qty -</p><span>1</span><h3 >32 sold</h3></div>
                                    <div className="buttons__reviewpage">
                                        <button className="btn1__reviewpage">REMOVE ITEM</button>
                                    </div>
                            </div>
                        </div>

                 <div className= "cartouter__reviewpage">
                        <div className="leftDiv__reviewpage">
                                <img src={image10} alt="selectedPix" />
                        </div>
                            <div className="rightDiv__reviewpage">
                                    <div className="textDiv__reviewpage">
                                    <p>WIRELESS KIT </p> <span>$90</span>
                                    </div>
                                    <div className="itemDes__reviewpage"><p>Broad collection of all the accessories you<br/> need for better coding and design.</p>
                                    </div>
                                
                                    <div className="D32__reviewpage"><p>Qty -</p><span>1</span><h3 >32 sold</h3></div>
                                    <div className="buttons__reviewpage">
                                        <button className="btn1__reviewpage">REMOVE ITEM</button>
                                    </div>
                            </div>
                        </div>

                <div className= "cartouter__reviewpage">
                        <div className="leftDiv__reviewpage">
                                <img src={image15} alt="selectedPix" />
                        </div>
                            <div className="rightDiv__reviewpage">
                                    <div className="textDiv__reviewpage">
                                    <p>5G WIRELESS ROUTER </p> <span>$800</span>
                                    </div>
                                    <div className="itemDes__reviewpage"><p>Best internet solution with broad <br/> band width and maximum connectivity </p>
                                    </div>
                                
                                    <div className="D32__reviewpage"><p>Qty -</p><span>1</span><h3 >32 sold</h3></div>
                                    <div className="buttons__reviewpage">
                                        <button className="btn1__reviewpage">REMOVE ITEM</button>
                                    </div>
                            </div>
                            
                        </div>
                        <div className="proceed__review">
                            <Link to = '/checkout'><button>PROCEED TO PAYMENT</button></Link></div>
            </div>

        
    </div>
    </div>
           
    </div>
  )
}

export default Review