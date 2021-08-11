import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";
import TableHeader from "../minorComponents/TableHeader";
import TableFooter from "../minorComponents/TableFooter";

function Result() {
  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="Result" />
      <div class="row">
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12 py-3">
          <div className="container-fluid">
            <div className="row">
              <nav
                id="sidebarMenu"
                className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
              >
                <div className=" pt-3">
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

          {/* TABLE */}
          <div className="border p-2 mx-1">
            <TableHeader />
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr id="ivo36h">
                  <th scope="col">S.N.</th>
                  <th scope="col">Class</th>
                  <th scope="col">Faculty</th>
                  <th scope="col">Term</th>
                  <th scope="col">Published Date</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>11</td>
                  <td>Science</td>
                  <td>2nd Term</td>
                  <td>08/04/2021</td>
                  <td>
                    <i class="fas fa-edit fa-lg mx-2"></i>
                    <i class="fas fa-trash fa-lg mx-2"></i>
                    <i class="fas fa-download fa-lg mx-2"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>11</td>
                  <td>Management</td>
                  <td>3rd Term</td>
                  <td>08/04/2021</td>
                  <td>
                    <i class="fas fa-edit fa-lg mx-2"></i>
                    <i class="fas fa-trash fa-lg mx-2"></i>
                    <i class="fas fa-download fa-lg mx-2"></i>
                  </td>
                </tr>
              </tbody>
            </table>
            <TableFooter />
          </div>

          {/* PUBLISH RESULT SECTION */}
          <div class="border mt-3 p-3 mx-1">
            <h3 class="text-center">Publish Result</h3>
            <hr />
            <div class="form-group row" id="ibt2">
              <label class="col-3">Term*</label>
              <div class="col">
                <input
                  type="text"
                  required
                  placeholder="Enter Subject"
                  name="profile-bio"
                  rows="4"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-group row">
              <label id="i47og" class="col-3">
                Class*
              </label>
              <div class="col">
                <input
                  type="text"
                  required
                  placeholder="Enter Class"
                  name="profile-bio"
                  rows="4"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-group row">
              <label id="i47og" class="col-3">
                Faculty/Stream*
              </label>
              <div class="col">
                <input
                  type="text"
                  required
                  placeholder="Enter Faculty"
                  name="profile-bio"
                  rows="4"
                  class="form-control"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-3">Result File*</label>
              <div className="col">
                <div className="custom-file">
                  <input
                    type="file"
                    id="validatedCustomFile"
                    className="custom-file-input"
                    required
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
            <div class="row justify-content-center mt-4">
              <button type="submit" class="btn btn-info mb-2">
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
