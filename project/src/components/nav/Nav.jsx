import React from "react";
import {Link} from "react-router-dom"
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import brand from "../../assets/images/Meubel_House_Logos-05.svg";

const Nav = () => {

  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <img src={brand} alt="brand_logo" />
          FURNIRO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="../">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="../shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="../about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="../contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="top-icon">
            <IoIosHeartEmpty />
            <FiSearch />
            <FaRegUser />
            <BsCart3 />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
