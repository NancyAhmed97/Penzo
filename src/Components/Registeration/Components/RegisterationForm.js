import React from "react";
import "./RegisterationForm.css";
function RegisterationForm() {
  const sendData = () => {
    alert("hi");
  };
  return (
    <div className="RegisterationForm">
      <h1>Register</h1>
      <h2>NEW CUSTOMER</h2>
      <p>
        By creating an account you will be able to shop faster, be up to date on
        an order's status, and keep track of the orders you have previously
        made.
      </p>
      <form onSubmit={sendData}>
        <label className="mt-3">First Name</label>
        <div>
        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />        </div>
        <label className="mt-3">Last Name</label>
        <div>
        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />        </div>
        <label className="mt-3">Email Address*</label>
        <div>
        <input type="email" class="form-control" id="basic-url" aria-describedby="basic-addon3" />        </div>
        <label className="mt-3">Password*</label>
        <div>
        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />        </div>
        <div>
            <button className="button">CONTINUE</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterationForm;
