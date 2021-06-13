import React from "react";
import Menu from "../../components/Menu";
import arrow from "../../images/Arrow.svg"
import white from "../../images/logo-white.png"
import dsImg from "../../images/datascience.png"
import { Link} from "react-router-dom"; //import the package
import ScrollToTop from "../../ScrollToTop";
import ServiceHead from "../../components/ServiceHead";


function DataScience() {
  return (
    <div className="services">
      <div className="service-top-container">
        <Menu logo={white} col={"#fff"} padd={"60px"}  bcol={"#fff"}/>
       </div> 
       <ServiceHead 
          tOne="Data" 
          tTwo="Science" 
          paraOne="Consumers are changing the way they buy. We’re changing the way you think. We give brands the fastest insight into what consumers buy and why. Establishing Data-driven strategy across organization to improve performance, reduce risks, and plan for what’s next. Data can make what is impossible today, possible tomorrow." 
          paraTwo="We provide strategic communications, and data-driven insights to improve customer experience and revenue growth. We help tech companies scale engineering capacity and deliver great software"
        />
        <div className="service-bottom">
          <img src={dsImg} alt="" />
          <p className="service-header-para">We help assuring the development of your custom module as per your requirements and to make the workflow easy with different practices.</p>
          <p className="service-header-para-two" style={{textAlign: "left"}}> We help tech companies scale engineering capacity and deliver great software</p>
        </div>
        <div className="block">
        <ScrollToTop />
        <Link to="/cyber-security" style={{color:"none", textDecoration:"none"}}><div className="hovicon effect-8 animate__animated animate__pulse animate__infinite" /></Link> 
          
          <img src={arrow} alt="" />
        </div>
      </div>
  );
}

export default DataScience;
