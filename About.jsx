import React from "react";
import web2 from "../src/image/room.jpg";

const About=()=>{
return(
<>
<div className="jumbotron jumbotron-fluid">
<div className="container-fluid bg-primary">
<h1 className="text-white">About us section</h1>
<p className="text-white">welcome to my  about page</p>
<button className="btn btn-warning">My villa</button>
</div>
</div>
<div className="container-fluid pt-5 mb-1">
<h1 className="text-center text-capitalize ">About Us</h1>
<hr className="w-25 mx-auto"/>

<div className="row pt-2">
<div className="col-lg-6 col-md-6 col-12">
<img src={web2} className="img-fluid"/>

</div>
<div className="col-lg-6 col-md-6 col-12">
<h1>Who am i</h1>

<p>Hotel Recovery Strategy: Your COVID-19 Marketing Plan Preparing for a “new normal” during COVID means having a defined hotel recovery strategy. Understand when and how travel demand will pick up, how to engage potential guests, and maximize conversions directly on your hotel website.</p>

</div>
</div>
</div>
<footer>

<p className="text-center bg-dark text-white">@Copyright Hotelvilla.com 2020</p>

</footer>

</>



)





}
export default About;