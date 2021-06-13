import React from "react";
import Menu from "../../components/Menu";
import arrow from "../../images/Arrow.svg"
import white from "../../images/logo-white.png"
import wdImg from "../../images/webdev.png"
import {Link} from "react-router-dom"; //import the package
import ScrollToTop from "../../ScrollToTop";
import ServiceHead from "../../components/ServiceHead";


function WebDev() {
  return (
    <div className="services">
      <div className="service-top-container">
        <Menu logo={white} col={"#fff"} padd={"60px"}  bcol={"#fff"}/>
       </div> 
       <ServiceHead 
          tOne="Website" 
          tTwo="Development" 
          paraOne="We are always ready to build awesome websites, web apps and solve client problems. We’ll take care of even the most complex projects, trust us! From smartphone to desktop, your site should look and function seamlessly." 
          paraTwo="Our web developers dedicate themselves to the highest quality engineering. The team delivers remarkable fully responsive websites that help you outdo your competition."
        />
        <div className="service-bottom">
          <img src={wdImg} alt="" style={{margin:"auto"}} />
          <p className="service-header-para">Strong and systematic web development supports your website’s design so that you have no technical glitches and no hassles in loading pages. Also providing maximum software feasibility and performance.</p>
          <p className="service-header-para-two" style={{textAlign: "left"}}> We are ready to advise, speed up projects, and solve your problems.</p>
        </div>
        <div className="block">
        <ScrollToTop />
        <Link to="/tailor-made-apps" style={{color:"none", textDecoration:"none"}}><div className="hovicon effect-8 animate__animated animate__pulse animate__infinite" /></Link>
          <img src={arrow} alt="" />
        </div>
      </div>
  );
}

export default WebDev;
