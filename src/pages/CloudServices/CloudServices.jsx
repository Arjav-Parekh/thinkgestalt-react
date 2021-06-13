import React from "react";
import Menu from "../../components/Menu";
import arrow from "../../images/Arrow.svg"
import white from "../../images/logo-white.png"
import cloudSImg from "../../images/cloudservices.png"
import {Link} from "react-router-dom"; //import the package
import ScrollToTop from "../../ScrollToTop";
import ServiceHead from "../../components/ServiceHead";

function CloudServices() {
  return (
    <div className="services">
      <div className="service-top-container">
        <Menu logo={white} col={"#fff"} padd={"60px"} bcol={"#fff"} />
       </div> 
       <ServiceHead 
          tOne="Cloud" 
          tTwo="Services" 
          paraOne="We will almost always suggest developing cloud-first because it's the safest place for your data and also scalable that makes it often the right choice." 
          paraTwo="We build the most valuable, safest solutions for our customers and have a significant amount of experience across all the major public cloud providers (AWS, Azure, and Google)."
        />
        <div className="service-bottom">
          <img src={cloudSImg} alt="" />
          <br/><br/><br/><br/>
          <p className="service-header-para">We do the heavy lifting so you can avoid the time and stress involved in finding the right solutions. No upselling. No cross-selling. Just the solutions you need that are the right fit for your business.</p>
        </div>
        <div className="block">
        <ScrollToTop />
        <Link to="/website-development" style={{color:"none", textDecoration:"none"}}><div className="hovicon effect-8 animate__animated animate__pulse animate__infinite" /></Link>
          <img src={arrow} alt="" />
        </div>
      </div>
  );
}

export default CloudServices;
