import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log form values to console for debugging
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    
    emailjs
        .sendForm("Techyservice", "template_easkmj8", e.target, "vA5GOhSiFHy_niFln")
        .then(
            (result) => {
                console.log(result.text);
                clearState();
            },
            (error) => {
                console.log(error.text);
            }
        );
};

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
  <span>
    <i className="fa fa-map-marker"></i> Address
  </span>
  {props.data ? (
    <a
      href={`https://www.google.com/maps/place/7,+Teen+Murti+Marg+Area,+New+Delhi,+Delhi+110011/@28.6000047,77.1974251,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce2a1f460b52f:0xad4c20e05ea0a1fa!8m2!3d28.6!4d77.2!16zL20vMDJuczl5?entry=ttu(
        props.data.address
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'white', textDecoration: 'none' }}

    >
      {props.data.address}
    </a>
  ) : (
    "loading"
  )}
</p>

            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
  <p>
    <span>
      <i className="fa fa-envelope-o"></i> Email
    </span>{" "}
    {props.data ? (
      <a href={`mailto:${props.data.email}`} style={{ color: 'white', textDecoration: 'none' }}>
        {props.data.email}
      </a>
    ) : (
      "loading"
    )}
  </p>
</div>

          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href="https://fb.com">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com">
                    <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com">
                    <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com">
                    <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@TechySoftwares.com">
                    <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
