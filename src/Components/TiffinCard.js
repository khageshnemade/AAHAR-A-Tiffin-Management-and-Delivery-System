import axios from "axios";
import React from "react";
import Card from "react-bootstrap/Card";
import config from "../config";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "./TiffinCard.css";

const TiffinCard = ({ tiffin }) => {
  const [tiffins, setTiffins] = useState([]);
  const { state } = useLocation("");

  const searchTiffins = () => {
    const url = config.serverURL + `/tiffin/details`;
    axios
      .get(url, { headers: { Authorization: `Bearer ${localStorage["jwt"]}` } })
      .then((response) => {
        const result = response.data;
        setTiffins(result["data"]);
        console.log(tiffins);
      });
  };
  useEffect(() => {
    searchTiffins();
    console.log("getting called");
    if (state) {
      toast.info(state.message);
    }
  }, []);

  return (
    <div>
      <hr />

      <h1
        className="text-center text-white heading"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        Tiffins List
      </h1>
      <hr />
      <br />

      <br />
      <div className="container ">
        <div className="row ">
          {tiffins.map((tiffin, index) => (
            <div className="col-md-3 col-sm-4 col-lg-3 col-6 mb-2">
              <div className="tiffin-card">
                <div className="card-image-wrapper">
                  <img
                    src={config.serverURL + "/images/" + tiffin.tiffinImage}
                    className="card-img-top"
                    alt="Tiffin"
                  />

                  <a href="/signin">
                    <div className="card-content">
                      <div className="card-body">
                        <h5 className="card-title">{tiffin.tiffinName}</h5>
                        <p className="card-text">{tiffin.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TiffinCard;
