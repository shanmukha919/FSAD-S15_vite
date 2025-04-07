import React from 'react';
import './Registration.css';

function Registration() {
  return (
    <div class="Registration">
      <h2>Register Here</h2>
      <label><b>Full Name</b></label>
      <input type="text" name="fullName" id="fullName" placeholder="Enter Your Full Name" />
      <br />
      <label><b>Email Address</b></label>
      <input type="email" name="email" id="email" placeholder="Enter Your Email" />
      <br />
      <label><b>Password</b></label>
      <input type="password" name="pass" id="pass" placeholder="Create a Password" />
      <br />
      <label><b>Confirm Password</b></label>
      <input type="password" name="confirmPass" id="confirmPass" placeholder="Confirm Password" />
      <br /><br />
      <input type="button" name="register" id="register" value="Register" />
      <br />
      <p>Already have an account? <a href="#">Login here</a></p>
    </div>
  )
}

export default Registration