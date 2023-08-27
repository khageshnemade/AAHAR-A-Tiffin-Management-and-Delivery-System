import React from "react";

import priyanka from "./img/priyanka.jpeg";
import rajesh from "./img/rajesh.jpeg";
import neha from "./img/neha.jpeg";
import amit from "./img/amit.jpeg";
import pooja from "./img/pooja.jpeg";
import chander from "./img/chander.jpg";
import surbhi from "./img/surbhi.jpeg";

export default function () {
  return (
    <div className="bg-light">
      <h1 className="text-center text-center"> Customer Reviews</h1>

      <div className="row mx-auto ">
        <div className="card mx-auto my-2" style={{ width: "18rem" }}>
          <img className="card-img-top" src={priyanka} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Priyanka Sharma</h5>
            <p className="card-text">
              I've tried several tiffin apps, but Aahar stands out with its
              impressive variety of meal options. The quality and taste of the
              food are exceptional. A game-changer for busy professionals like
              me.
            </p>
          </div>
        </div>

        <div className="card mx-auto my-2" style={{ width: "18rem" }}>
          <img className="card-img-top" src={rajesh} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Rajesh Kumar</h5>
            <p className="card-text">
              I've tried several tiffin apps, but Aahar stands out with its
              impressive variety of meal options. The quality and taste of the
              food are exceptional. A game-changer for busy professionals like
              me.
            </p>
          </div>
        </div>

        <div className="card mx-auto my-2" style={{ width: "18rem" }}>
          <img className="card-img-top" src={neha} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Neha Patel</h5>
            <p className="card-text">
              Aahar's customer service is top-notch! They go above and beyond to
              address any concerns or preferences I have regarding my tiffin
              orders. Their commitment to customer satisfaction is truly
              commendable.
            </p>
          </div>
        </div>

        <div className="card mx-auto my-2" style={{ width: "18rem" }}>
          <img className="card-img-top" src={amit} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Amit Singhania</h5>
            <p className="card-text">
              As a health-conscious individual, I appreciate Aahar's focus on
              nutritious meals. The app provides detailed nutritional
              information, allowing me to make informed choices for my daily
              meals.
            </p>
          </div>
        </div>

        <div className="card mx-auto my-2" style={{ width: "18rem" }}>
          <img className="card-img-top" src={pooja} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Pooja Verma</h5>
            <p className="card-text">
              {" "}
              Aahar has made my life so much easier. No more worrying about
              cooking or grocery shopping. I can customize my meal plans and
              enjoy a variety of delicious dishes without any hassle.
            </p>
          </div>
        </div>

        <div className="card mx-auto my-2" style={{ width: "18rem" }}>
          <img className="card-img-top" src={chander} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Chander Mohan</h5>
            <p className="card-text">
              Since the day I started using the Aahar app, there is no looking
              back. I am satisfied with it. At least it is better than other
              apps comparatively.
            </p>
          </div>
        </div>

        <div className="card mx-auto my-2" style={{ width: "18rem" }}>
          <img className="card-img-top" src={surbhi} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Surbhi Kshyap</h5>
            <p className="card-text">
              {" "}
              Looking for a good place to eat? Aahar Foodiee helps you find that
              place easily and provides you suggestions based on user feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
