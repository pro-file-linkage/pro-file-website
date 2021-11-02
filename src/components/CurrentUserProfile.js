import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import team from "../img/upload/team.jpg";
import logo from "../img/upload/logo.png";
import axios from "axios";
import { BASEURL } from "./constant";

function CurrentUserProfile({ notLoggedInUser }) {
  const history = useHistory();
  const LoggedOut = () => {
    localStorage.clear("user");
    history.push("/");
    // history.go(0);
  };

  const [profession, setProfession] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [address, setAddress] = useState("");
  const [experience, setExperience] = useState("");
  const [username, setUsername] = useState("");
  const [interest, setInterest] = useState("");
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  //   console.log(user?.user?._id);
  const onUpdateBio = async () => {
    setLoading(true);
    let data = new FormData();
    data.append("profession", profession);
    data.append("bio", bio);
    data.append("phoneno", phoneno);
    data.append("experience", experience);
    data.append("interest", interest);
    data.append("fullName", fullName);
    data.append("file", file);
    data.append("address", address);
    data.append("resume", "resume");
    await axios
      .put(`http://localhost:5000/api/auth/updateUserProfile/${user?.user?._id}`, data, {
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      })
      .then((response) => {
        setLoading(false);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        history.push("/");
      });
  };
  useEffect(() => {
    const isLogggedIn = localStorage.getItem("user");
    if (isLogggedIn) {
      history.push("/profile");
    } else {
      history.push("/signup");
    }
  }, [history]);

  // const fetchUserData = async () => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   const userEmail = user?.email;
  //   const data = JSON.stringify({
  //     email: userEmail,
  //   });
  //   console.log(data);
  //   await axios
  //     .get(
  //       "http://localhost:5000/api/auth/getUserDetails",
  //       {
  //         email: "profidfkvle@gmail.com",
  //       },
  //       {
  //         headers: { "Content-Type": "application/json; charset=UTF-8" },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response);
  //     });
  // };
  useEffect(() => {
    // fetchUserData();
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userEmail = user?.email;
    const fetchData = async () => {
      await axios
        .get(
          `${BASEURL}/allProfiles`,

          {
            headers: { "Content-Type": "application/json; charset=UTF-8" },
          }
        )
        .then((response) => {
          setProfile(
            response?.data.filter((item) => {
              return item.email.includes(userEmail);
            })
          );
        });
    };
    fetchData();
  }, []);

  console.log(profile);
  const onUpload = (event) => {
    setFile(event.target.files[0]);
  };
  //   const updateProfile =
  console.log(file);
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
          <div className="cover-image">
            <div className="edit-button">
              <i className="fa fa-edit" style={{ fontSize: "24px" }}></i>
            </div>
          </div>
          <div className="below-cover-image">
            <center>
              <div className="profile-image">
                <img src={team} alt="profileimage" />
                <div className="edit-button">
                  <label>
                    <i className="fa fa-edit" style={{ fontSize: "24px" }}>
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => onUpload(e)}
                      />
                    </i>
                  </label>
                </div>
              </div>
            </center>
          </div>
        </div>
        <div className="container profile-edit" style={{ padding: "0 3%" }}>
          <div
            className="input-group mb-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* <!-- <div className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-edit" style="font-size:20px"></i></span>
            </div> --> */}
            <input
              type="text"
              className="form-control input-lg"
              placeholder={"Backend Developer"}
              value={profile[0]?.profession}
              onChange={(e) => setProfession(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={profile[0]?.fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              className="form-control ml-1"
              placeholder="Username"
              value={profile[0]?.username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <textarea
            className="form-control mb-3"
            name=""
            id=""
            rows="5"
            value={profile[0]?.bio}
            onChange={(e) => setBio(e.target.value)}
          >
            About
          </textarea>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Experience: x years"
            value={profile[0]?.experience}
            onChange={(e) => setExperience(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Address"
            value={profile[0]?.address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number 1"
              value={profile[0]?.phoneno}
              onChange={(e) => setPhoneno(e.target.value)}
            />
          </div>
          <strong>Interest:</strong>
          <input
            type="text"
            className="form-control mb-3"
            data-role="taginput"
            placeholder="Interest: seperate with comma"
            value={profile[0]?.interest}
            onChange={(e) => setInterest(e.target.value)}
          />

          <strong>Upload Resume:</strong>
          <input type="file" className="form-control mb-3" disabled />

          <input
            type="submit"
            value={loading ? "Loading.." : "submit"}
            className="btn btn-success mb-3"
            style={{ backgroundColor: "green", color: "white" }}
            onClick={onUpdateBio}
            disabled={loading}
          />
          <button
            className="btn btn-success mb-3 mr-auto"
            style={{ backgroundColor: "green", color: "white", float: "right" }}
            onClick={LoggedOut}
          >
            Log out
          </button>
        </div>
      </div>

      <div className="footer bg-light">
        <h2> Vang Team &copy; Unibadan Hackathon 2021</h2>
      </div>
    </>
  );
}

export default CurrentUserProfile;
