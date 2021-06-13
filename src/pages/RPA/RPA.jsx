import React from "react";
import Menu from "../../components/Menu";
import arrow from "../../images/Arrow.svg"
import white from "../../images/logo-white.png"
import rpaImg from "../../images/RPA.png"
import { Link} from "react-router-dom"; //import the package
import ScrollToTop from "../../ScrollToTop";
import ServiceHead from "../../components/ServiceHead";


function RPA() {
  return (
    <div className="services">
      <div className="service-top-container">
      <Menu logo={white} col={"#fff"} padd={"60px"}  bcol={"#fff"}/>
        </div>
        <ServiceHead 
          tOne="Robotic Process" 
          tTwo="Automation" 
          paraOne="Automate processes, move data, and keep your software tools working in harmony. Create workflows that do busywork for you—so you can get more done. Use your old utilities like Gmail/ Slack/ CRM and integrate with Zapier." 
          paraTwo="Eliminate manual, repetitive tasks by connecting the apps your small business relies on — so you can do more with less work."
        />
        <div className="service-bottom">
          <div className="row setting">
            <div className="col-lg-6">
              <img src={rpaImg} alt="" />
            </div>
            <div className="col-lg-6">
              <p className="service-header-para-rpa">We make the impossible through technology possible to make your digital transformation meaningful and valuable.</p>
              <p className="service-header-para-rpa-two" style={{textAlign: 'left'}}>We help to provide hassle-free automatic software updates enabling uninterrupted services.</p>
            </div>
          </div>
        </div>
        <div className="block">
        <ScrollToTop />
        <Link to="/cloud-services" style={{color:"none", textDecoration:"none"}}><div className="hovicon effect-8 animate__animated animate__pulse animate__infinite" /></Link>
          <img src={arrow} alt="" />
        </div>
      </div>

  );
}

export default RPA;