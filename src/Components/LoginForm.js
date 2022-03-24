import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log(event);
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const getusers = JSON.parse(localStorage.getItem("user")) || [];

    const userId = {
      email: "sntuser",
      password: "Snt@1234",
    };

    getusers.push(userId);

    console.log(userId);
    if (userId.email === login.email && userId.password === login.password) {
      localStorage.setItem("user", JSON.stringify(getusers));

      navigate("/ListForm1");
    } else {
      alert("Please enter valid details");
    }
  };

  return (
    <>
      <div className="container ">
        <h2 style={{ color: "white", textAlign: "center" }}>Login Page</h2>
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  <b>Email address</b>
                </label>
                <input 
                  type="text"
                  className="form-control"
                  name="email"
                  required
                  onChange={handleChange}
                  placeholder="Enter email address"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp"  className="text-muted" style={{ color: "blue" }}>
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div >
                
                <label htmlFor="exampleInputPassword1">
                  <b>Enter Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  required
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  title="Minimum eight character, at least one Uppercase, on lowercase,one special character,one digit:"
                  placeholder="Enter password"
                  onChange={handleChange}
                  id="exampleInputPassword1"
                />
                
              </div>

              <button type="submit" className="btn btn-secondary">
                LogIn
              </button>
              <button type="submit" style={{marginLeft:"10px"}} className="btn btn-secondary">
                Register
              </button>
              <button type="submit"  style={{marginLeft:"10px"}} className="btn btn-secondary">
                forgotpassword
              </button>
            </form>
          </div>
        </div>
      
    </>
  );
}

export default LoginForm;