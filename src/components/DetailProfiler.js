import React from "react";

import { Link } from "react-router-dom";

import logo from "../img/upload/logo.png";
import { BASEURL } from "./constant";

function DetailProfiler(props) {
  const userData = props.location.data;
  return (
    <>
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
          <Link to="/">
            <img src={logo} alt="Pro-File" className="logo" />
          </Link>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="profile-image-box">
          <div className="cover-image"></div>
          <div className="below-cover-image">
            <center>
              <div className="profile-image">
                <img
                  src={`${BASEURL}/file/${userData?.userImageId}`}
                  alt="profileimage"
                />
              </div>
            </center>
          </div>
        </div>
        <p>{userData?.bio}</p>
        <p>
          <strong>Experience:</strong> {userData?.experience}
          <br />
          <strong>Address:</strong> {userData?.address}
          <br />
          <strong>Phone Number:</strong> {userData?.phoneno}
          <br />
          <strong>Interest:</strong> {userData?.interest}
          <br />
          <button class="btn btn-success">Download Resume</button>
        </p>
      </div>
      <div className="footer bg-light">
        <h2> Vang Team &copy; Unibadan Hackathon 2021</h2>
      </div>
    </>
  );
}

export default DetailProfiler;
