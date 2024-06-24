import React from "react";
import {Link} from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesUp,
  faArrowUp,
  faAt,
  faBars,
  faEnvelope,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="container-fluid container_footer">
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md-3 mb-3">
            <Link
              to="../"
              className="mb-5 text-decoration-none"
            >
              <h5 className="mb-5">Funiro.</h5>
            </Link>
            <p className="addr">400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA</p>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5 className="mb-5">Links</h5>
            <ul className="p-0">
              <li className="nav-item mb-2">
                <Link to="../" className="nav-link p-0 text-muted">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="../shop" className="nav-link p-0 text-muted">
                  Shop
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="../about" className="nav-link p-0 text-muted">
                  About
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="../contact" className="nav-link p-0 text-muted">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5 className="mb-5">Help</h5>
            <ul className="p-0">
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                  Payment Options
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                  Returns
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="../privacy" className="nav-link p-0 text-muted">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4 offset-md-1 mb-3">
            <form>
              <h5 className="mb-5">Newsletter</h5>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <input
                  id="newsletter"
                  type="text"
                  className="form-control newsletter"
                  placeholder="Enter Your Email Address"
                />
                <button className="btn btn-primary newsletter-btn" type="button">
                  SUBSCRIBE
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="py-4 my-4 border-top">
          <p>2023 furino. All rights reverved.</p>
        </div>
      </footer>
    </section>

  );
};

export default Footer;
