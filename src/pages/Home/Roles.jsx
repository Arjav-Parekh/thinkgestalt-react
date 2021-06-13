import React from "react";

import EachRoleItem from "./EachRoleItem";



function Roles(){
    return (

      <div className="built-mission">
        <div className="container-heading-text-two">
          <span style={{fontStyle: 'italic', fontWeight: 300, lineHeight: '130px'}} data-aos="fade-up" data-aos-delay={100} data-aos-duration={800}>Built For Mission </span><br />
          <span style={{fontWeight: 600, lineHeight: '130px'}} data-aos="fade-up" data-aos-delay={100} data-aos-duration={800}>Critical Use cases</span>
        </div>
        <div className="roles-container">
          <p>By Role</p>
          <br /><br />
          <div className="container">
          <div className="row setting">
                <div className="col-md-4">
                  <EachRoleItem name="CTO"/>
                  <EachRoleItem name="Design Director"/>
         
                </div>
                <div className="col-md-4">
                <EachRoleItem name="Agency Director" />
                <EachRoleItem name="Product Manager"/>
                </div>
                <div className="col-md-4">
                <EachRoleItem name="Engineering VP"/>
                <EachRoleItem name="Project Manager" />
                </div>
              </div>
              <a className="load-more" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Show More
                  </a><br/><br/>
            </div>
          
        
        <div className="collapse" id="collapseExample">
              <div className="">
          <p>By Use Case</p>
          <br /><br />
          <div className="container">
              <div className="row setting">
                <div className="col-md-4">
                  <EachRoleItem name="Go From Design to Development"/>
                  <EachRoleItem name="Digital Transformation Development" />
         
                </div>
                <div className="col-md-4">
                <EachRoleItem name="Hire developers on demand" />
                <EachRoleItem name="Business Intelligence & Analytics"/>
                </div>
                <div className="col-md-4">
                <EachRoleItem name="Web-to-mobile conversion"/>
                <EachRoleItem name="Regulatory Compliance Development" />
                </div>
              </div>
  
            </div>
        <br /><br />
          <p>By Vertical</p>
          <br /><br />
          <div className="container">
              <div className="row setting">
                <div className="col-md-4">
                  <EachRoleItem name="Health Care" />
                  <EachRoleItem name="Finance" />
         
                </div>
                <div className="col-md-4">
                <EachRoleItem name="Technology" />
                <EachRoleItem name="Legal" />
                </div>
                <div className="col-md-4">
                <EachRoleItem name="Education" />
                <EachRoleItem name="Logistics" />
                </div>
              </div>
  
            </div>
        </div>
      </div>

      </div>
</div>
    );

}

export default Roles;