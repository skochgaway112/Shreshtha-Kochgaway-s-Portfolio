import Me from "../../img/Me.png";

import "./intro.css"
const Intro = () => {
return (
    <div className="i">
    <div className="i-left">
    <div className="i-left-wrapper">
    <h2 className="i-intro">Hello, my name is</h2>
    <h1 className="i-name">Shreshtha Kochgaway</h1>
    <div className="i-title">
        <div className="i-title-wrapper">
           
            <div className="i-title-item">
                Web Developer
            </div>
            <div className="i-title-item">
                Competitive Programmer
            </div>
            
        </div>
    </div>
    <p className="i-desc">
        I am a programmer with interest in Data Structures and algorithms and web pages and their development interest me. Love Problem solving
    </p>
   </div>
   </div>
    <div className="i-right"></div>
    <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img" />
    </div>
)
}

export default Intro