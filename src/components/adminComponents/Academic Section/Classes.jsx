import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";
import TableHeader from "../minorComponents/TableHeader";
import { Tab } from "bootstrap";
import TableFooter from "../minorComponents/TableFooter";

function TeacherLeaveNotice() {
  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="Classes" />
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
                <tr>
                  <th scope="col" id="iydv26">
                    S.N.
                  </th>
                  <th scope="col">Class</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Section</th>
                  <th scope="col">No. of Students</th>
                  <th scope="col">Room No.</th>
                  <th scope="col">Block</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>11</td>
                  <td>Science</td>
                  <td>A</td>
                  <td>45</td>
                  <td>29</td>
                  <td>A1</td>
                  <td>
                    <i class="fas fa-edit fa-lg mx-2"> </i>
                    <i class="fas fa-trash fa-lg mx-2"> </i>
                    <i class="fas fa-eye fa-lg mx-2"> </i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>11</td>
                  <td>Management</td>
                  <td>B</td>
                  <td>42</td>
                  <td>14</td>
                  <td>B1</td>
                  <td>
                    <i class="fas fa-edit fa-lg mx-2"> </i>
                    <i class="fas fa-trash fa-lg mx-2"> </i>
                    <i class="fas fa-eye fa-lg mx-2"> </i>
                  </td>
                </tr>
              </tbody>
            </table>

            <TableFooter />
          </div>

          {/* ADD NEW CLASS */}
          <div className="border p-3 mx-1 mt-3">
            <h3 className="text-center">Add New Class</h3>
            <hr />
            <form className="mt-3">
              <div className="form-group row align-items-center">
                <label className="col-3">Class*</label>
                <div className="col">
                  <select required className="form-control">
                    <option>11</option>

                    <option>12</option>
                  </select>
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Section*</label>
                <div className="col">
                  <select required className="form-control">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Subject*</label>
                <div className="col">
                  <select required className="form-control">
                    <option>Science</option>

                    <option>Management</option>

                    <option>Humanities</option>
                  </select>
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Block</label>
                <div className="col">
                  <select className="form-control">
                    <option>Block A1</option>
                    <option>Block B2</option>
                  </select>
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">No. of Students*</label>
                <div className="col">
                  <input
                    type="number"
                    placeholder="Enter No. of Students"
                    name="profile-email"
                    required
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Room No.*</label>
                <div className="col">
                  <input
                    type="number"
                    placeholder="Enter Room No."
                    name="profile-email"
                    required
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <button type="submit" className="btn btn-info mr-5">
                  Add New Class
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherLeaveNotice;
