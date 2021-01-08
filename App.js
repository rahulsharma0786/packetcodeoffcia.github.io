import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Switch,Route} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Gallery from "./Gallery";
import About from "./About";
import Admin from "./Admin";
import Navbar from "./Navbar";

const App=()=>{
return(
<>
<Navbar/>
<Switch>

<Route exact path="/" component={Home}/>
<Route exact path="/About" component={About}/>
<Route exact path="/Contact" component={Contact}/>
<Route exact path="/gallery" component={Gallery}/>
<Route exact path="/Admin" component={Admin}/>

</Switch>



</>
)





}
export default App;