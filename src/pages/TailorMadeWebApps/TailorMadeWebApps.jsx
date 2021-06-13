import React from "react";
import Menu from "../../components/Menu";
import arrow from "../../images/Arrow.svg"
import white from "../../images/logo-white.png"
import tailorImg from "../../images/tailor-made.png"
import {Link} from "react-router-dom"; //import the package
import ScrollToTop from "../../ScrollToTop";
import ServiceHead from "../../components/ServiceHead";


function TailorMadeWebApps() {
  return (
    <div className="services">
      <div className="service-top-container">
        <Menu logo={white} col={"#fff"} padd={"60px"}  bcol={"#fff"}/>
       </div> 
        <ServiceHead 
          tOne="Tailor-Made" 
          tTwo="Web Apps" 
          paraOne="We listen to your ideas and create custom software solutions from the ground up, designed especially for your business. Our company is an expert in developing different kinds of web applications to meet various goals." 
          paraTwo="Including high-performing progressive web apps (PWA), SaaS applications with scalable architecture, and dynamic single-page apps (SPA)."
        />
        <div className="service-bottom">
          <img src={tailorImg} alt="" />
          <p className="service-header-para">We help assuring the development of your custom module as per your requirements and to make the workflow easy with different practices.</p>
        </div>
        <div className="block">
        <ScrollToTop />
        <Link to="/data-science" style={{textDecoration:"none"}}><div className="hovicon effect-8 animate__animated animate__pulse animate__infinite" /></Link>
          
          <img src={arrow} alt="" />
        </div>
      </div>
  );
}

export default TailorMadeWebApps;
