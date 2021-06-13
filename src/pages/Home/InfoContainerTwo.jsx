import React from "react";
import SecondImg from "../../images/image2.png"

function InfoContainerTwo(){
    return (
        <div className="info-container-two">
        <div className="container-heading-text-two" data-aos="fade-up" data-aos-delay={100} data-aos-duration={800}>
          <span style={{fontWeight: 600}}>What We</span> <span style={{fontWeight: 300, fontStyle: 'italic'}}>Do</span>
        </div>
        <div className="row setting">
          <div className="col-lg-6  img-col-lg">
            <img src={SecondImg} alt="" className="image2pad" />
          </div>
          <div className="col-lg-6 dt2" data-aos="fade-left" data-aos-delay={100} data-aos-duration={800}>
            <h4 className="description-text-two">Concept Studio is a strategically driven, digital-first agency that lives at the intersection of creativity and technology. At Think Gestalt, we understand your business needs and customize designs to suit your business. The strategy, the art and the creative thinking we plan and do enables us to shape and maintain the best web standards and create world-class web design.</h4>
          </div>
        </div>
      </div>
    );

}

export default InfoContainerTwo;