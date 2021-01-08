import React from "react";

const Admin=()=>{
return(
<>
<div className="bg-danger">
<div className="container mt-5">
<h2 className="text-center text-capitalize ">User Login</h2>
<div className="w-50 mx-auto">
<form action="/action_page.php">

  <div class="form-group ">
    <label for="name">Name</label>
    <input type="text" class="form-control" placeholder="Enter User name" id="name"/>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" placeholder="Enter password" id="pwd"/>

    <br></br>
    
    <button type="submit"  className="btn btn-primary">Submit</button>
  </div>
</form>
</div>
</div>
</div>
</>



)




}
export default Admin;