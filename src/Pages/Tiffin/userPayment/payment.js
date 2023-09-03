import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import config from "../../../config";
import payment from "../../../assets/img/payment.jpg";

const SetPayment = () => {
  const naviagte = useNavigate();
  const [orderId, setOrderId] = useState(sessionStorage.getItem("orderId"));
  const [totalAmount, setTotalAmount] = useState(
    sessionStorage.getItem("totalAmount")
  );
  const [paymentType, setPaymentType] = useState(" ");

  const save = () => {
    if (paymentType.length == 0) alert("please select payment type..");
    else {
      const body = {
        orderId,
        totalPayment: totalAmount,
        paymentType,
        paymentStatus: "paid",
      };
      naviagte("/showtiffin");
      const url = config.serverURL + `/payment`;
      axios
        .post(url, body, {
          headers: { Authorization: `Bearer ${localStorage["jwt"]}` },
        })
        .then((response) => {
          const result = response.data;
          if (result != null) {
            toast.success("Payment done Succesfull");
          } else {
            alert("something went wrong..");
          }
        });
    }
  };
  const code =
    paymentType === "UPI" ? <img src={payment} width="100%" alt="" /> : null;

  return (
    <div className="container py-5 h-100">
      <h2 style={{ textAlign: "center", color: "white" }}>Payment Details</h2>
      <div className="card " style={{ width: "70vw" }}>
        <div className="row ">
          <div className="flex align-items-center">
            <div className="  text-black">
              <form class="mx-1 mx-md-4 ">
                <div className="form-outline mb-4 bg-white"></div>
                <h5 className="fw-normal mb-3 pb-3">Payment Here</h5>
                <label className="btn btn-info"> Payment Type </label>
                <select
                  className="bg-white"
                  onChange={(e) => {
                    setPaymentType(e.target.value);
                  }}
                >
                  {" "}
                  <option className="bg-white" value="">
                    {" "}
                    paymentMode{" "}
                  </option>
                  <option value="COD"> COD </option>
                  <option value="UPI"> UPI </option>
                </select>
                {code}
                <div className="pt-1 mb-4">
                  <button
                    style={{ marginTop: "25px" }}
                    onClick={save}
                    className="btn btn-success"
                    type="button"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPayment;
