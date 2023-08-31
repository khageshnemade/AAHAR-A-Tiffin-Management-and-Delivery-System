import React from "react";
import "./help.css";
import i1 from "../assets/img/Help/track-bill.png";
import i2 from "../assets/img/Help/pen-paper.png";
import i3 from "../assets/img/Help/use-interface.png";
import i4 from "../assets/img/Help/payment-record.png";
import i5 from "../assets/img/Help/send-bill.png";
import Navbar from "./navHome";
import Footer from "./footer";

export default function Help() {
  return (
    <div className="bgclass ">
      <Navbar />
      <div style={{ minHeight: "15vh", maxHeight: "50vh", margin: "auto" }}>
        <div
          style={{ height: "4px", width: "100", backgroundColor: "red" }}
        ></div>
        <h1
          className="text-center mb-0 heading"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
          Help
        </h1>
        <div
          style={{ height: "4px", width: "100", backgroundColor: "red" }}
        ></div>
      </div>
      <div className="container row mb-3 mx-auto">
        <div className="col-md-3 col-sm-6 mb-2">
          <div className="card h-100 d-flex flex-column card-hover-effect">
            <div className="card-body">
              <h5 className="card-title">Traditional Pen-Paper</h5>
              <p className="card-text">
                You can get rid of the traditional pen-paper method and get
                digital.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-2">
          <div className="card h-100 d-flex flex-column card-hover-effect">
            <div className="card-body">
              <h5 className="card-title">User Interface</h5>
              <p className="card-text">
                Aahar Tiffin provides you a simple and easy to use user
                interface and reliable mechanism to store your tiffin related
                data.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-2">
          <div className="card h-100 d-flex flex-column card-hover-effect">
            <div className="card-body">
              <h5 className="card-title">Payment Records.</h5>
              <p className="card-text">
                You can add all your customers, add tiffin record for each of
                them for each day and time of day, generate a bill and keep
                payment records.
              </p>
            </div>
          </div>
        </div>
        {/* Repeat the above structure for the remaining cards */}
        <div className="col-md-3 col-sm-6 mb-2">
          <div className="card h-100 d-flex flex-column card-hover-effect">
            <div className="card-body">
              <h5 className="card-title">Send Bill</h5>
              <p className="card-text">
                You can send a bill to a user via WhatsApp, hike, messenger or
                SMS message service.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-2">
          <div className="card h-100 d-flex flex-column card-hover-effect">
            <div className="card-body">
              <h5 className="card-title">Route Management</h5>
              <p className="card-text">
                Create multiple routes as per your need and let our system
                automatically assign customers to those routes.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-2">
          <div className="card h-100 d-flex flex-column card-hover-effect">
            <div className="card-body">
              <h5 className="card-title">Order Management</h5>
              <p className="card-text">
                Efficiently track and fulfill all your client orders along with
                the maintenance of client data, location and history.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-2">
          <div className="card h-100 d-flex flex-column card-hover-effect">
            <div className="card-body">
              <h5 className="card-title">Customer Management</h5>
              <p className="card-text">
                Instantly access your customer’s full profile, their area, order
                & payment history & recurring orders for a desired tenure.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 mb-2">
          <div className="card h-100 d-flex flex-column card-hover-effect">
            <div className="card-body">
              <h5 className="card-title">Product Management</h5>
              <p className="card-text">
                Each product can be customized with a myriad of settings that
                help you control user behavior- from “recurring only” to
                pre-ordered products.
              </p>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="fixed-bottom btn btn-success text-white"
        style={{ width: "100px" }}
      >
        GoToTop
      </a>
      <Footer />
    </div>
  );
}
