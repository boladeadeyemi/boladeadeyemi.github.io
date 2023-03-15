import React from 'react'
import image from '../../assets/logo.png'
import circle from '../../assets/ring.png'
import './Home.css'
import cartimage from '../../assets/cart.png'
import maleavatar from '../../assets/male-avatar.png'
import searchIcon from '../../assets/search-icon.png'
import image4 from "../../assets/mg.png"
import image1 from "../../assets/Mask group (1).png"
import image2 from "../../assets/Mask group (2).png"
import image3 from "../../assets/Mask group (3).png"
import laptop from '../../assets/laptop1.png'
import keyboard from '../../assets/keyboard.png'
import router from '../../assets/router.png'
import jspix from '../../assets/jspix.png'
import pypix from '../../assets/pypix.png'
import reactpix from '../../assets/reactpix.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Home">
            <div className="bg1">
            </div>
            <div className="container__homepage">
            <div className="left__homepage">
               <Link to = '/'><img src={image} alt="tekstor logo" /></Link>
             </div>
            <div className="center__homepage">
            <div className="pages__homepage">
                GADGETS
            </div>
            <div className="pages__homepage">
                VIDEOS
            </div>
            <div className="pages__homepage">
                BOOKS
            </div>
            <div className="pages__homepage">
                AUDIO
            </div>
             </div>
             <div className="lefthand__homepage">
            <div className="cart__homepage">
                <Link to = '/review'><img src={cartimage} alt="" /></Link>
            </div>

            </div>
            <div className="righthand__homepage">
            <div className="maleavatar__homepage">
                <img src={maleavatar} alt="" />
            </div>
            </div>
            </div>
            <div className="ring__homepage">
                <img src={circle} alt="ring" />
            </div>
            <div className="find__homepage">
            <h1>FIND ANY TECH <br></br> RESOURCES EASILY!</h1>
            </div>
            <div className="searchinput__homepage">
                <input type="text" className="home__search" />
                <img src={searchIcon} alt="searchIcon" /> 
            </div>
            <div className="cards__homepage"><div> <p className="title__homepage">FIND BY CATEGORY</p>
        <div className="mainDiv__homepage">
            <div>
                <div>
                    <div className="innerDiv__homepage">
                        <img src={image4} alt = 'alllt' /> 
                        <div className="innerInner__homepage">
                            <h1 className="textUp">VIDEO</h1>
                            <h1 className="textDown">COURSES</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="innerDiv__homepage">
                        <img src={image1} alt = 'alllt' /> 
                        <div className="innerInner__homepage">
                            <h1 className="textUp">E BOOK</h1>
                            <h1 className="textDown">COURSES</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="innerDiv__homepage">
                        <img src={image2} alt = 'alllt' /> 
                        <div className="innerInner__homepage">
                            <h1 className="textUp">AUDIO</h1>
                            <h1 className="textDown">COURSES</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="innerDiv__homepage">
                        <img src={image3} alt = 'alllt' /> 
                        <div className="innerInner__homepage">
                            <h1 className="textUp">TECH</h1>
                            <h1 className="textDown">GADGETS</h1>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
     <div>
        
        
    <div className="similarItems__homepage">
      <h1>TRENDING GADGETS</h1>
      <div className="similarItemsContainer__homepage">
        <img src={laptop} alt="" />
        <div className="similarItemsDescription__homepage">
          <h4>HP FOLIO 2023</h4>
          <p>
            Ultra slim HP FOLIO, with 8 hrs backup, Keypad light, 8gb RAM, 500
            SSD.
          </p>
          <div className="addToCart__homepage">
            <h4>$800</h4>
            <button>ADD TO CHART</button>
          </div>
        </div>
      </div>

      <div className="similarItemsContainer__homepage">
        <img src={keyboard} alt="" />
        <div className="similarItemsDescription__homepage">
          <h4>WIRELESS KIT</h4>
          <p>
            Broad collection of all the accesories you need for better coding
            and design.
          </p>
          <div className="addToCart__homepage">
            <h4>$90</h4>
            <button>ADD TO CHART</button>
          </div>
        </div>
      </div>

      <div className="similarItemsContainer__homepage">
        <img src={router} alt="" />
        <div className="similarItemsDescription__homepage">
          <h4>5GWIRELESS ROUTER</h4>
          <p>
            Best internet soliution with broad band width and maximum
            connectivity
          </p>
          <div className="addToCart__homepage">
            <h4>$30</h4>
            <button>ADD TO CHART</button>
          </div>
        </div>
      </div>
    </div></div>


    <div><div className="coursetrending__homepage">
       <h1>TRENDING COURSES</h1>
      <div className="coursetrendingContainer__homepage"> 
        <img src={jspix} alt="" />
        <div className="coursetrendingDescription__homepage">
          <h4>JAVASCRIPT FOR BEGINNERS</h4>
          <p>
            Learn javascript with ABC approach <br></br> Learn from scratch - 16 Hours
          </p>
          <div className="addToCart2__homepage">
            <h4>$60</h4>
            <button>ADD TO CHART</button>
          </div>
        </div>
      </div>

      <div className="coursetrendingContainer__homepage">
        <img src={pypix} alt="" />
        <div className="coursetrendingDescription__homepage">
          <h4>LEARN PYTHON FROM SCRATCH</h4>
          <p>
           Learn python without any prior <br></br> knowledge - 8 Hours
          </p>
          <div className="addToCart2__homepage">
            <h4>$40</h4>
            <button>ADD TO CHART</button>
          </div>
        </div>
      </div>

      <div className="coursetrendingContainer__homepage">
        <img src={reactpix} alt="" />
        <div className="coursetrendingDescription__homepage">
          <h4>COMPLETE REACT COURSE</h4>
          <p>
            Modern React Web Development <br></br> Full Course -12 Hours
          </p>
          <div className="addToCart2__homepage">
            <h4>$70</h4>
            <button>ADD TO CHART</button>
          </div>
        </div>
      </div>
    </div></div>
    </div>
  )
}

export default Home