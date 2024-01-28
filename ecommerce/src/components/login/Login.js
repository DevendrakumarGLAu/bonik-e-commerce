import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';

function Login({ setLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Add your login logic here, for now, let's just simulate a successful login
      // Replace this with your actual authentication logic
      if (email === 'user@example.com' && password === '12345') {
        setLoggedIn(true);
        history.push('/');
      }
    };
  return (
    <div>
      <div class="d-flex justify-content-center mt-4">
        <div class="d-flex flex-row">
          <div class="">
            <div
              class="box1"
              style={{
                width: "200px",
                height: "300px",
                backgroundColor: "blue",
              }}
            >
              <span class="text-center">Login</span>
            </div>
          </div>
          <div class="mx-2">
            <span>
              <form onSubmit={handleLogin}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="enter email/mobile number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    By continuing, you agree to flipkart's{" "}
                    <span style={{ color: "blue" }}>Terms of Use</span> and{" "}
                    <span style={{ color: "blue" }}>
                      Privacy <br /> policy
                    </span>{" "}
                  </label>
                </div>
                <div class="card mt-2">
                  <button type="submit" class="btn btn-primary">
                    {" "}
                    Login
                  </button>
                </div>
                <span class="text-center">OR</span>
                <div>
                  <div class="card mt-2">
                    <button  class="btn btn-light">
                      {" "}
                      Request to OTP
                    </button>
                  </div>
                </div>
                <span class="text-center" style={{ color: "blue" }}>
                  New to Flipkart? <span>Create an account</span>
                </span>
              </form>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


