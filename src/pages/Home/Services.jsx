import React from "react";
import ServiceImg from "../../images/image3.png"
import ResponsiveServiceImg from "../../images/home-service.png"
import ServiceLogo1 from "../../images/service1.svg"
import ServiceLogo2 from "../../images/service2.svg"
import ServiceLogo3 from "../../images/service3.svg"
import ServiceLogo4 from "../../images/service4.svg"
import ServiceLogo5 from "../../images/service5.svg"
import ServiceLogo6 from "../../images/service6.svg"


function Services(){
    return (
        <div className="services-container">
                <div className="container-heading-text-two" data-aos="fade-up" data-aos-delay={100} data-aos-duration={800}>
                <span style={{fontWeight: 300, fontStyle: 'italic'}}>Our</span> <span style={{fontWeight: 600}}>Services</span>
                </div>
                <h4 className="description-text-three" data-aos="fade-up" data-aos-delay={100} data-aos-duration={800}>Stitching tech stacks to come up with a comprehensive solution that transforms your business.</h4>
                <div className="row setting our-service-items">
                <div className="col-lg-6 services-image-hide">
                    <img src={ResponsiveServiceImg} alt="" style={{margin: 'auto', display: 'block'}} />
                </div>
                <div className="col-lg-6">
                    <div className="service-individual" data-aos="fade-left" data-aos-delay={100} data-aos-duration={800}>
                    <img src={ServiceLogo1} alt="" /> <span className="service-indi-text">Tailor-made web apps</span> <span className="service-indi-text-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam nunc, amet massa auctor.</span>
                    </div>
                    <div className="service-individual" data-aos="fade-left" data-aos-delay={100} data-aos-duration={800}>
                    <img src={ServiceLogo2} alt="" /> <span className="service-indi-text">Data Science</span> <span className="service-indi-text-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam nunc, amet massa auctor.</span>
                    </div>
                    <div className="service-individual" data-aos="fade-left" data-aos-delay={100} data-aos-duration={800}>
                    <img src={ServiceLogo3} alt="" /> <span className="service-indi-text">Cyber Security</span> <span className="service-indi-text-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam nunc, amet massa auctor.</span>
                    </div>
                    <div className="service-individual" data-aos="fade-left" data-aos-delay={100} data-aos-duration={800}>
                    <img src={ServiceLogo4} alt="" /> <span className="service-indi-text">RPA</span> <span className="service-indi-text-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam nunc, amet massa auctor.</span>
                    </div>
                    <div className="service-individual" data-aos="fade-left" data-aos-delay={100} data-aos-duration={800}>
                    <img src={ServiceLogo5} alt="" /> <span className="service-indi-text">Cloud Services</span> <span className="service-indi-text-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam nunc, amet massa auctor.</span>
                    </div>
                    <div className="service-individual" data-aos="fade-left" data-aos-delay={100} data-aos-duration={800}>
                    <img src={ServiceLogo6} alt="" /> <span className="service-indi-text">Website Development</span> <span className="service-indi-text-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam nunc, amet massa auctor.</span>
                    </div>
                </div>
                <div className="col-lg-6 services-image">
                    <img src={ServiceImg} alt="" style={{marginLeft: 'auto', display: 'block'}} />
                </div>
                </div>
            </div>
    );

}


export default Services;