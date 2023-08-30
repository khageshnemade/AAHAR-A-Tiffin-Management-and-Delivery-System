import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import axios from "axios";

import { useEffect } from "react";
import Cookies from "js-cookie";
import config from "../config";
const Navbar = () => {
  const navigate = useNavigate();
  const signinHandle = () => {
    if (!Cookies.get("email")) {
      navigate("/signin");
    }
    const body = {
      email: Cookies.get("email"),
      password: Cookies.get("password"),
    };

    const url = config.serverURL + "/signin";

    axios
      .post(url, body)
      .then((response) => {
        const result = response.data;
        // Redirect based on role
        if (result.data.role === "ROLE_ADMIN") {
          navigate("/Admin");
        } else if (result.data.role === "ROLE_DELIVERYBOY") {
          navigate("/Delivery");
        } else {
          navigate("/showTiffin");
        }
      })
      .catch((err) => err);
  };

  return (
    <div className="">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-grey"
        style={{ backgroundColor: "#4caf95", height: "px" }}
      >
        <ul></ul>
        <div className="d-flex text-start">
          <Link
            className="navbar-brand hov"
            to={"/"}
            style={{ fontWeight: "bold", height: 50, color: "wheat" }}
          >
            <h2>Aahar</h2>
          </Link>
          <i className="fas fa-utensils fa-2x" style={{ padding: 5 }}></i>
        </div>

        <ul>{""}</ul>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link "
                to="/Aboutus"
                style={{ color: "wheat" }}
              >
                About us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                style={{ color: "wheat" }}
              >
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/help" style={{ color: "wheat" }}>
                Help
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav me-right mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                style={{ color: "wheat" }}
                onClick={signinHandle}
              >
                <i className="bi bi-solid bi-person-circle"></i>
                Signin
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className="nav-link"
                to="/signup"
                style={{ color: "wheat" }}
              >
                <i className="bi bi-solid bi-person-circle"></i> SignUp
              </Link>
            </li>

            <ul>{""}</ul>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
