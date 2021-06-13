import React from "react";
import Menu from "../../components/Menu";
import arrow from "../../images/Arrow.svg"
import white from "../../images/logo-white.png"
import csImg from "../../images/cybersecurity.png"
import {Link} from "react-router-dom"; //import the package
import ScrollToTop from "../../ScrollToTop";
import ServiceHead from "../../components/ServiceHead";


function CyberSecurity() {
  return (
    <div className="services">
      <div className="service-top-container">
      <Menu logo={white} col={"#fff"} padd={"60px"}  bcol={"#fff"}/>
        </div>
        <ServiceHead 
          tOne="Cyber" 
          tTwo="Security" 
          paraOne="Proactively identify threats to your digital infrastructure so you can minimise damage, reduce costs and financial losses, and prevent future attacks in an ever-evolving landscape. We’ll help you uncover and fix security issues before product launch." 
          paraTwo="Get an unbiased expert evaluation of your business processes, products and systems – according to industry security standards and regulations. "
        />
        <div className="service-bottom">
          <div className="row setting">
            <div className="col-lg-6 service-col-hide" >
            <p className="service-header-para-rpa" style={{paddingLeft:"30px"}}>We’ll guide you through a structured process to evaluate the risks associated with your operation.</p>
              <p className="service-header-para-rpa-two" style={{textAlign: 'left', paddingLeft:"30px"}}>Most importantly, our security team will help you identify the root of your risks, developing robust remediation plan.</p>
            </div>
            <div className="col-lg-6">
              <img src={csImg} alt="" />
              
            </div>
            <div className="col-lg-6 service-col-show">
            <p className="service-header-para-rpa" style={{paddingLeft:"30px"}}>We’ll guide you through a structured process to evaluate the risks associated with your operation.</p>
              <p className="service-header-para-rpa-two" style={{textAlign: 'left', paddingLeft:"30px"}}>Most importantly, our security team will help you identify the root of your risks, developing robust remediation plan.</p>
            </div>
          </div>
        </div>
        <div className="block" style={{marginRight:"50%"}}>
        <ScrollToTop />
        <Link to="/robotic-process-automation" style={{color:"none", textDecoration:"none"}}><div className="hovicon effect-8 animate__animated animate__pulse animate__infinite" /></Link>
          <img src={arrow} alt="" />
        </div>
      </div>

  );
}

export default CyberSecurity;