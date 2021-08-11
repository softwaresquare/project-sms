import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../../styles/adminStyles/dashboard.css";
import DefaultHeader from "../DefaultHeader";
import TableHeader from "../minorComponents/TableHeader";
import TableFooter from "../minorComponents/TableFooter";
import Tippy from '@tippyjs/react';

function StudentAssignment() {
  return (
    <div>
      {/* Header Section */}
      <DefaultHeader title="Student's Assignments" />
      <div class="row">
        <div class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12 py-3">
          {/* Sidebar */}
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
            </div>
          </div>
        </div>

        <div class="col-xl-10 col-lg-8 col-md-8 col-sm-8 col-12 py-3">
          {/* Spacing */}
          <div style={{ height: "45px" }}></div>

          {/* Table */}
          <div className="border mx-1 p-2">
            <TableHeader />
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr id="iduxf">
                  <th scope="col" id="iydv26">
                    ID
                  </th>
                  <th scope="col" id="iun1a">
                    Assignment Title
                  </th>
                  <th scope="col" id="i4lkk">
                    Subject
                  </th>
                  <th scope="col" id="i4lkk">
                    Teacher
                  </th>
                  <th scope="col">Class</th>
                  <th scope="col">Deadline</th>
                  <th scope="col">Operations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">11S04</th>
                  <td>Project Work</td>
                  <td>Physics</td>
                  <td>Ramchandra Pokhari</td>
                  <td>11 Science</td>
                  <td>04/04/2021</td>
                  <td>
                    <i class="fas fa-edit btn  fa-lg edit"></i>
                    <i class="fas fa-trash btn fa-lg delete"></i>
                    <i class="fas fa-download btn fa-lg download"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">12S09</th>
                  <td>Lab Report</td>
                  <td>Chemistry</td>
                  <td>Chandralaal Narayani</td>
                  <td>12 Science</td>
                  <td>09/04/2021</td>
                  <td>
                    <i class="fas fa-edit btn fa-lg edit"></i>
                    <i class="fas fa-trash btn fa-lg delete"></i>
                    <i class="fas fa-download btn fa-lg download"></i>
                  </td>
                </tr>
              </tbody>
            </table>

            <TableFooter />
          </div>

          {/* ADD NEW ASSIGNMENTS */}
          <div className="card-body border p-3 mt-3 mx-1">
          <Tippy
                content={`You can give homeworks, project works and assignments to students from here. Once you add new assignment, notification will be sent to the students and they will be able to view the assignment that you have assigned to them. If you have selected submission method as 'Online' then students can send their works to you and you can go to 'Submitted Assignments' page to see, check and approve their assignments`}
              >
                <i class="fas fa-question-circle info"></i>
              </Tippy>
            <h3 className="text-center">Add New Assignment</h3>
            <hr />
            <form className="mt-3">
              <div className="form-group row align-items-center">
                <label className="col-3">Assignment Title*</label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Assignment Title"
                    required
                    name="profile-first-name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Assignment Description*</label>
                <div className="col">
                  <textarea
                    rows={3}
                    required
                    placeholder="Assignment Description"
                    className="form-control"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Class*</label>
                <div className="col">
                  <select required className="form-control">
                    <option>11 Science</option>
                    <option>12 Science</option>
                    <option>11 Management</option>
                    <option>12 Management</option>
                    <option>11 Humanities</option>
                    <option>12 Humanities</option>
                    <option>HM</option>
                  </select>
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Section*</label>
                <div className="col">
                  <select required multiple className="form-control">
                    <option id="iiuaeg">A</option>
                    <option id="i6eknb">B</option>
                    <option id="ilvtx5">C</option>
                  </select>
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Assignment Deadline*</label>
                <div className="col">
                  <input
                    type="date"
                    required
                    placeholder="Enter Date of Birth"
                    name="profile-location"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row align-items-center">
                <label className="col-3">Subject*</label>
                <div className="col">
                  <select className="form-control" required>
                    <option disabled>-----Science-----</option>
                    <option>Physics</option>
                    <option>Chemistry</option>
                    <option>Biology</option>
                    <option>Mathematics</option>
                    <option>English</option>
                    <option>Nepali</option>
                    <option>Social</option>
                    <option>Computer Science</option>
                    <option disabled>-----Management-----</option>
                    <option>Accountancy</option>
                    <option>Economics</option>
                    <option>English</option>
                    <option>Nepali</option>
                    <option>Business Studies</option>
                    <option>Hotel Management</option>
                    <option>Computer Science</option>
                    <option>Marketing/Business Maths</option>
                    <option>Mathematics</option>
                    <option>Rural Economics</option>
                    <option>Social</option>
                  </select>
                </div>
              </div>
              <div className="form-group row align-items-center" required>
                <label className="col-3">Assignment Submitting Method*</label>

                <div className="col">
                  <select required class="form-control">
                    <option disabled>Select Submission Method</option>
                    <option>Physical (Offline)</option>
                    <option>Online</option>
                  </select>
                </div>
              </div>
              <div className="col" />
              <div className="form-group row">
                <div className="col" />
              </div>
              <div className="form-group row">
                <label className="col-3">Assignment File</label>
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
              <div className="row justify-content-center mt-4">
                <button type="submit" className="btn btn-info mr-5">
                  Add New Assignment
                </button>
                <a href="#" className="btn btn-danger">
                  Cancel Add
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentAssignment;
