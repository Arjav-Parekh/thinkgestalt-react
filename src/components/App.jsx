import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; //import the package
import Home from "../pages/Home/Home";
import TailorMadeWebApps from "../pages/TailorMadeWebApps/TailorMadeWebApps"
import RPA from "../pages/RPA/RPA"
import CyberSecurity from "../pages/CyberSecurity/CyberSecurity"
import DataScience from "../pages/DataScience/DataScience";
import CloudServices from "../pages/CloudServices/CloudServices";
import WebDev from "../pages/WebDevelopment/WebDevelopment";


function App(){
    return(
        <BrowserRouter>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/tailor-made-apps" component={TailorMadeWebApps} />
                    <Route exact path="/robotic-process-automation" component={RPA} />
                    <Route exact path="/cyber-security" component={CyberSecurity} />
                    <Route exact path="/data-science" component={DataScience} />
                    <Route exact path="/cloud-services" component={CloudServices} />
                    <Route exact path="/website-development" component={WebDev} />


                </Switch>

       </BrowserRouter>

    )
}
export default App