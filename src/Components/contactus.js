import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import ContactIMg from "../assets/depositphotos.jpg";
import "./contact.css";
import Navbar from "../Components/navHome";
import Footer from "./footer";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const validationResult = validateForm();
    if (validationResult.isValid) {
      emailjs
        .sendForm(
          "service_0b5zcor",
          "template_z1n2mq2",
          form.current,
          // "BHXGdTl5Wyj_tCFI_"
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
      e.target.reset();
    } else {
      toast.warning(validationResult.errorMessage);
    }
  };

  const validateForm = () => {
    const formData = new FormData(form.current);

    const validationRules = {
      first_name: /^[a-zA-Z]{3,15}$/,
      last_name: /^[a-zA-Z]{3,15}$/,
      user_email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      user_mobile: /^[0-9]{10}$/,
      subject: /.+/,
      message: /.+/,
    };

    let isValid = true;
    let errorMessage = "";

    for (const [fieldName, pattern] of Object.entries(validationRules)) {
      const value = formData.get(fieldName);

      if (value.trim() === "") {
        errorMessage = `${fieldName.replace("_", " ")} is required.`;
        isValid = false;
        break; // Stop checking further fields
      } else if (!pattern.test(value)) {
        errorMessage = `Invalid ${fieldName.replace("_", " ")} value.`;
        isValid = false;
        break; // Stop checking further fields
      }
    }

    return { isValid, errorMessage }; // Return both validation result and error message
  };

  return (
    <>
      <>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        {/* MDB */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.3.1/mdb.min.css"
          rel="stylesheet"
        />
        {/* MDB */}
        {/* <link rel="stylesheet" href="contact.css" /> */}

        <section className="contact-section">
          <div>
            <Navbar></Navbar>
          </div>
          <div className="contact-bg">
            <h3>Get in Touch with Us</h3>
            <h2>contact us</h2>

            <div className="line">
              <div />
              <div />
              <div />
            </div>
            <p className="text">
              "Feel free to reach out to us for any inquiries, collaborations,
              or to discuss how we can help you create a standout resume that
              gets noticed by recruiters and hiring managers."
            </p>
          </div>
          <div className="contact-body">
            <div className="contact-info">
              <div>
                <span>
                  <i className="fas fa-mobile-alt" />
                </span>
                <span>Phone No.</span>
                <span className="text">8208437954</span>
              </div>
              <div>
                <span>
                  <i className="fas fa-envelope-open" />
                </span>
                <span>E-mail</span>
                <span className="text">admin@aahar.com</span>
              </div>
              <div>
                <span>
                  <i className="fas fa-map-marker-alt" />
                </span>
                <span>Address</span>
                <span className="text">
                  Raintree Marg, near Bharati Vidyapeeth, Sector 7, CBD Belapur,
                  Navi Mumbai, Maharashtra 400614
                </span>
              </div>
              <div>
                <span>
                  <i className="fas fa-clock" />
                </span>
                <span>Opening Hours</span>
                <span className="text">
                  Monday - Friday (9:00 AM to 5:00 PM)
                </span>
              </div>
            </div>
            <div className="">
              <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      name="last_name"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="E-mail"
                      name="user_email"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                      name="user_mobile"
                    />
                  </div>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="subject"
                    name="subject"
                  />
                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Message"
                    className="form-control"
                    defaultValue={""}
                  />
                  <input
                    type="submit"
                    className="send-btn"
                    onClick={validateForm}
                    defaultValue="send message"
                  />
                </form>
                <div>
                  <img src={ContactIMg} alt="not found" className="inner-img" />
                </div>
              </div>
            </div>
          </div>
          <div className=" row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60292.25703500949!2d72.85380006748045!3d19.183578020110968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b99d184fefd9%3A0x67c32616330c21e7!2sAAHAR!5e0!3m2!1sen!2sin!4v1692732959829!5m2!1sen!2sin"
              height={400}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className=" mx-auto"
            />
          </div>
          <section className="">
            {/* Footer */}
            <footer
              className="text-center text-white"
              style={{ backgroundColor: "#0a4275" }}
            >
              {/* Grid container */}
              {/* Grid container */}
              {/* Copyright */}

              {/* Copyright */}
            </footer>
            <Footer />
          </section>
        </section>
      </>
      <a
        href="#"
        className="fixed-bottom btn btn-success text-white"
        style={{ width: "100px" }}
      >
        GoToTop
      </a>
    </>
  );
}

export default Contact;
