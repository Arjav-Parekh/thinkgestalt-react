import React from "react";
import ContactImg from "../../images/contact1.png"

function Contact(){
    return (
<div className="contact-container">
        <p style={{fontWeight: 300, fontStyle: 'italic', fontSize: '64px'}}><em style={{fontWeight: 600, fontSize: '64px', fontStyle: 'normal'}}>Let’s talk.</em> Just enter your details and we will reply within 24 hours</p>
        <div className="container-heading-text-two contact-text-media">
          <span style={{fontWeight: 300, fontStyle: 'italic'}}>Join</span><br /><span style={{fontWeight: 600}}>Our Team</span>
        </div>
        <div className="row setting" style={{marginTop: '20px'}}>
          <div className="col-lg-6 img-col-lg">
            <img src={ContactImg} alt="" />

          </div>
          <div className="col-lg-6" style={{padding: 0}}>
            <div className="form-container">
              <form action>
                <input type="text" name="name" placeholder="Name*" style={{marginRight: '20px'}} />
          
                <input type="text" name="phone" placeholder="Phone Number*" style={{marginLeft: 'auto'}} className="phone-input" />
                <br /><br />
                <input type="text" name="email" placeholder="Email*" style={{width: '96%'}} />
                <br /><br /><br /><br />
                <label htmlFor style={{paddingLeft: '8px'}}>How Can We Help You?</label>
                <textarea name id style={{width: '96%', height: '110px', padding: '7px', marginTop: '10px'}} defaultValue={""} />
                <button type="submit" className="contact-submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );

}

export default Contact;