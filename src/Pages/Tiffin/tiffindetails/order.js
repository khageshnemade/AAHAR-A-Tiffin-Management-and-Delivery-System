import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";
import axios from "axios";
import Address from "./address";
import { toast } from "react-toastify";
import config from "../../../config";
import Cookies from "js-cookie";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Order = () => {
  const form = useRef();
  const { state } = useLocation();
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalDays, setTotalDays] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [address, setAddress] = useState([]);

  const [myObject, setMyObject] = useState({});
 
  useEffect(() => {
    const { tiffin } = state;
    setName(tiffin.tiffinName);
    diff();
    getaddress();
  }, [endDate, startDate]);
  const today = new Date().toISOString().split("T")[0]; // Get today's date in 'yyyy-mm-dd' format

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gmuhwfg",
        "template_raygh0j",
        form.current,
        "a4p8XkFY64kuw_nL9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const save = (e) => {
    console.log("Enddate : ", e.target);
    e.preventDefault();
    console.log(e.target.order_endDate.value);
    emailjs
      .sendForm(
        "service_gmuhwfg",
        "template_raygh0j",
        form.current,
        "a4p8XkFY64kuw_nL9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(e.target.value);
    const userId = parseInt(localStorage["id"]);
    console.log(userId);
    if (userId == undefined) {
      toast.error("please login to place order");
    } else if (startDate.length == 0 || startDate <= Date.length) {
      toast.warning("please enter current or future start date");
    } else if (endDate.length == 0 || endDate < startDate) {
      toast.warning("please enter future end date");
    } else {
      const body = {
        startDate,
        endDate,
        totalDays,
        totalAmount: totalPrice,
        tiffinId: state.tiffin.tiffinId,
        userId,
      };

      const url = config.serverURL + `/user/order/AddOrder`;
      axios
        .post(url, body, {
          headers: { Authorization: `Bearer ${localStorage["jwt"]}` },
        })
        .then((response) => {
          const result = response.data;
          if (result.status == "success") {
            sessionStorage.setItem("orderId", result.data.orderId);
            sessionStorage.setItem("totalAmount", result.data.totalAmount);
            toast.success("order placed..");
            console.log(result.orderId);
            console.log(result.totalAmount);
            navigate("/payment");
          } else {
            toast.error("something went wrong..");
          }
        });
    }
  };

  const getaddress = () => {
    const url = config.serverURL + "/deliveryAddress";

    axios
      .get(url, {
        headers: { Authorization: `Bearer ${localStorage["jwt"]}` },
      })
      .then((response) => {
        const result = response.data;
        setAddress(result.data);
      })
      .catch((error) => {
        console.error("Error fetching addresses:", error);
        toast.error("Failed to fetch addresses");
      });
  };
  console.log(address);
  const diff = () => {
    var d1 = new Date(startDate);
    var d2 = new Date(endDate);
    var diff = d2.getTime() - d1.getTime();
    if (d2.getTime() < d1.getTime()) {
      var daydiff = 0;
    } else {
      daydiff = diff / (1000 * 60 * 60 * 24) + 1;
    }
    var price = daydiff * state.tiffin.tiffinPrice;
    setTotalPrice(price);
    setTotalDays(daydiff);
    const days = document.getElementById("totaldays");
    days.innerText = daydiff;
    const pay = document.getElementById("totalprice");
    pay.innerText = price;
  };

  return (
    <div className="row">
      <div className="col" />
      <div className="col">
        <h1
          style={{ alignContent: "center", color: "white" }}
          className="title"
        >
          Order Details
        </h1>

        <form onSubmit={save} ref={form}>
          <div style={{ paddingTop: "30px" }} className="mb-3">
            EmailId:
            <input
              onChange={(e) => e.preventDefault()}
              value={Cookies.get("email")}
              type="text"
              className="form-control"
              name="user_email"
            />
          </div>

          <div style={{ paddingTop: "30px" }} className="mb-3">
            <label
              htmlFor=""
              className="label-control"
              style={{ color: "white" }}
            >
              Start Date
            </label>
            <input
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
              min={today}
              type="date"
              name="order_startDate"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor=""
              className="label-control"
              style={{ color: "white" }}
            >
              End Date
            </label>
            <input
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
              min={today}
              type="date"
              className="form-control"
              placeholder="YYYY-MM-DD"
              name="order_endDate"
            />
          </div>
          <div className="mb-3">
            <select
              className="bg-white form-control"
              name="user_address"
              onChange={(e) => e.preventDefault()}
            >
              <option className="bg-white " value="Select Address">
                Select Address
              </option>

              {address.map((item, index) => (
                <option key={index} value={item.city}>
                  {item.city}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label
              htmlFor=""
              className="label-control"
              style={{ color: "white" }}
            >
              Total Days
            </label>
            <h5
              id="totaldays"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.2)",
                background: "white",
                paddingLeft: "15px",
              }}
            ></h5>
          </div>

          <div className="mb-3">
            <label
              htmlFor=""
              name="total"
              className="label-control"
              style={{ color: "white" }}
            >
              Total Price
            </label>
            <h5
              id="totalprice"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.2)",
                background: "white",
                paddingLeft: "15px",
              }}
            ></h5>
          </div>

          <div style={{ paddingTop: "50px" }} className="mb-3">
            <button className="btn btn-success" type="submit">
              Add
            </button>
            <Link to="/showTiffin" className="btn btn-danger float-end">
              Cancel
            </Link>
          </div>
        </form>
      </div>
      <div className="col" />
    </div>
  );
};

export default Order;
