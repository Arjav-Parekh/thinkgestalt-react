import React from "react";
    

function ServiceHead(props){
    return(
        <div className="service-header-text">
        <h1 className="animate__animated animate__flipInX " >{props.tOne}</h1>
        <h2 className="animate__animated animate__flipInX">{props.tTwo}</h2>
        <p className="service-header-para-one" data-aos="fade-right" data-aos-delay={100} data-aos-duration={800}>{props.paraOne}</p>
        <br />
        <p className="service-header-para-two" data-aos="fade-left" data-aos-delay={100} data-aos-duration={800}>{props.paraTwo}</p>
        </div>
    );
}
    
export default ServiceHead;