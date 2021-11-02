import React, { useState } from "react";
import logo from "../img/upload/logo.png";
import axios from "axios";
import { BrowserRouter as Link, useHistory } from "react-router-dom";

function SignUp(props) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const data = {
    username: userName,
    email: email,
    password: password,
  };
  const history = useHistory();
  const onSignIn = async () => {
    setLoading(true);
    await axios
      .post(
        "https://ui-pro-file.herokuapp.com/api/auth",
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json; charset=UTF-8" },
        }
      )
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        history.push("/");
      });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-light navbar-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <Link to="/">
              <i
                className="fa fa-long-arrow-left"
                style={{ fontSize: "16px" }}
              ></i>
            </Link>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">
                  <i
                    className="fa fa-long-arrow-left"
                    style={{ fontSize: "16px" }}
                  ></i>
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Pro-File" className="logo" />
          </Link>
        </div>
      </nav>
      <div className="container mt-4 ">
        <br />
        <br />
        <div class="row justify-content-md-center">
          <div
            className=""
            style={{ padding: " 0 3%", minHeight: "80vh", maxWidth: "340px" }}
          >
            <center>
              <p style={{ fontSize: "xx-large", fontWeight: "bolder" }}>
                SIGN UP
              </p>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="email"
                className="form-control mb-3"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                className="form-control mb-3"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </center>
            <button
              className="btn btn-success mb-2"
              onClick={onSignIn}
              disabled={password === confirmPassword}
            >
              {loading ? "Loading" : "Sign Up"}
            </button>
            <p style={{ float: "right" }}>
              Already have an account <Link to="/login">sign in</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="footer bg-light">
        <h2> Vang Team &copy; Unibadan Hackathon 2021</h2>
      </div>
    </div>
  );
}

export default SignUp;
