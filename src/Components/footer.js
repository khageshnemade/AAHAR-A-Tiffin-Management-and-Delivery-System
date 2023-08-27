import { color } from "@mui/system";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const email = "khageshnemade@gmail.com";
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className=" " style={{ backgroundColor: "#4caf95" }}>
        <footer className="container-fluid py-5 col text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="logo-part">
                      <div className="d-flex ">
                        <Link to="/home">
                          <h2 style={{ color: "white" }}>Aahar</h2>
                        </Link>

                        <i
                          className="fas fa-utensils fa-2x"
                          style={{ padding: 8 }}
                        ></i>
                      </div>

                      <p style={{ fontSize: "15px" }}>
                        One cannot think well, love well, sleep well, if one has
                        not dined well.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 px-4">
                    <Link to="/Aboutus">
                      {" "}
                      <h4 style={{ color: "white" }}> About</h4>
                    </Link>

                    <a
                      href="/help"
                      className="btn-footer"
                      style={{ fontSize: "15px" }}
                    >
                      {" "}
                      More Info{" "}
                    </a>
                    <br />
                    <Link to="/contact" style={{ color: "white" }}>
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 px-4">
                    <div className="row ">
                      <div className="col-md-6">
                        <ul>
                          <h4> Quick Links</h4>
                          <li>
                            {" "}
                            <Link to="/home">Home</Link>
                          </li>
                          <li>
                            {" "}
                            <Link to="/Aboutus">About</Link>
                          </li>

                          <li>
                            {" "}
                            <a href="/help"> Help</a>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link to="/contact">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 px-4 d-none d-sm-block">
                        <ul>
                          <li>
                            <a href="#">Delivery Faciliy</a>
                          </li>
                          <li>
                            <a href="#">Fax</a>
                          </li>
                          <li>
                            <a href="#">Terms</a>
                          </li>
                          <li>
                            <a href="#">Policy</a>
                          </li>
                          <li>
                            <a href="#">Refunds</a>
                          </li>
                          <li>
                            <a href="#">Paypal</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="d-flex flex-column ">
                      <Link to="#" style={{ color: "white" }}>
                        <h4>Newsletter</h4>
                      </Link>
                      <div className=" social mt-2 mb-2 d-flex flex-column flex-md-row ">
                        <a href="#" className="mx-1 mb-2">
                          <div style={{ fontSize: "25px", color: "#1877F2" }}>
                            <i class="fab fa-facebook"></i>
                          </div>
                        </a>
                        <a href="#" className="mx-1 mb-2">
                          <div style={{ fontSize: "25px", color: "#1877F2" }}>
                            <i className="fab fa-instagram"></i>
                          </div>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/khagesh-nemade-a1641917b/"
                          className="mx-1 mb-2"
                        >
                          <div style={{ fontSize: "25px", color: "#1877F2" }}>
                            <i className="fab fa-linkedin"></i>
                          </div>
                        </a>
                        <a
                          href={`mailto:${email}?subject=Login%20Assistance`}
                          className="mx-1 mb-2"
                        >
                          <div style={{ fontSize: "25px", color: "#1877F2" }}>
                            <i
                              className="fas fa-envelope m-2"
                              style={{ color: "red" }}
                            ></i>
                          </div>
                        </a>
                      </div>

                      <p className="mt-2">
                        Delivering Delights, One Tiffin at a Time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
