import React from "react";
import Hero from "./Hero";
import InfoContainerOne from "./InfoContainerOne"
import InfoContainerTwo from "./InfoContainerTwo"
import Services from "./Services"
import CaseStudy from "./CaseStudy"
import Inspiration from "./Inspiration";
import Roles from "./Roles";
import Contact from "./Contact";





function Home(){
    return (

        <div style={{backgroundColor:"#fff"}}>
            <Hero />
            <InfoContainerOne />
            <InfoContainerTwo />
            <Services />
            <CaseStudy />
            <Inspiration/>
            <Roles/>
            <Contact/>

        </div>
    );
}

export default Home;