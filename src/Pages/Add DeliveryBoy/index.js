import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import NavAdmin from "../../Components/navAdmin";
import config from "../../config";
import { Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [userName, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [role, setrole] = useState("ROLE_DELIVERYBOY");
  const [aadharNo, setadhar] = useState("");

  const signupUser = () => {
    // setrole('delivery')
    console.log(role);
    const body = {
      userName,
      email,
      password,
      phone,
      role,
      aadharNo,
    };
    const url = config.serverURL + `/signup`;
    axios
      .post(url, body, {
        headers: { Authorization: `Bearer ${localStorage["jwt"]}` },
      })
      .then((response) => {
        const result = response.data;
        if (result["status"] == "success") {
          navigate("/DeliveryBoyManagement");
        } else {
          alert(result.error);
        }
      });
  };
  return (
    <div>
      <NavAdmin></NavAdmin>
      <h1 className="title" style={{ marginLeft: 250, color: "white" }}>
        Add Delivery Boy
      </h1>

      <div className="row">
        <div className="col-1"></div>
        <div className="col-4">
          <div className="form">
            <div className="mb-3">
              <label
                htmlFor=""
                className="label-control"
                style={{ color: "white" }}
              >
                Username
              </label>
              <input
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor=""
                className="label-control"
                style={{ color: "white" }}
              >
                Email Address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor=""
                className="label-control"
                style={{ color: "white" }}
              >
                Password
              </label>
              <input
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type="password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor=""
                className="label-control"
                style={{ color: "white" }}
              >
                Phone
              </label>
              <input
                onChange={(e) => {
                  setphone(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor=""
                className="label-control"
                style={{ color: "white" }}
              >
                Adharno
              </label>
              <input
                onChange={(e) => {
                  setadhar(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <button
                onClick={signupUser}
                className="btn btn-primary"
                style={{ marginLeft: 100, width: 100 }}
              >
                Add
              </button>
              <Link
                to="/Admin"
                className="btn btn-danger float-end"
                style={{ marginRight: 100, width: 100 }}
              >
                Back
              </Link>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};
export default Signup;
