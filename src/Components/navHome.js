import { Link } from "react-router-dom";
import "./NavBar.css";
const Navbar = () => {
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
                to="/Signin"
                style={{ color: "wheat" }}
              >
                <i className="bi bi-solid bi-person-circle"></i>
                Signin
              </Link>
            </li>
            <li>
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
