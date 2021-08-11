import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";

function SmsMailSettings() {
  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="SMS / Mail Settings" />
      <div class="row">
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12 py-3">
          <div className="container-fluid">
            <div className="row">
              <nav
                id="sidebarMenu"
                className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
              >
                <div className="pt-3">
                  <Sidebar />
                </div>
              </nav>
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"></main>
            </div>
          </div>
        </div>

        <div class="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-12 py-3">
          {/* Spacing */}
          <div style={{ height: "45px" }}></div>

          {/* SMS SETTINGS */}
          <div className="border p-3 mx-1">
            <h3 className="text-center">
              SMS Settings
              <hr />
            </h3>
            <form className="mt-3">
              <div className="form-group row align-items-center">
                <label className="col-3">Name*</label>
                <div className="col">
                  <input
                    type="text"
                    required
                    placeholder="Enter Name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Auth Token*</label>
                <div className="col">
                  <input
                    type="text"
                    required
                    placeholder="Enter Authentication Token"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <button type="submit" className="btn mr-5 btn-info">
                  Save Changes
                </button>
              </div>
            </form>
            <p className="text-right">Aakash SMS</p>
          </div>

          {/* MAIL SETTINGS */}
          <div className="border p-3 mx-1 mt-3">
            <h3 className="text-center">
              Mail Settings
              <hr />
            </h3>
            <form className="mt-3">
              <div className="form-group row align-items-center">
                <label className="col-3">Domain Name*</label>
                <div className="col">
                  <input
                    type="text"
                    required
                    placeholder="Enter Domain Name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">API KEY*</label>
                <div className="col">
                  <input
                    type="text"
                    required
                    placeholder="Enter API KEY"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <button type="submit" className="btn mr-5 btn-info">
                  Save Changes
                </button>
              </div>
            </form>
            <p className="text-right">Mail Gun</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmsMailSettings;
