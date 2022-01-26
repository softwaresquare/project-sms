import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

function GeneralSettings() {
  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="General Settings" />
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

          {/* SETTINGS FORM */}
          <form className="p-2 mx-1 border ">
            <div className="border p-3">
              <h4>General</h4>
              <hr />
              <div className="form-group row align-items-center">
                <label className="col-3">School / College Name</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="First name"
                    defaultValue="Caspian Valley S.S."
                    name="profile-first-name"
                    required
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Established In</label>
                <div className="col">
                <NepaliDatePicker inputClassName="form-control"
                              className=""
                              options={{ calenderLocale: "en", valueLocale: "en" }}
                               />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Address</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Enter Address"
                    name="profile-last-name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Email Address</label>
                <div className="col">
                  <input
                    type="email"
                    placeholder="Enter Email address"
                    name="profile-email"
                    required
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Location</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Enter location"
                    name="profile-location"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Phone No.</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Enter Phone No."
                    name="profile-location"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">College Contact No. 1</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Enter contact no."
                    name="profile-location"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">College Contact No. 2</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Enter contact no."
                    name="profile-location"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Contact Email</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Enter Contact Email Address"
                    name="profile-location"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Principle's Name</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Enter Principle's Name"
                    name="profile-location"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group row align-items-center">
                <label className="col-3">Footer Copyrights</label>
                <div className="col">
                  <input
                    type="text"
                    defaultValue="All Rights Reserved, Caspian Valley SS"
                    placeholder="Enter copyright text"
                    name="profile-location"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-3">Logo</label>
                <div className="col">
                  <div className="custom-file">
                    <input
                      type="file"
                      id="validatedCustomFile"
                      required
                      className="custom-file-input"
                    />
                    <label
                      htmlFor="validatedCustomFile"
                      className="custom-file-label"
                    >
                      Choose file...
                    </label>
                    <div className="invalid-feedback">
                      Example invalid custom file feedback
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border mt-3 p-3 ">
             
              <h4>Online Class Setting</h4>
              <hr />
              <div className="form-group row align-items-center">
                <label className="col-3">Class Duration (In Minutes.)</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Enter duration"
                    defaultValue='45'
                    name="profile-first-name"
                    required
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <button type="submit" className="btn btn-info">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GeneralSettings;
