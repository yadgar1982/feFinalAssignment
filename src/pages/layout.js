import React from "react";
import { Link } from "react-router-dom";
import "./layout.css"


export function Navbar(){
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary  border-bottom box-shadow pay-3 bm-3">

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Review ">Review Form</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Details">Comments</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>

    );
}

