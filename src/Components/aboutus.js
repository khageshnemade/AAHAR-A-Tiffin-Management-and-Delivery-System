import React from "react";
import "./about.css";
import Footcomponent from "../Components/footer";
import { Link } from "react-router-dom";
import Shubhanshu from "../assets/img/Shubhanshu.png";
import Amit from "../assets/img/Amit.jpeg";
import khagesh from "../assets/img/khagesh.jpg";
import jyoti from "../assets/img/jyoti.jpg";
import shweta from "../assets/img/sweta.jpg";
import i1 from "../assets/img/Halal-Food-Market-in-America.jpg";
import i2 from "../assets/img/banner3.jpg";
import i3 from "../assets/img/delivery-boy.png";
import myimage from "../assets/img/tifin_main.jpg";
import Navbar from "./navHome";
import { Card } from "react-bootstrap";

console.log();

const Aboutus = () => {
  return (
    <>
      <Navbar />

      <div className="" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
        <div
          style={{ height: "4px", width: "100", backgroundColor: "red" }}
        ></div>
        <h1
          className=" text-white heading"
          style={{
            margin: "0px",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {" "}
          About us
        </h1>
        <div
          style={{ height: "4px", width: "100", backgroundColor: "red" }}
        ></div>
        <p className="text-white text-center">
          <h3 style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", margin: "0px" }}>
            {" "}
            Welcome to Aahar
            <br />
          </h3>{" "}
          <h5 style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", margin: "0px" }}>
            <br />
            Providing Healthy and Delicious Tiffin Services Since 2023
            <br />
            <br />
          </h5>
        </p>

        <br />
        <section className="text-white">
          <div className="row ">
            <div
              id="carouselExample"
              className="mx-auto col-sm-12 col-md-10 carousel slide"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={i1} className="d-block h-100" alt="..." />
                  <div className="carousel-caption">
                    <h3 className="opac">Food is healthy and hygienic</h3>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={i2} className="d-block h-100" alt="..." />
                  <div className="carousel-caption">
                    <h3 className="opac">
                      Best Tiffin Centers of the city at one place
                    </h3>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={i3} className="d-block h-100" alt="..." />
                  <div className="carousel-caption">
                    <h3 className="opac">
                      Food Delivery from tiffin centers in restaurant style
                    </h3>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="" style={{ paddingTop: 50 }}>
            <p className="m-2  heading fs-5">
              We love picky eaters. We love foodies. We love vegetarians. We
              love health freaks. “Is there any dessert?” We love them too. We
              love the ones who call. We even love the ones who order online. We
              love them all. “Discover your next healthy dish” Born with a
              mission to revolutionize eating habits, we believe in providing
              tiffins in Mumbai that are healthy, homely and hygienic. These
              meals are ideal for people who are too busy to cook or don’t wish
              to compromise on nutrition with restaurant food. The menu, at
              Yummy Tiffins, comes in a variety of mouth-watering cuisines and
              nutritional options- a judicious mix of carbohydrates and
              proteins, low calorie content and no artificial
              flavours/preservatives. Whether it’s Hakka noodles, Cheese Balls
              or Gulab Jamun. Nutrition doesn’t have to mean bland, boring
              diets. Ask the dietician on board. It’s just like you would make
              it, minus the effort. The team at Yummy Tiffins ensures that the
              meals are not only healthy but also appealing to the eye and
              palette. We believe in giving surprises and breaking monotony, so
              our menu changes daily and features over 40 dishes that change
              every day. That includes a variety of vegetables, daal, soups,
              raita, rice, rotis, salads, and snack items. These are healthy,
              well-balanced meals cooked in rice bran/olive oil, which provide
              the right amount of protein along with essential vitamins and
              minerals. The same food prepared in canteens or Udupi restaurants
              can be tasty, but is generally oily and big on your pocket. Yummy
              Tiffins also offers different meal plans, such as, diabetic meal,
              low/medium calorie meals, and meals for those who want to put on
              weight. This means, you can build your own healthy tiffin or
              choose from 10-12 combo schemes. Now, relish the tangy vegetable
              masala, homemade GajarHalwa, and life-changing Garlic Spinach and
              Chickpea soup. Go on, order as you are.
            </p>
            <br />
            <br />
            <div
              style={{ height: "4px", width: "100", backgroundColor: "red" }}
            ></div>
            <h1
              className="heading mb-0"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            >
              Why us
            </h1>
            <div
              style={{ height: "4px", width: "100", backgroundColor: "red" }}
            ></div>
            <div className="container text-start heading">
              <div className="row">
                <div className="col-md-4 col-sm-6 mb-2">
                  <div className="card h-100 d-flex flex-column text-dark card-hover-effect">
                    <div className="card-body">
                      <h5 className="card-title">Affordable prices.</h5>
                      <p className="card-text">
                        Customized lunch and dinner tiffin services in Mumbai
                        start at just Rs.60/-. The food that you eat is healthy,
                        yummy at the same time it’s affordable.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 mb-2">
                  <div className="card h-100 d-flex flex-column text-dark card-hover-effect">
                    <div className="card-body">
                      <h5 className="card-title"> Fresh ingredients.</h5>
                      <p className="card-text">
                        Everyday fresh vegetable of the best quality are
                        procured to ensure that the food that you eat is good
                        for your health.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 mb-2">
                  <div className="card h-100 d-flex flex-column text-dark card-hover-effect">
                    <div className="card-body">
                      <h5 className="card-title"> Tasty Food.</h5>
                      <p className="card-text">
                        Our experienced chefs ensure that the food you eat has
                        the perfect mix of spices. The food that you eat is not
                        too spicy or too oily at the same time it’s very tasty.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 mb-2">
                  <div className="card h-100 d-flex flex-column text-dark card-hover-effect">
                    <div className="card-body">
                      <h5 className="card-title"> Disposable containers.</h5>
                      <p className="card-text">
                        Food is packed in disposable plastic containers. All
                        these containers are carefully packed in a disposable
                        bag. This ensures that there are no chances of
                        contamination.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 mb-2">
                  <div className="card h-100 d-flex flex-column text-dark card-hover-effect">
                    <div className="card-body">
                      <h5 className="card-title">
                        {" "}
                        No preservatives/ artificial color/pre-cooked gravies.
                      </h5>
                      <p className="card-text">
                        No artificial preservatives, colors or pre-cooked
                        gravies to make the food look attractive. The food that
                        you eat is just like the way food cooked at home.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 mb-2">
                  <div className="card h-100 d-flex flex-column text-dark card-hover-effect">
                    <div className="card-body">
                      <h5 className="card-title"> Experienced cooks.</h5>
                      <p className="card-text">
                        Our cooks have more than a decade of experience in the
                        catering industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div
              style={{ height: "4px", width: "100", backgroundColor: "red" }}
            ></div>
            <h1
              className="heading mb-0"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
            >
              Our Team
            </h1>
            <div
              style={{ height: "4px", width: "100", backgroundColor: "red" }}
            ></div>
            <div className="row justify-content-center  heading">
              <div className="col-md-auto col-sm-4 mb-4 h-100 card-hover-effect">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={Shubhanshu}
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0 text-dark">
                    Shubhanshu <br />
                    Jaiswal
                  </h5>
                  <span className="small text-uppercase text-muted">
                    <b>CEO - Founder</b>
                  </span>
                </div>
              </div>

              <div className="col-md-auto col-sm-4 mb-4 h-100 card-hover-effect">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={shweta}
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0 text-dark">
                    Shweta
                    <br /> Bhosale
                  </h5>
                  <span className="small text-uppercase text-muted">
                    <b>CEO - Founder</b>
                  </span>
                </div>
              </div>
              <div className="col-md-auto col-sm-4 mb-4 h-100 card-hover-effect">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={Amit}
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0 text-dark">
                    Amit
                    <br /> Danole
                  </h5>
                  <span className="small text-uppercase text-muted">
                    <b>CEO - Founder</b>
                  </span>
                </div>
              </div>

              <div className="col-md-auto col-sm-4 mb-4 h-100 card-hover-effect">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={jyoti}
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0 text-dark">
                    Jyoti
                    <br /> Jadhav
                  </h5>
                  <span className="small text-uppercase text-muted">
                    <b>CEO - Founder</b>
                  </span>
                </div>
              </div>

              <div className="col-md-auto col-sm-4 mb-4 h-100 card-hover-effect">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src={khagesh}
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0 text-dark">
                    Khagesh
                    <br /> Nemade
                  </h5>
                  <span className="small text-uppercase text-muted">
                    <b>CEO - Founder</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <a
          href="#"
          className="fixed-bottom btn btn-success text-white"
          style={{ width: "100px" }}
        >
          GoToTop
        </a>

        <Footcomponent />
      </div>
    </>
  );
};
export default Aboutus;
