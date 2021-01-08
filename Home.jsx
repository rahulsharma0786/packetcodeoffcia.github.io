import React from "react";
import web from "../src/image/hottel 1.jpg.jpg";
import web1 from "../src/image/awosam.jpg";
import web2 from "../src/image/room.jpg";
import web3 from "../src/image/meeting.jpg";
const Home=()=>{
return(
<>
<div className="container-fuild ">
<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={web} width="1100" height="400"/>
      <div className="carousel-caption ">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={web1} width="1100" height="400"/>
      <div className="carousel-caption ">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={web2} />
      <div className="carousel-caption " width="1100" height="400">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
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
<p>Hotel Recovery Strategy: Your COVID-19 Marketing Plan Preparing for a “new normal” during COVID means having a defined hotel recovery strategy. Understand when and how travel demand will pick up, how to engage potential guests, and maximize conversions directly on your hotel website.</p>

</div>
</div>
</div>
<div className="container-fluid pt-0">
<h1 className="text-center text-capitalize ">Services Us</h1>
<hr className="w-25 mx-auto"/>

<div className="row mb-1">
<div className="col-lg-6 col-md-6 col-12">
<img src={web3} className="img-fluid"/>

</div>
<div className="col-lg-6 col-md-6 col-12">
<h1>Our Services</h1>

<p>Services Gartner’s new definition for this market is as follows: “A content services platform is a set of services and microservices, embodied either as an integrated product suite or as separate applications, that share common APIs and repositories, to exploit diverse content types and to serve multiple constituencies and numerous use cases across an organization.</p>
<p> Gartner’s new definition for this market is as follows: “A content services platform is a set of services and microservices, embodied either as an integrated product suite or as separate applications, that share common APIs and repositories, to exploit diverse content types and to serve multiple constituencies and numerous use cases across an organization.</p>

</div>
</div>
</div>
<div className="container-fluid mb-5">
<h1 className="text-center text-capitalize ">Gallery</h1>
<hr className="w-25 mx-auto"/>

<div className="row text-center pt-2"> 
<div className="col-lg-4 col-md-4 col-12">
<div className="card" style={{width:"400px"}}>
<img className="card-img-top" src={web} alt="card image"/>
<div className="card-body">
<h4 className="card-title">john doe</h4>
<p className="card-text">some example text</p>
<a href="#" className="btn btn-primary">see profile</a>
</div>
</div>    
</div>

<div className="col-lg-4 col-md-4 col-12">
<div className="card" style={{width:"400px"}}>
<img className="card-img-top" src={web} alt="card image"/>
<div className="card-body">
<h4 className="card-title">john doe</h4>
<p className="card-text">some example text</p>
<a href="#" className="btn btn-primary">see profile</a>
</div>
</div>
</div>
<div className="col-lg-4 col-md-4 col-12">
<div className="card" style={{width:"400px"}}>
<img className="card-img-top" src={web} alt="card image"/>
<div className="card-body">
<h4 className="card-title">john doe</h4>
<p className="card-text">some example text</p>
<a href="#" className="btn btn-primary">see profile</a>
</div>
</div>
</div>


</div>
</div>
<section className="bg-primary mb-4">
<article className="py-5">
<div className="text-center text-white">
  <h3 className="display-5">Want to Join</h3>
  <p>Be a part of our Family</p>
  <button className="btn btn-warning" data-toggle="modal" data-target="#myModal">Join Now</button>
</div>

  <div class="modal fade" id="myModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
     
        <div class="modal-header">
          <h4 class="modal-title">Singup</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
      
        <div class="modal-body">
        <form action="/action_page.php">
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" placeholder="Enter email" id="email"/>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
  </div>
  

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
        
       
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  


</article>

</section>
<div className="container mt-1 mb-4">
<div className="container-fluid pt-1">
<h1 className="text-center text-capitalize ">Contact</h1>
<hr className="w-25 mx-auto"/>
<div className="w-50 mx-auto">
<form action="/action_page.php">
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" placeholder="Enter email" id="email"/>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
  </div>
  <div className="form-group">
  <label>Textarea</label>
  <textarea className="form-control"></textarea>

  </div>
    
      
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>
</div>


<footer>

<p className="text-center bg-dark text-white">@Copyright Hottelvilla.com 2020</p>

</footer>

</div>
</>




)



}
export default Home;