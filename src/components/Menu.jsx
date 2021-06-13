import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; //import the package

function Menu(props){
    return (
<div>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                  <div className="modal-content">
                    <div style={{textAlign: 'right'}}>
                    <Link to="/" style={{color:"#fff", textDecoration:"none"}}><button className="close-button-menu" >Home</button></Link>
                    <Link to="/" style={{color:"#fff", textDecoration:"none"}}> <button className="cross-button" > <i className="fas fa-home"/> </button></Link>
                      <button className="close-button-menu" data-bs-dismiss="modal"> Close </button>
                      <button className="cross-button" data-bs-dismiss="modal"> <i className="fas fa-times " /> </button>
                    </div>
                    <div className="menu-content">
                      <p className="p-one">Services</p>
                      <div className="row setting" style={{marginTop: '10px'}}>
                            <div className="col-md-6 service-col service-menu-col-left">
                            <Link to="/tailor-made-apps" style={{color:"#fff", textDecoration:"none"}}><p className="p-service-text">Tailor-Made Web Apps</p></Link>   
                            <Link to="/data-science" style={{color:"#fff", textDecoration:"none"}}><p className="p-service-text">Data Science</p></Link>   
                            <Link to="/cyber-security" style={{color:"#fff", textDecoration:"none"}}><p className="p-service-text">Cyber Security</p></Link>   
                            </div>
                            <div className="col-md-6 service-col">
                            <Link to="/robotic-process-automation" style={{color:"#fff", textDecoration:"none"}}><p className="p-service-text">Robotic Process Automation</p></Link>   
                            <Link to="/cloud-services" style={{color:"#fff", textDecoration:"none"}}><p className="p-service-text">Cloud Services</p></Link>   
                            <Link to="/website-development" style={{color:"#fff", textDecoration:"none"}}><p className="p-service-text">Website Development</p></Link>   
                            </div>
                      </div>
                      <p className="p-two">Blogs</p>
                      <p className="p-two">Contact Us</p>
                    </div>
                    {/* <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div> */}
                  </div>
                </div>
              </div>
              
    <div className="navbar-head" style={{paddingBottom: props.padd}}>
          <div className="row setting" style={{width: '100%'}}>
            <div className="col-sm-6">
              <img src={props.logo} alt="" className="animate__animated animate__flip animate__delay-1s" />
            </div>
            <div className="col-sm-6">
              {/* Button trigger modal */}
              <button type="button" className="button-one" style={{border: 'none'}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                <h3 style={{color: props.col}}>Menu</h3>
              </button>
              <div className="close-container"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="bar1" style={{backgroundColor:props.bcol}} />
                <div className="bar2" style={{backgroundColor:props.bcol}}/>
                <div className="bar3" style={{backgroundColor:props.bcol}} />
              </div>
            </div>
          </div>

        </div>
        </div>
    );

}

export default Menu;