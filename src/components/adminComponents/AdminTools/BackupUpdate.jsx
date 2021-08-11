import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";

function BackupUpdate() {
  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="Backup Update" />
      <div class="row">
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12 py-3">
          <div className="container-fluid">
            <div className="row">
              <nav
                id="sidebarMenu"
                className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
              >
                <div className='pt-3'>
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

          {/* UPDATE SECTION */}
          <div className="p-4 mx-1 border">
            <h4>Update</h4>
            <hr />
            <form className="mt-3">
              <div className="form-group row align-items-center">
                <label className="col-3">Version</label>
                <div className="col">1.0</div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Check for Update</label>
                <div className="col">
                  <a href className="btn btn-outline-dark ">
                    <i className="far fa-sync" />
                  </a>
                  <a href className="btn btn-outline-dark ">
                    <i className="fas fa-chevron-up" />
                    &nbsp; Update
                  </a>
                </div>
              </div>
            </form>
          </div>

          {/* BACKUP SECTION */}
          <div className="p-4 mx-1 mt-3 border">
            <h4>Backup and Restore</h4>
            <hr />
            <form className="mt-3">
              <div className="form-group row align-items-center">
                <label className="col-3">Backup</label>
                <div className="col">
                  <a href className="btn btn-outline-dark">
                    <i className="far fa-database" />
                    &nbsp; Backup
                  </a>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-3">Restore</label>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackupUpdate;
