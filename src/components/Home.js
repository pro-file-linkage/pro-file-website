import React, { useEffect, useState } from "react";
import "../components/style.css";
import "../components/bootstrap.min.css";
import img_avatar1 from "../img/profile/img_avatar1.png";
import logo from "../img/upload/logo.png";
import jokanola from "../img/upload/jokanola.jpeg";
import hazeezah from "../img/profile/hazeeza.jpeg";
import ahmed from "../img/upload/ahmed.jpeg";
import stephen from "../img/upload/stephen.jpg";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "./constant";

function Home(props) {
  const [profile, setProfile] = useState([]);
  const [searchField, setSearchField] = useState("");

  const history = useHistory();
  const selectedProfile = (data) => {
    history.push({
      pathname: "/profilerDetails",
      data: data,
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `${BASEURL}/allProfiles`,

          {
            headers: { "Content-Type": "application/json; charset=UTF-8" },
          }
        )
        .then((response) => {
          setProfile(response.data);
        });
    };
    fetchData();
  }, []);

  const filterRobots = profile.filter((robots) => {
    return robots?.profession
      .toLowerCase()
      .includes(searchField?.toLowerCase());
  });
  console.log(profile);
  return (
    <>
      <nav className="navbar navbar-expand-md bg-light navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Pro-File" className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#aboutus">
                  Contribution
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutus">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactus">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <Link to="/profile">
                  <i
                    className="fa fa-user-circle-o"
                    style={{ fontSize: "24px", padding: "7px" }}
                  ></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="text-center min-vh-80"
        style={{
          background:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://seedinglabs.org/wp-content/uploads/2018/03/uiz8.png")',
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          color: "white",
          padding: "15px",
          marginBottom: "10px",
          fontSize: "24px",
        }}
      >
        <h1>
          Need skills partner, want to showcase your skills or need a Freelance
          students within University of Ibadan? You're in right place
        </h1>
        <p>
          Any Skill you want to hire within the campus is here! You only need to
          find them below
        </p>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12"></div>
          <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12">
            <div className="input-group mb-3 mt-5">
              <input
                type="text"
                className="search-box form-control input-lg"
                placeholder="E.g. Graphics Designer"
                onChange={(e) => setSearchField(e.target.value)}
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fa fa-search" style={{ fontSize: "24px" }}></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12"></div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {filterRobots?.map((item, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-2"
            >
              <div className="card">
                <img
                  className="card-img-top"
                  src={`${BASEURL}/file/${item.userImageId}`}
                  alt="Cardimage"
                  style={{ width: "100%" }}
                />
                <div className="card-body">
                  <h4 className="card-title">{item.profession}</h4>
                  <p className="card-text">
                    <span className="border border-dark">{item.interest}</span>
                  </p>
                  <button
                    className="btn btn-success"
                    onClick={() => selectedProfile(item)}
                  >
                    See Profile
                  </button>
                  <button
                    className="btn btn-success"
                    style={{ float: "right" }}
                  >
                    Chat Me
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        id="aboutus"
        className="text-center bg-light mt-4"
        style={{
          background:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://seedinglabs.org/wp-content/uploads/2018/03/uiz8.png")',
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          padding: "10px",
          color: "white",
        }}
      >
        <h1>About US</h1>
        <div className="container">
          <p>
            <b>PRO-FILE</b> is a platform for students to build profiles,
            showcase both academic-related and soft skills, which give them
            opportunities to be contacted by the person who needs their skill
            which may be students, lecturers and even school management.
            moreover, it will allow students to find the skill and like-minded
            fellow to work together on a research project, innovative idea or
            even a startup, which will reduce the rate of unemployment and easy
            their financial problem throughout their academic career.
          </p>
        </div>
      </div>

      <div id="contactus" className="contact">
        <div className="container">
          <center>
            <h1 className="contact-child-text mb-3">Contact Us</h1>
          </center>
          <div className="row">
            <div className="col-md-6 contact-child"></div>
            <div className="col-md-6 contact-child-form">
              <form action="">
                <input
                  type="text"
                  className="form-control input-sm mb-3"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  className="form-control input-sm mb-3"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="form-control input-sm mb-3"
                  placeholder="Subject"
                />
                <textarea className="form-control input-sm mb-3" rows="3">
                  Message
                </textarea>
                <input type="submit" className="btn btn-success" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div id="team" className="jumbotron mt-4 mb-0">
        <center>
          <h1 className="mb-3">Vang Team</h1>
        </center>
        <div className="container">
          <div className="row justify-content-center mt-2">
            {/* start */}
            <div className="col-md-2 col-sm-4 team mb-2">
              <center>
                <div className="team-profile">
                  <img
                    src={hazeezah}
                    alt="team"
                    className="team-profile-picture"
                  />
                </div>
              </center>
              <p mb-5>Ogunwande hazeezah</p>
              <div className="socials">
                <i
                  className="fa fa-facebook-f"
                  style={{ fontSize: "16px" }}
                ></i>

                <i className="fa fa-twitter" style={{ fontSize: "16px" }}></i>

                <i className="fa fa-instagram" style={{ fontSize: "16px" }}></i>
              </div>
            </div>
            {/* end */}
            {/* start */}
            <div className="col-md-2 col-sm-4 team mb-2">
              <center>
                <div className="team-profile">
                  <img
                    src={ahmed}
                    alt="team"
                    className="team-profile-picture"
                  />
                </div>
              </center>
              <p mb-5>Khidir Ahmad Adedayo</p>
              <div className="socials">
                <i
                  className="fa fa-facebook-f"
                  style={{ fontSize: "16px" }}
                ></i>

                <i className="fa fa-twitter" style={{ fontSize: "16px" }}></i>

                <i className="fa fa-instagram" style={{ fontSize: "16px" }}></i>
              </div>
            </div>
            {/* end */}

            {/* start */}
            <div className="col-md-2 col-sm-4 team mb-2">
              <center>
                <div className="team-profile">
                  <img
                    src={jokanola}
                    alt="team"
                    className="team-profile-picture"
                  />
                </div>
              </center>
              <p mb-5>Jokanola Yusuff O.</p>
              <div className="socials">
                <i
                  className="fa fa-facebook-f"
                  style={{ fontSize: "16px" }}
                ></i>

                <i className="fa fa-twitter" style={{ fontSize: "16px" }}></i>

                <i className="fa fa-instagram" style={{ fontSize: "16px" }}></i>
              </div>
            </div>
            {/* end */}

            {/* start */}
            <div className="col-md-2 col-sm-4 team mb-2">
              <center>
                <div className="team-profile">
                  <img
                    src={stephen}
                    alt="team"
                    className="team-profile-picture"
                  />
                </div>
              </center>
              <p mb-5>Ilori Stephen</p>
              <div className="socials">
                <i
                  className="fa fa-facebook-f"
                  style={{ fontSize: "16px" }}
                ></i>

                <i className="fa fa-twitter" style={{ fontSize: "16px" }}></i>

                <i className="fa fa-instagram" style={{ fontSize: "16px" }}></i>
              </div>
            </div>
            {/* end */}
            {/* start */}
            <div className="col-md-2 col-sm-4 team mb-2">
              <center>
                <div className="team-profile">
                  <img
                    src={img_avatar1}
                    alt="team"
                    className="team-profile-picture"
                  />
                </div>
              </center>
              <p mb-5>Okumagba rukevwe</p>
              <div className="socials">
                <i
                  className="fa fa-facebook-f"
                  style={{ fontSize: "16px" }}
                ></i>

                <i className="fa fa-twitter" style={{ fontSize: "16px" }}></i>

                <i className="fa fa-instagram" style={{ fontSize: "16px" }}></i>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
      <div className="footer bg-light">
        <h2> Vang Team &copy; Unibadan Hackathon 2021</h2>
      </div>
    </>
  );
}

export default Home;
