import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Slider from "../../Components/slider";
import Aboutus from "../../Components/aboutus";
import "./index.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import Navbar from "../../Components/navHome";
import Footcomponent from "../../Components/footer";
import TiffinCard from "../../Components/TiffinCard";
import Help from "../../Components/Help";
import DeliveryMarquee from "./DeliveryMarquee";
import delivery from "./delivery2.jpg";
import CustomerReview from "./CustomerReview";

const Home = () => {
  const navigate = useNavigate();
  const [flag, setflag] = useState("");
  const Signup = () => {
    navigate("/Signup");
  };
  const AboutUs = () => {
    setflag("true");
  };
  return (
    <div className="home">
      <div className="position-fixed w-100 " style={{ zIndex: "999" }}>
        <Navbar></Navbar>
      </div>
      <br />
      <br />
      <div style={{ height: "auto" }}>
        {" "}
        <img src={delivery} alt="" width="100%" />
      </div>
      {flag === "true" && <AboutUs />}

      <DeliveryMarquee />

      <br />
      <br />
      <br />
      <CustomerReview />
      <br />
      <br />
      <br />

      <a
        href="#"
        className="fixed-bottom btn btn-success text-white"
        style={{ width: "100px" }}
      >
        GoToTop
      </a>

      <TiffinCard />
      <Footcomponent />
    </div>
  );
};

export default Home;
