import React from "react";
import img from "./img.gif";
import backgroundImg from "./new.jpg";

export default function DeliveryMarquee() {
  return (
    <div
      style={{
        overflow: "visible", // Set overflow to "visible"
      }}
    >
      <marquee
        scrollamount="30"
        direction="right"
        style={{
          height: "30vh",

          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
        }}
      >
        <img
          src={img}
          alt="Tiffin"
          style={{
            position: "relative",

            height: "15vh",
          }}
        />
      </marquee>
    </div>
  );
}
