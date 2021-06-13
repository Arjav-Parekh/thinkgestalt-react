import React from "react";
import CarouselImg1 from "../../images/cs1.png"
import CarouselImg2 from "../../images/cs2.png"

function CaseStudy(){
    return (
<div className="case-study">
        <div className="container-heading-text-two">
          <span style={{fontWeight: 300, fontStyle: 'italic'}}>Case</span> <span style={{fontWeight: 600}}>Studies</span>
        </div>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" style={{margin: '72px 120px 0 120px'}}>
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" />
            <li data-bs-target="#myCarousel" data-bs-slide-to={1} />
          </ol>
          {/* Wrapper for slides */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={CarouselImg1} alt="" style={{width: '100%'}} />
              <div className="carousel-caption">
                <h5>ROBOTIC PROCESS AUTOMATION</h5>
                <p>80% productivity gains in packaging company.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={CarouselImg2} alt="" style={{width: '100%'}} />
              <div className="carousel-caption">
                <h5>CLOUD SERVICE</h5>
                <p>Cloud based ecommerce and point of sale solutions.</p>
              </div>
            </div>
          </div>
          {/* Left and right controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <br />
        <p className="below-carousel-text">With a decade of experience in <em style={{fontWeight: 500, fontStyle: 'normal'}}>Web &amp; Software Solutions</em>, access to <em style={{fontWeight: 600, fontStyle: 'normal'}}>top tier talent</em>, we <em style={{fontWeight: 500, fontStyle: 'normal'}}>Fast Track</em> the entire process and drive organizational change from within. We bring <em style={{fontWeight: 500, fontStyle: 'normal'}}>Careful Planning, Alignment, and Aggressive Execution</em> so that you can glimpse the <em style={{fontWeight: 500, fontStyle: 'normal', textDecoration: 'underline'}}>Future today</em>.</p>
      </div>
    );

}

export default CaseStudy;