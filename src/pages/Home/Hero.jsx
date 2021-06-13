import React from "react";

import background from "../../images/Artwork.png"
import Menu from "../../components/Menu";
import black from "../../images/thinkgestalt.tech.png"
import mouse from "../../images/mouse.png"



function Hero(){
    return (
        <div className="top-container"  style={{ backgroundImage:`url(${background})` }} >
        <Menu logo={black} col={"#000"} padd={"210px"}  bcol={"#0A0A0A"}/>
        <div className="hero-text">
          <h2 className="animate__animated animate__flipInX">Is Your Enterprise</h2>
          <h1 className="animate__animated animate__flipInX">Future Ready?</h1>
        </div>
        <div style={{textAlign: 'center'}}>
          <img src={mouse} alt="" style={{paddingTop: '252px', margin: 'auto', display: 'block'}} />
          <i className="fas fa-long-arrow-alt-down" />
        </div>
      </div>
    );

}

export default Hero;