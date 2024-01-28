import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Login({ setLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      // Check the status code from the server response
      if (response.ok) {
        // Login successful, setLoggedIn to true
        setLoggedIn(true);
        console.log('Login successful');
        // You can redirect or perform other actions after successful login
        history.push('/'); // Example: Redirect to the main page
      } else {
        // Handle other status codes if needed
        console.error('Login failed');
      }
    } catch (error) {
      // Handle error (show an error message)
      console.error('Error during login', error);
    }
  };
  

  return (
    <div>
      <div className="d-flex justify-content-center mt-4">
        <div className="d-flex flex-row">
          <div className="">
            <div className="box1" style={{ width: "200px", height: "300px", backgroundColor: "blue" }}>
              <span className="text-center">Login</span>
            </div>
          </div>
          <div className="mx-2">
            <span>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="enter email/mobile number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    By continuing, you agree to flipkart's <span style={{ color: "blue" }}>Terms of Use</span> and <span style={{ color: "blue" }}>Privacy <br /> policy</span>
                  </label>
                </div>
                <div className="card mt-2">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
                <span className="text-center">OR</span>
                <div>
                  <div className="card mt-2">
                    <button className="btn btn-light">
                      Request to OTP
                    </button>
                  </div>
                </div>
                <span className="text-center" style={{ color: 'blue' }}>
        New to Flipkart?{' '}
        <Link to="/signup" style={{ color: 'blue', textDecoration: 'underline' }}>
          Create an account
        </Link>
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
