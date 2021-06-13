import React from "react";
import FirstImg from "../../images/image1.png" 


function InfoContainerOne(){
    return (
        <div className="info-container-one">
        <div className="row setting">
          <div className="col-lg-6 container-heading-text-one">
            <div data-aos="fade-right" data-aos-delay={100} data-aos-duration={800}>
              <span style={{fontWeight: 600}}>We</span> <span style={{fontWeight: 300, fontStyle: 'italic'}}>Are</span> <span style={{fontWeight: 300}}>think</span><br /><span style={{fontWeight: 600}}>gestalt</span>
            </div>
            <h4 className="description-text" data-aos="fade-right" data-aos-delay={100} data-aos-duration={800}>We're a group of designers and developers who treats our own company as a product. How we work today is the result of a decade of iterations on our processes and tools. We work in small teams, using the latest tools to create a transparent and collaborative space.</h4>
          </div>
          <div className="col-lg-6 img-col-lg">
            <img src={FirstImg} alt="" />
          </div>
        </div>
      </div>
    );

}

export default InfoContainerOne;