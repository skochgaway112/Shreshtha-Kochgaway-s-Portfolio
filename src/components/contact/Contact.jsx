import "./contact.css";
import Phone from"../../img/Phone.png";
import Email from"../../img/Email.png";
import Address from"../../img/Address.png";
import {useRef} from "react";
//import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e)=>{
    e.preventDefault();
    
  }

  

    return(
          <div className="c">
          <div className="c-bg"></div>
          <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        
                        <img src={Phone} alt="" className="c-icon"/>
                        +91-9971118692

                    </div>
                    <div className="c-info-item">
                        <img className="c-icon" src={Email} alt=""/>
                        skochgaway112@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img className="c-icon" src={Address} alt=""/>
                        Greater Noida West, Uttar Pradesh
                    </div>
                </div>
            </div>
          <div className="c-right"> 
          <p className="c-desc">
            
            <b>What's your story?</b> Get in touch. Always interested in the problem solving and amazing/creative projects.
          
          </p>
          
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user-name"/>
            <input type="text" placeholder="Subject" name="user-subject"/>
            <input type="text" placeholder="Email" name="user-email"/>
            <textarea rows="5" placeholder="Message" name="message"/>
            <button>Submit</button>
          </form>
          </div>

                  </div>
          </div>
    )
}

export default Contact