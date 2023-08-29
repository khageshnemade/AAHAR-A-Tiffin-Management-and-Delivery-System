import axios from "axios";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Navbar from "../../Components/navHome";
import { Link } from "react-router-dom";
import config from "../../config";

const Signup = () => {
  const navigate = useNavigate();
  const [userName, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [role, setrole] = useState("");
  const [aadharNo, setadhar] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_0b5zcor",
  //       "template_2855mza",

  //       form.current,
  //       // "RVqxeUk9znU9IGB58"
  //       "-Dpi6T-8PP4hVQvQN"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields before submission
    if (!validateForm()) {
      return;
    }

    const body = {
      userName,
      email,
      password,
      phone,
      role,
      aadharNo,
    };
    const url = config.serverURL + "/signup";

    axios
      .post(url, body)
      .then((response) => {
        const result = response.data;
        if (result.status === "success") {
          navigate("/home");
          toast.info("User Registered Successfully");
        } else {
          console.log(result.error);
          toast.error(result.error);

          return;

          emailjs
            .sendForm(
              "service_0b5zcor",
              "template_2855mza",

              form.current,
              // "RVqxeUk9znU9IGB58"
              "-Dpi6T-8PP4hVQvQN"
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
        }
      })
      .catch((err) => console.log(err));
  };

  const validateForm = () => {
    // Validation logic for each field
    if (!/^[a-zA-Z]{3,15}$/.test(userName)) {
      toast.warning(
        "Username should be 3 to 15 characters long and contain only letters."
      );
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.warning("Please enter a valid email address.");
      return false;
    }

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
      toast.warning(
        "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter,one special charater and one digit."
      );
      return false;
    }

    if (role === "" || role === "Select Role") {
      toast.warning("Please select a valid role.");
      return false;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      toast.warning("Phone number should be 10 digits.");
      return false;
    }

    if (!/^\d{12}$/.test(aadharNo)) {
      toast.warning("Aadhar number should be exactly 12 digits.");
      return false;
    }

    return true;
  };
  useEffect(() => {
    toast.info("Welcome to Aahar");
  }, []);
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <form ref={form} onSubmit={handleSubmit}>
        <div>
          <div className="login-box ">
            <h1>Sign Up</h1>
            <div className="textbook">
              <i className="fas fa-user"></i>
              <input
                name="user_name"
                placeholder="Enter name"
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="textbook">
              <i className="fas fa-envelope"></i>
              <input
                placeholder="Enter Email"
                name="user_email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="textbook">
              <i className="fas fa-lock"></i>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                className="form-control"
              />
              <button className="btn btn-success" onClick={toggleShowPassword}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="textbook">
              <i className="fas fa-user"></i>
              {/* <label htmlFor='' className='label-control'>
              Role
            </label> */}
              <select
                style={{
                  backgroundColor: "white",
                  width: 350,
                  background: "none",
                }}
                value={role}
                onChange={(e) => {
                  setrole(e.target.value);
                }}
              >
                <option selected>Select Role</option>
                <option value="ROLE_DELIVERYBOY">DELIVERYBOY</option>
                <option value="ROLE_USER">USER</option>
              </select>
            </div>

            <div className="textbook">
              <i className="fas fa-phone"></i>
              <input
                placeholder="Enter Phone no"
                onChange={(e) => {
                  setphone(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="textbook">
              <i className="fas fa-fingerprint"></i>
              <input
                placeholder="Enter Adhar No."
                onChange={(e) => {
                  setadhar(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3" style={{ marginTop: 20 }}>
              <div>
                Already have an account?
                <Link to="/signin" style={{ color: "wheat" }}>
                  <h4>SignIn Here</h4>
                </Link>
              </div>
              <button
                onClick={Signup}
                style={style.signup}
                className="btn btn-success"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
const style = {
  container: {
    width: 400,
    height: 543,
    padding: 5,
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
  signup: {
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
export default Signup;
