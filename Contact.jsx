import React from "react";


const Contact=()=>{
return(
<>
<div className="container mb-3">
<div className="container-fluid pt-3">
<h1 className="text-center text-capitalize ">Contact</h1>
<hr className="w-25 mx-auto"/>
<div className="w-50 mx-auto">
<form action="/action_page.php">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" placeholder="Enter your name" id="name"/>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>
  </div>
  <div class="form-group">
    <label for="pwd">Contact:</label>
    <input type="password" class="form-control" placeholder="Enter Contact" id="pwd"/>
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="password" class="form-control" placeholder="Enter email" id="pwd"/>
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
<section className="bg-primary mb-2">
<article class="py-5 text-center text-white">
<div>
  <h5 className="display-8">May i hellp you:9630169487</h5>
  <p>If you want Email me: rkumar45650@gmail.com</p>
  <button className="btn btn-warning">Contact Now</button>
</div>

</article>

</section>


</>
)



}
export default Contact;