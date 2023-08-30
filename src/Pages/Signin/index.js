import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import Navbar from "../../Components/navHome";
import config from "../../config";
import "./index.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const logout = () => {
    Cookies.remove("email");
    Cookies.remove("password");
    // Clear any other cookies you might have set
    // Redirect to the login page or perform other actions
  };

  const signinUser = () => {
    if (email.length === 0) {
      toast.warning("Please enter email");
    } else if (password.length === 0) {
      toast.warning("Please enter password");
    } else {
      const body = {
        email,
        password,
      };

      const url = config.serverURL + "/signin";

      axios
        .post(url, body)
        .then((response) => {
          const result = response.data;

          if (result.status === "success") {
            // Set cookies
            Cookies.set("email", email);

            Cookies.set("password", password);
            console.log(email, password);

            // Redirect based on role
            if (result.data.role === "ROLE_ADMIN") {
              navigate("/Admin", { logout });
            } else if (result.data.role === "ROLE_DELIVERYBOY") {
              navigate("/Delivery", { logout });
            } else {
              navigate("/showTiffin", { logout });
            }
          } else {
            toast.error("Invalid username or password");
          }
        })
        .catch((error) => {
          console.error("Error during signin:", error);
          toast.error("An error occurred during signin");
        });
    }
  };

  return (
    <div className="">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="text-center ">
        <div className="login-box ">
          <h1>Login</h1>
          <div className="textbook">
            <i className="fas fa-envelope"></i>
            <input
              type="text"
              placeholder="Enter Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="textbook">
            <i className="fas fa-lock"></i>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="form-control"
            />
            <button className="btn btn-success" onClick={toggleShowPassword}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="mb-3" style={{ marginTop: 20 }}>
            <div>
              Dont have an account?
              <Link to="/signup" style={{ color: "wheat" }}>
                <h4>SignUp Here</h4>
              </Link>
            </div>
            <button
              onClick={signinUser}
              style={style.signIn}
              className="btn btn-success"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

const style = {
  container: {
    width: 500,
    height: 350,
    padding: 2,
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderRadius: 10,
    border: 1,
    borderStyle: "solid",
    borderColor: "#171511",
    boxShadow: "1px 1px 30px 10px #FFEEB8",
  },
  signIn: {
    position: "relative",
    width: "100%",
    height: 50,
    backgroundColor: "#4caf50",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
    textAlign: "center",
  },
};

export default Signin;
