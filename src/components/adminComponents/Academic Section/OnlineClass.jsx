import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";
import TableHeader from "../minorComponents/TableHeader";
import TableFooter from "../minorComponents/TableFooter";

function OnlineClass() {
  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="Online Class" />
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
              <tbody>
                <tr>
                  <th scope="row">Sunday</th>
                  <td>Maths</td>
                  <td>11 Science</td>
                  <td>A</td>
                  <td>9:00-9:45</td>
                  <td>Rameshwor</td>
                  <td>
                    <a href className="btn btn-success">
                      Join
                    </a>
                  </td>
                  <td className="bg-success text-white">&nbsp; Running</td>
                  <td>
                    <i class="fas fa-edit fa-lg mx-2"> </i>
                    <i class="fas fa-trash fa-lg mx-2"> </i>
                  </td>
                </tr>

                <tr>
                  <th scope="row">Sunday</th>
                  <td>Maths</td>
                  <td>11 Science</td>
                  <td>A</td>
                  <td>9:00-9:45</td>
                  <td>Rameshwor</td>
                  <td>
                    <a href className="btn btn-info disabled">
                      Join
                    </a>
                  </td>
                  <td className="bg-info text-white">&nbsp; Not Started</td>
                  <td>
                    <i class="fas fa-edit fa-lg mx-2"> </i>
                    <i class="fas fa-trash fa-lg mx-2"> </i>
                  </td>
                </tr>

                <tr>
                  <th scope="row">Sunday</th>
                  <td>Maths</td>
                  <td>11 Science</td>
                  <td>A</td>
                  <td>9:00-9:45</td>
                  <td>Rameshwor</td>
                  <td>
                    <a href className="btn btn-danger disabled">
                      Join
                    </a>
                  </td>
                  <td className="bg-danger text-white">&nbsp; Ended</td>
                  <td>
                    <i class="fas fa-edit fa-lg mx-2"> </i>
                    <i class="fas fa-trash fa-lg mx-2"> </i>
                  </td>
                </tr>
              </tbody>
              <thead className="thead-dark">
                <tr id="iduxf">
                  <th scope="col">Day</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Class</th>
                  <th scope="col">Section</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Teacher</th>
                  <th scope="col">Link</th>
                  <th scope="col">Status</th>
                  <th scope="col">Operation</th>
                </tr>
              </thead>
            </table>
            <TableFooter />
          </div>

          {/* ADD CLASS SECTION */}
          <div className="p-3 mx-1 border mt-3">
            <h3 className="text-center">Add Online Class</h3>
            <hr />
            <form type="form" className="mt-3">
              <div className="form-group row">
                <label id="i678" className="col-3">
                  Subject*
                </label>
                <div className="col">
                  <input
                    type="text"
                    required
                    placeholder="Enter Subject"
                    name="profile-bio"
                    rows={4}
                    className="form-control"
                  />
                </div>
              </div>
              <div id="i2ovg" className="form-group row">
                <label id="i47og" className="col-3">
                  Teacher*
                </label>
                <div className="col">
                  <input
                    type="text"
                    required
                    placeholder="Enter Teacher"
                    name="profile-bio"
                    rows={4}
                    className="form-control"
                  />
                </div>
              </div>
              <div id="iuh8z" className="form-group row">
                <label id="inm1l" className="col-3">
                  Time *
                </label>
                <div className="col">
                  <input
                    type="time"
                    required
                    placeholder="Select Time"
                    name="profile-bio"
                    rows={4}
                    id="ijutc"
                    className="form-control"
                  />
                </div>
              </div>
            </form>
            <div className="form-group row align-items-center" id="iwg6m">
              <label className="col-3">Class*</label>
              <div className="col">
                <select required className="form-control">
                  <option>11 Science</option>
                  <option>12 Science</option>
                  <option id="iap76a">11 Management</option>
                  <option>12 Management</option>
                  <option>11 Humanities</option>
                  <option>12 Humanities</option>
                  <option id="iqi76p">HM</option>
                </select>
              </div>
            </div>
            <div className="form-group row align-items-center" id="iumrg">
              <label className="col-3">Section*</label>
              <div className="col">
                <select required className="form-control">
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
            </div>
            <div className="form-group row align-items-center" id="iocii">
              <label className="col-3">Day*</label>
              <div className="col">
                <select name id className="form-control">
                  <option>Sunday</option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                </select>
              </div>
            </div>
            <div className="form-group row" id="i0mbh">
              <label className="col-3" id="iq8ri">
                Link*
              </label>
              <div className="col" id="i2juq">
                <input
                  type="text"
                  required
                  placeholder="Paste Link Here"
                  name="profile-bio"
                  rows={4}
                  className="form-control"
                  id="ilceq"
                />
              </div>
            </div>
            <form type="form" className="mt-3">
              <div className="form-group">
                <div className="row justify-content-center mt-4">
                  <button type="submit" className="btn btn-info mr-5">
                    Add Online Class
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineClass;
