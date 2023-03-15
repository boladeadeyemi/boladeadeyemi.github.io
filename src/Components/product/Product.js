import React from 'react'
import image from '../../assets/logo.png'
import './Product.css'
import cartimage from '../../assets/cart.png'
import maleavatar from '../../assets/male-avatar.png'
import searchIcon from '../../assets/search-icon.png'
import image1 from '../../assets/laptop.png'
import laptop from '../../assets/laptop1.png'
import keyboard from '../../assets/keyboard.png'
import router from '../../assets/router.png'
import jspix from '../../assets/jspix.png'
import pypix from '../../assets/pypix.png'
import reactpix from '../../assets/reactpix.png'
import { Link } from 'react-router-dom'

function Product() {
  return (
    <div className="product">
            <div className="bg1__productpage">
            </div>
            <div className="container__productpage">
            <div className="left__productpage">
               <Link to = '/'><img src={image} alt="tekstor logo" /></Link>
             </div>
            <div className="center__productpage">
            <div className="pages__productpage">
                GADGETS
            </div>
            <div className="pages__productpage">
                VIDEOS
            </div>
            <div className="pages__productpage">
                BOOKS
            </div>
            <div className="pages__productpage">
                AUDIO
            </div>
             </div>
             <div className="lefthand__productpage">
            <div className="cart__productpage">
                <Link to = '/review'><img src={cartimage} alt="" /></Link>
            </div>

            </div>
            <div className="righthand__productpage">
            <div className="maleavatar__productpage">
                <img src={maleavatar} alt="" />
            </div>
            </div>
            </div>
            <div className="searchinput__productpage">
                <input type="text" className="homesearch__productpage" />
                <img src={searchIcon} alt="" /> 
            </div>



            <div><div className="item__productpage">
        <p className="title">ITEM DETAILS</p>
            <div className= "itemouter__productpage">
                <div className="leftDiv__productpage">
                        <img src={image1} alt="selectedPix" />
                </div>
                    <div className="rightDiv__productpage">
                            <div className="textDiv__productpage">
                            <p>HP FOLIO 2023 </p> <span>$800</span>
                            </div>
                            <div className="itemDes__productpage"><p>Ultra slim HP FOLIO, with 8 hrs backup, <br/> Keypad light, 8gb RAM, 500 SSD.</p>
                            </div>
                        
                            <div className="D32__productpage"><h3 >32 sold</h3></div>
                            <div className="buttons__productpage">
                                <button className="btn1__productpage">ADD TO CART</button>
                                <button className="btn2__productpage">BUY NOW</button>
                            </div>
                    </div>
                </div>
        </div>
        </div>


        
        
    <div>
    <div className="similarItems1__productpage">
      <h1>TRENDING GADGETS</h1>
      <div className="similarItemsContainer__productpage">
        <img src={laptop} alt="" />
        <div className="similarItemsDescription__productpage">
          <h4>HP FOLIO 2023</h4>
          <p>
            Ultra slim HP FOLIO, with 8 hrs backup, Keypad light, 8gb RAM, 500
            SSD.
          </p>
          <div className="addToCart__productpage">
            <h4>$800</h4>
            <button>ADD TO CHART</button>
          </div>
        </div>
      </div>

      <div className="similarItemsContainer__productpage">
        <img src={keyboard} alt="" />
        <div className="similarItemsDescription__productpage">
          <h4>WIRELESS KIT</h4>
          <p>
            Broad collection of all the accesories you need for better coding
            and design.
          </p>
          <div className="addToCart__productpage">
            <h4>$90</h4>
            <button>ADD TO CHART</button>
          </div>
        </div>
      </div>

      <div className="similarItemsContainer__productpage">
        <img src={router} alt="" />
        <div className="similarItemsDescription__productpage">
          <h4>5GWIRELESS ROUTER</h4>
          <p>
            Best internet soliution with broad band width and maximum
            connectivity
          </p>
          <div className="addToCart__productpage">
            <h4>$30</h4>
            <button>ADD TO CHART</button>
          </div>
        </div>
      </div>
    </div>
    </div>





    <div><div className="coursetrending__productpage">
       <h1>TRENDING COURSES</h1>
      <div className="coursetrendingContainer__productpage"> 
        <img src={jspix} alt="" />
        <div className="coursetrendingDescription__productpage">
          <h4>JAVASCRIPT FOR BEGINNERS</h4>
          <p>
            Learn javascript with ABC approach <br></br> Learn from scratch - 16 Hours
          </p>
          <div className="addToCart2__productpage">
            <h4>$60</h4>
            <button>ADD TO CHART</button>
          </div>
        </div>
      </div>

      <div className="coursetrendingContainer__productpage">
        <img src={pypix} alt="" />
        <div className="coursetrendingDescription__productpage">
          <h4>LEARN PYTHON FROM SCRATCH</h4>
          <p>
           Learn python without any prior <br></br> knowledge - 8 Hours
          </p>
          <div className="addToCart2__productpage">
            <h4>$40</h4>
            <button>ADD TO CHART</button>
          </div>
        </div>
      </div>

      <div className="coursetrendingContainer__productpage">
        <img src={reactpix} alt="" />
        <div className="coursetrendingDescription__productpage">
          <h4>COMPLETE REACT COURSE</h4>
          <p>
            Modern React Web Development <br></br> Full Course -12 Hours
          </p>
          <div className="addToCart2__productpage">
            <h4>$70</h4>
            <button>ADD TO CHART</button>
          </div>
        </div>
      </div>
    </div></div>


    </div>
  )
}

export default Product