import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    phone: ""
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous error
  
    if (credentials.password !== credentials.cpassword) {
      setError("Passwords do not match");
      return;
    }
  
    const { name, email, password, phone } = credentials;
    setLoading(true); // Start loading
  
    try {
      const response = await fetch("http://localhost:4000/auth/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, phone }),
      });
  
      // Check if response is OK (status 200-299)
      if (response.ok) {
        const json = await response.json();
        localStorage.setItem('token', json.jwtToken);
        setCredentials({ name: "", email: "", password: "", cpassword: "", phone: "" }); // Reset form fields
        navigate("/"); // Navigate to home page
      } else {
        const errorData = await response.json(); // Parse error details if the response is not OK
        setError(errorData.error || "Failed to create user");
      }
    } catch (err) {
      setError("An error occurred: " + err.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };
  

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    if (error) setError(null); // Clear error on user input
  };

  return (
    <div className="signup-container">
      <form className='form-signup' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={credentials.name}
            onChange={onChange}
            minLength={6}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            minLength={6}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            value={credentials.cpassword}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={credentials.phone}
            onChange={onChange}
            required
          />
        </div>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Signup;
