import React from "react";
import "../../styles/adminStyles/dashboard.css";

function DefaultHeader(props) {
  return (
    <div>
      {/* Header Section*/}
      <header className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      
        <span className=" text-center navbar-brand bg-danger col-md-3 col-lg-2 me-0 px-3" href="#">
          Super Admin
        </span>
     
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="text-white w-100 text-center">
          <h3>{props.title}</h3>
        </div>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" href="#">
              Notifications
            </a>
          </div>
        </div>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" href="#">
              Sign out
            </a>
          </div>
        </div>
      </header>

    </div>
  );
}

export default DefaultHeader;
